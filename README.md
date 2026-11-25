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
assets/                 logo, favicon, illustrations
  hero-portrait.svg     big portrait at the top of the page
  crew/barber-1..4.svg  "Line-Up" portraits (transparent background)
  gallery/gallery-1..8.svg
  lineup.svg            police line-up height chart behind the crew portraits
  logo-mark.svg         round logo (fedora + moustache)
  favicon.svg, favicon-32.png, apple-touch-icon.png
  og-image.jpg          preview image for Instagram, Facebook and Messenger links (1200×630)
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

- Crew photos: portrait, 4:5 ratio, at least 800×1000 px. A photo with a cut-out (transparent) background keeps the line-up chart visible behind it.
- Gallery photos: square, at least 800×800 px.
- Hero portrait: `assets/hero-portrait.svg` in `index.html`. A cut-out photo (transparent PNG) of a barber works best.

Compress JPGs before uploading (for example with squoosh.app) so the site stays fast on phones.

## Placeholders to replace

| What | Where |
| --- | --- |
| Barber names, nicknames and specialties (Giorgi "The Razor", Luka "The Don", Dato "The Boss", Nika "The Consigliere") | `js/config.js` → `barbers` |
| Barber portraits (illustrations) | `assets/crew/barber-1..4.svg` |
| All prices (40 / 25 / 60 / 35 / 25 / 30 / 30 / 50 ₾) | `js/config.js` → `prices` |
| Opening hours (Mon–Sat 10:00–21:00, Sun 11:00–20:00) | `js/config.js` → `hours` |
| Gallery images (8 illustrations) | `assets/gallery/` and `js/config.js` → `gallery` |
| Kids-cut age limit ("Under 12") and the short price notes | `js/config.js` → `prices[].note` |
| About story, the three rules and the quote | `js/i18n.js` → `about.*`, `quote.*` |
| Hero portrait (illustration) | `assets/hero-portrait.svg` |
| Georgian copy: ask a native speaker to proofread it | `js/i18n.js`, `js/config.js` |

The address, phone number, booking link and Instagram link are the real ones.

## Deployment (GitHub Pages)

GitHub Pages publishes the site straight from the `main` branch. There is no build step.

**One-time setup:** go to **Settings → Pages → Build and deployment**, set **Source** to **Deploy from a branch**, then choose **Branch: `main`** and folder **`/ (root)`** and tap **Save**. After that, every change to `main` goes live within a minute or two at:

https://akakispanderashvili.github.io/Phone-website-/

If you later connect your own domain (for example `gangsterbarbershop.ge`), also update the `canonical`, `og:url` and `og:image` URLs in `index.html` and the paths in `404.html`.

## Language

Georgian is the default. Visitors can switch with the **ქარ / EN** buttons, and the choice is remembered. You can also link straight to English with `?lang=en`, for example in your Instagram bio.

## Credits

All illustrations and the logo are original SVG artwork made for this site. The characters are inspired by classic gangster-era archetypes (flat-cap razor gang, the Don, the boss, the consigliere) and are not copies of any real person or TV/film character. No stock photos are used. Fonts come from Google Fonts: Anton, Inter, Playfair Display and Noto Sans Georgian.
