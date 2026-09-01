# LeafLife — Garden & Landscape Service Website

This is the **LeafLife** template kit, converted from static HTML into a [Next.js](https://nextjs.org) app (App Router) so it can be deployed on [Vercel](https://vercel.com).

## Project structure

- `app/` — one route per original page (`app/about/page.js`, `app/services/page.js`, etc.). `app/layout.js` loads the template's shared CSS and JS (bootstrap, fontawesome, slick, animate, lightgallery, main.js) once for every page.
- `public/assets/` — all images, fonts, CSS and JS from the original template, served as static files.
- `original-template/` — the untouched original HTML kit (both the "Template" and "Documentation" folders), kept for reference. This isn't used by the live site.

## Running locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Building for production

```bash
npm run build
npm run start
```

## Deploying

This project deploys to Vercel with zero configuration — Vercel auto-detects Next.js. Push this repo to GitHub, then import it at [vercel.com/new](https://vercel.com/new).

## Notes

- Internal navigation links (`about.html` → `/about`, etc.) were rewritten to Next.js routes.
- Every page in the original kit uses the same `<title>`; you may want to give each page (`app/*/page.js`) its own `metadata.title` for better SEO.
- The contact form posts to [Web3Forms](https://web3forms.com) as it did in the original template — no backend needed.
