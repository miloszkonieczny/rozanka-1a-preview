# Różanka 1A — website preview

Small bilingual, buildless static website for owner review. Polish is the default; the PL / EN buttons update visible text, accessible labels, page language, metadata and title. No framework, analytics, form, backend or paid API.

## Local preview

From this directory, run `python3 -m http.server 4173 --bind 127.0.0.1` and open http://127.0.0.1:4173/. No install or build step is needed. The files also work under a repository URL prefix.

## Editing

- `index.html`: Polish content, with English in `data-en`, `data-en-label` and `data-en-alt` attributes. Keep matching translations together. Supplied contacts are deliberately `123-456-789` and `sample@roznaka.com`.
- `styles.css`: palette, spacing and responsive layouts.
- `script.js`: language controls and translated metadata/title. Polish remains present in the original HTML without JavaScript; nonfunctional language controls stay hidden.
- `assets/`: original logo motif and the exact owner-supplied approved hero artwork. See `ASSET_SOURCES.md`.

The business owner has confirmed the official website address as Różanka 1A, 57-530 Międzylesie, Polska, and designated 50°11′39.1″N, 16°38′16.4″E as the business location. Before any real launch, the owner must confirm the final offer, replace sample phone, email and hours, verify the exact entrance for navigation, review the imagery/logo and explicitly approve the site. No prices or additional services are represented.

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

The contact section uses the Google Maps sharing embed for the business location designated by the owner: `50.194194, 16.637889` (`50°11'39.1"N 16°38'16.4"E`). The embedded map coordinate fields, Google Maps fallback and directions links use those same coordinates. The owner confirms the address and designated coordinates; the exact entrance has not been independently verified. The map's marker should be visually confirmed in a browser after deployment. The embed is lazy-loaded, needs a visitor connection to Google Maps, and may expose the visitor IP to Google. No paid Maps API or API key is used.
