# Sarah's Homestay Smart Invoice

A progressive web app for generating professional invoices with QR codes, stay dates, and PDF export.

## Features
- Add/remove services with dynamic calculation
- Check‑in / check‑out dates with automatic night count
- QR code containing invoice summary
- Print or save as PDF
- Works offline (once installed)
- Installable on iOS (Add to Home Screen) and Android

## Deployment on GitHub Pages
1. Upload all files (`index.html`, `sw.js`, `manifest.json`, `icon-192.png`, `icon-512.png`) to a repository.
2. Go to repository **Settings → Pages**.
3. Set source to `main` branch, root folder.
4. Your app will be live at `https://yourusername.github.io/repository-name/`

## Install on iOS
1. Open the GitHub Pages URL in **Safari**.
2. Tap the **Share** button (square with arrow).
3. Scroll down and tap **Add to Home Screen**.
4. Confirm the name and tap **Add**.
5. The app will now appear on your home screen and launch in standalone mode.

## Notes
- Works best when served over **HTTPS** (GitHub Pages provides this automatically).
- Make sure the two icon PNG files are present for proper iOS home screen icon.
