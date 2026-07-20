# TCR Experteez Ltd — website

Responsive bilingual landing page based on the approved Figma layout. English is the default language; Russian is available from the EN/RU dropdown.

## Included functionality

- responsive desktop, tablet, and mobile layouts;
- animated header and section reveals;
- navigation with hover and active-section highlighting;
- EN/RU language dropdown with saved selection;
- service accordion;
- 3D tilt cards;
- scroll-controlled five-step process;
- rotating dotted globe and independently rotating yellow orbits;
- continuous globe descent from the final process card into the “Why in the UK” section;
- contact modal and PHP mail handler;
- server-side validation, honeypot, minimum-fill-time protection, and IP rate limiting.

## Fast local launch

### Windows

1. Install PHP 8 or newer and add `php.exe` to PATH.
2. Open the project folder.
3. Run `start.bat`.
4. Open `http://127.0.0.1:8000` if the browser does not open automatically.

You can also run manually from PowerShell:

```powershell
php -S 127.0.0.1:8000
```

### macOS / Linux

From Terminal, open the project folder and run:

```bash
chmod +x start.sh
./start.sh
```

Or start it manually:

```bash
php -S 127.0.0.1:8000
```

Then open `http://127.0.0.1:8000`.

Opening `index.html` directly is sufficient for visual review, but the PHP contact form only works through a web server.

## Hosting deployment

1. Upload all project files and the complete `assets` directory to the domain document root, usually `public_html`.
2. Enable PHP 8.0 or newer.
3. Verify that the host allows PHP `mail()` and accepts a sender from the website domain.
4. The recipient is configured in `send.php`:

```php
$to = 'info@tcrexperteez.com';
```

5. Test the form from the live HTTPS domain.

When the hosting provider requires SMTP, replace the `mail()` call in `send.php` with the SMTP settings supplied by the provider.

## Main files

- `index.html` — page structure;
- `styles.css` — base layout and components;
- `refinement.css` — component-level visual refinements;
- `final-v3.css` — Unbounded/Manrope typography, globe descent, UK section, footer, and responsive corrections;
- `review-fixes.css` — final corrections for the centred fixed menu, reversible vision animation, layered processor scene, accordion, advantage-card grid, orbit layering, London marker, and mobile/tablet layout;
- `script.js` — language switching, navigation, interactions, globe, and form submission;
- `send.php` — contact form mail handler;
- `privacy.html` — privacy policy;
- `start.bat` / `start.sh` — local launch helpers.

## Typography

Display headings use Unbounded. Navigation, buttons, descriptions, cards, and form fields use Manrope. The fonts are loaded from Google Fonts, so an internet connection is required on the first browser load.

## Final asset updates

- `assets/mission-chip.webp` — original Mission background image.
- `assets/without BG.png` / `assets/processor-foreground.png` — transparent processor foreground used above the animated trace.
- `assets/globe-london-base.png` — Europe-facing globe used in the UK section.
- `assets/location-pin.svg` — separate London marker layered above the globe.
- `assets/icon-*.svg` — supplied SVG icons used in the Why Work With Us cards.
- `assets/logo.svg` — vector logo used in the header and footer.

