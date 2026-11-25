# Gangster Barbershop: website

One-page website for **Gangster Barbershop** ([@gangsterbarbershop.ge](https://www.instagram.com/gangsterbarbershop.ge)), Tbilisi, Saburtalo, Ana Kalandadze St. 5.

**Live site:** https://akakispanderashvili.github.io/Phone-website-/

Plain HTML, CSS and vanilla JavaScript. There is no build step: open `index.html` in a browser and it works.

## Structure

```
index.html              page markup, SEO and Open Graph tags
404.html                "page not found" page
css/style.css           all styles (colors are CSS variables at the top)
js/config.js            EDITABLE CONTENT: barbers, prices, hours, contacts, gallery
js/i18n.js              all interface text in Georgian (ka) and English (en)
js/main.js              language switch, menu, animations, lightbox
assets/                 logo, favicon, illustrations, textures
  crew/barber-1..4.svg  WANTED-poster portraits
  gallery/gallery-1..8.svg
  logo-badge.svg        round badge logo (also used in the footer)
  favicon.svg, favicon-32.png, apple-touch-icon.png
  og-image.jpg          preview image for Instagram, Facebook and Messenger links (1200×630)
  marble.jpg            black marble background
.github/workflows/pages.yml   automatic deployment to GitHub Pages
```

## Editing content

Almost everything you will want to change lives in **`js/config.js`**:

- **Barbers:** `name`, `nickname`, `specialty` (in `ka` and `en`) and `image`.
- **Prices:** `name`, `note` and `price` (a number in GEL; the ₾ sign is added automatically).
- **Hours:** `days` and `time`.
- **Gallery:** `src` and `caption`.
- **Contacts:** booking link, phone, Instagram and address.

Interface text (buttons, headings, the About story) is in **`js/i18n.js`**. Every key has a `ka` and an `en` version.

### Replacing the illustrations with real photos

1. Put the photo in `assets/` (for example `assets/crew/giorgi.jpg`).
2. In `js/config.js`, change `image: 'assets/crew/barber-1.svg'` to `image: 'assets/crew/giorgi.jpg'`.

Recommended sizes:

- Crew photos: portrait, 5:6 ratio, at least 600×720 px.
- Gallery photos: square, at least 800×800 px.
- The About-section picture is set directly in `index.html` (`assets/gallery/gallery-8.svg`).

Compress JPGs before uploading (for example with squoosh.app) so the site stays fast on phones.

## Placeholders to replace

| What | Where |
| --- | --- |
| Barber names, nicknames and specialties (Giorgi "The Razor", Luka "The Boss", Dato "The Bear", Nika "Slick") | `js/config.js` → `barbers` |
| Barber portraits (illustrations) | `assets/crew/barber-1..4.svg` |
| All prices (40 / 25 / 60 / 35 / 25 / 30 / 30 / 50 ₾) | `js/config.js` → `prices` |
| Opening hours (Mon–Sat 10:00–21:00, Sun 11:00–20:00) | `js/config.js` → `hours` |
| Gallery images (8 illustrations) | `assets/gallery/` and `js/config.js` → `gallery` |
| Kids-cut age limit ("Under 12") and the short price notes | `js/config.js` → `prices[].note` |
| About story text | `js/i18n.js` → `about.*` |
| Georgian copy: ask a native speaker to proofread it | `js/i18n.js`, `js/config.js` |

The address, phone number, booking link and Instagram link are the real ones.

## Deployment (GitHub Pages)

The workflow in `.github/workflows/pages.yml` publishes the site every time `main` changes.

**One-time setup:** go to the repository's **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**. After that, every push to `main` goes live in about a minute at:

https://akakispanderashvili.github.io/Phone-website-/

If you later connect your own domain (for example `gangsterbarbershop.ge`), also update the `canonical`, `og:url` and `og:image` URLs in `index.html` and the paths in `404.html`.

## Language

Georgian is the default. Visitors can switch with the **ქარ / EN** buttons, and the choice is remembered. You can also link straight to English with `?lang=en`, for example in your Instagram bio.

## Credits

All illustrations, the badge logo and the decor are original SVG artwork made for this site. No stock photos or photos of real people are used. Fonts come from Google Fonts: Bebas Neue, Oswald, Lora, Noto Sans Georgian and UnifrakturMaguntia.
