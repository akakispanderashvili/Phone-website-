/* Gangster Barbershop: site behaviour (no dependencies) */
(function () {
  'use strict';

  var C = window.SITE_CONFIG;
  var T = window.TRANSLATIONS;
  var LANGS = ['ka', 'en'];
  var lang = 'ka';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  var t = function (key) { return (T[lang] && T[lang][key]) || T.ka[key] || key; };
  var pick = function (obj) { return obj && typeof obj === 'object' ? (obj[lang] || obj.ka || '') : (obj || ''); };

  /* ---------- Language ---------- */
  function storedLang() {
    try {
      var q = new URLSearchParams(location.search).get('lang');
      if (LANGS.indexOf(q) > -1) return q;
      var s = localStorage.getItem('gb-lang');
      if (LANGS.indexOf(s) > -1) return s;
    } catch (e) { /* storage unavailable */ }
    return 'ka';
  }

  function setLang(next, save) {
    lang = LANGS.indexOf(next) > -1 ? next : 'ka';
    document.documentElement.lang = lang;
    if (save) { try { localStorage.setItem('gb-lang', lang); } catch (e) { /* ignore */ } }

    $$('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    $$('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var p = pair.split(':');
        el.setAttribute(p[0].trim(), t(p[1].trim()));
      });
    });
    document.title = t('meta.title');
    var md = $('meta[name="description"]');
    if (md) md.setAttribute('content', t('meta.description'));

    $$('.lang__btn').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    renderDynamic();
  }

  /* ---------- Content from config ---------- */
  function renderDynamic() {
    // Crew: WANTED posters
    $('#crew-grid').innerHTML = C.barbers.map(function (b, i) {
      var name = pick(b.name);
      return '<article class="poster reveal" style="--d:' + (i * 90) + 'ms">' +
        '<div class="poster__inner">' +
          '<p class="poster__wanted">' + esc(t('crew.wanted')) + '</p>' +
          '<div class="poster__photo"><img src="' + esc(b.image) + '" alt="' + esc(name + ' ' + pick(b.nickname)) + '" loading="lazy" width="300" height="360"></div>' +
          '<h3 class="poster__name">' + esc(name) + '</h3>' +
          '<p class="poster__nick">' + esc(pick(b.nickname)) + '</p>' +
          '<p class="poster__spec"><span>' + esc(t('crew.specialty')) + '</span>' + esc(pick(b.specialty)) + '</p>' +
          '<p class="poster__reward">' + esc(t('crew.reward')) + '</p>' +
          '<a class="btn btn--dark" href="' + esc(C.bookingUrl) + '" target="_blank" rel="noopener">' + esc(t('crew.book')) + '</a>' +
        '</div></article>';
    }).join('');

    // Prices
    $('#price-list').innerHTML = C.prices.map(function (p) {
      return '<li class="price">' +
        '<div class="price__row"><span class="price__name">' + esc(pick(p.name)) + '</span>' +
        '<span class="price__dots" aria-hidden="true"></span>' +
        '<span class="price__value">' + esc(p.price) + '&nbsp;' + esc(C.currency) + '</span></div>' +
        (p.note ? '<p class="price__note">' + esc(pick(p.note)) + '</p>' : '') +
        '</li>';
    }).join('');

    // Gallery
    $('#gallery-grid').innerHTML = C.gallery.map(function (g, i) {
      var cap = pick(g.caption);
      return '<button type="button" class="gallery__item reveal" style="--d:' + (i % 4) * 70 + 'ms" data-index="' + i + '" aria-label="' + esc(t('gallery.open') + ': ' + cap) + '">' +
        '<img src="' + esc(g.src) + '" alt="' + esc(cap) + '" loading="lazy" width="400" height="400">' +
        '<span class="gallery__cap">' + esc(cap) + '</span></button>';
    }).join('');

    // Hours
    $('#hours').innerHTML = C.hours.map(function (h) {
      return '<div><dt>' + esc(pick(h.days)) + '</dt><dd>' + esc(h.time) + '</dd></div>';
    }).join('');

    // Address
    $('#address').textContent = pick(C.address);

    observeReveals();
    if (lb.open) showLightbox(lb.index);
  }

  function applyStaticConfig() {
    $$('.js-book').forEach(function (a) { a.href = C.bookingUrl; a.target = '_blank'; a.rel = 'noopener'; });
    $$('.js-phone').forEach(function (a) { a.href = 'tel:' + C.phone; });
    $$('.js-phone-text').forEach(function (a) { a.textContent = C.phoneDisplay; });
    $$('.js-instagram').forEach(function (a) { a.href = C.instagram; });
    var q = encodeURIComponent(C.mapQuery);
    $$('.js-directions').forEach(function (a) { a.href = 'https://www.google.com/maps/search/?api=1&query=' + q; });
    var map = $('#map');
    if (map) map.src = 'https://maps.google.com/maps?q=' + q + '&z=16&output=embed';
    var ig = $('.contact-link.js-instagram');
    if (ig) ig.textContent = C.instagramHandle;
    $('#year').textContent = new Date().getFullYear();
  }

  /* ---------- Navigation ---------- */
  function initNav() {
    var nav = $('.nav');
    var burger = $('.burger');
    var menu = $('#nav-menu');

    var setOpen = function (open) {
      burger.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('menu-open', open);
    };
    burger.addEventListener('click', function () {
      setOpen(burger.getAttribute('aria-expanded') !== 'true');
    });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });

    var onScroll = function () {
      var y = window.scrollY;
      nav.classList.toggle('is-solid', y > 40);
      document.body.classList.toggle('show-fab', y > window.innerHeight * 0.6);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Highlight the current section in the nav
    if ('IntersectionObserver' in window) {
      var links = $$('.nav__menu a[href^="#"]');
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          links.forEach(function (l) {
            l.classList.toggle('is-active', l.getAttribute('href') === '#' + en.target.id);
          });
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      $$('main section[id]').forEach(function (s) { spy.observe(s); });
    }

    $$('.lang__btn').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.getAttribute('data-lang'), true); });
    });
  }

  /* ---------- Scroll-in animations ---------- */
  var revealObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('is-in'); revealObserver.unobserve(en.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    : null;

  function observeReveals() {
    $$('.reveal:not(.is-in)').forEach(function (el) {
      if (revealObserver) revealObserver.observe(el); else el.classList.add('is-in');
    });
  }

  /* ---------- Lightbox ---------- */
  var lb = { open: false, index: 0, lastFocus: null };

  function showLightbox(i) {
    var n = C.gallery.length;
    lb.index = (i + n) % n;
    var g = C.gallery[lb.index];
    $('#lightbox-img').src = g.src;
    $('#lightbox-img').alt = pick(g.caption);
    $('#lightbox-caption').textContent = pick(g.caption) + '  ·  ' + (lb.index + 1) + ' / ' + n;
  }

  function openLightbox(i) {
    lb.open = true;
    lb.lastFocus = document.activeElement;
    showLightbox(i);
    var box = $('#lightbox');
    box.hidden = false;
    requestAnimationFrame(function () { box.classList.add('is-open'); });
    document.body.classList.add('no-scroll');
    $('.lightbox__close').focus();
  }

  function closeLightbox() {
    lb.open = false;
    var box = $('#lightbox');
    box.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    setTimeout(function () { if (!lb.open) box.hidden = true; }, 250);
    if (lb.lastFocus) lb.lastFocus.focus();
  }

  function initLightbox() {
    var box = $('#lightbox');
    $('#gallery-grid').addEventListener('click', function (e) {
      var item = e.target.closest('.gallery__item');
      if (item) openLightbox(+item.getAttribute('data-index'));
    });
    $('.lightbox__close').addEventListener('click', closeLightbox);
    $('.lightbox__nav--prev').addEventListener('click', function () { showLightbox(lb.index - 1); });
    $('.lightbox__nav--next').addEventListener('click', function () { showLightbox(lb.index + 1); });
    box.addEventListener('click', function (e) { if (e.target === box) closeLightbox(); });
    document.addEventListener('keydown', function (e) {
      if (!lb.open) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') showLightbox(lb.index - 1);
      else if (e.key === 'ArrowRight') showLightbox(lb.index + 1);
      else if (e.key === 'Tab') {
        var f = $$('button', box);
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    var x0 = null;
    box.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    box.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 45) showLightbox(lb.index + (dx < 0 ? 1 : -1));
      x0 = null;
    });
  }

  /* ---------- Boot ---------- */
  applyStaticConfig();
  initNav();
  initLightbox();
  setLang(storedLang(), false);
})();
