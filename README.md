# Różanka 1A — website preview

Small bilingual, buildless static website for owner review. Polish is the default; the PL / EN buttons update visible text, accessible labels, page language, metadata and title. No framework, analytics, form, backend or paid API.

## Local preview

From this directory, run `python3 -m http.server 4173 --bind 127.0.0.1` and open http://127.0.0.1:4173/. No install or build step is needed. The files also work under a repository URL prefix.

## Editing

- `index.html`: Polish content, with English in `data-en`, `data-en-label` and `data-en-alt` attributes. Keep matching translations together. Supplied contacts are deliberately `123-456-789` and `sample@roznaka.com`.
- `styles.css`: palette, spacing and responsive layouts.
- `script.js`: language controls and translated metadata/title. Polish remains present in the original HTML without JavaScript; nonfunctional language controls stay hidden.
- `assets/`: original logo motif and locally stored illustrative photograph. See `ASSET_SOURCES.md`.

Before any real launch, the owner must confirm the final offer, replace sample contacts and hours, verify the supplied address and approximate coordinates, review the imagery/logo and explicitly approve the site. The coordinates are owner-supplied, not independently verified. No prices or additional services are represented.

## Publication

Target new public source repository: `miloszkonieczny/rozanka-1a-preview` (name confirmed by user). Publication is a separate step from pushing source.

GitHub Pages documentation checked 2026-10-25:
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

Pages restricts business/transaction-focused hosting. Suitability for this farm preview remains unresolved, so no Pages deployment is configured. A disclaimer alone does not resolve the restriction.

Published with subsequent user authorization on Netlify Free: https://rozanka-1a-preview.netlify.app/ . The account Free plan and absence of a saved payment card were verified in the dashboard. Uploaded only the static site files via Netlify Drop, then set the project public. GitHub remains the source repository; automatic GitHub deployments are not connected. Future source changes require a fresh manual upload. Netlify explicitly permits commercial projects on Free; current Free pricing has a hard monthly limit with no auto recharge. Never select a paid plan, enter payment details, or enable billable services. Sources:
- https://www.netlify.com/blog/introducing-netlify-free-plan/
- https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/

After hosting approval, publish `index.html`, `styles.css`, `script.js` and `assets/` as static files with no build command, using the host's free HTTPS URL. Perform a smoke check of the actual deployed URL before reporting it live. Do not configure a custom domain.

The `noindex, nofollow` metadata discourages indexing; it does NOT make the page private. A public repository and preview can be accessed by anyone. Owner approval has not yet been given.

## Map

The contact section embeds an OpenStreetMap map with a marker at owner-supplied approximate coordinates and lazy loading. The marker is not a verified building or entrance. A direct OpenStreetMap link remains available if the iframe cannot load. The existing directions link is preserved. The embed requires a visitor connection to OpenStreetMap and may expose the visitor IP to that service.
