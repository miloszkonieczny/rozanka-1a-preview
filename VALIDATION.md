# Validation — 2026-10-25

Tested locally in the Codex in-app browser, using responsive viewport overrides; no physical mobile devices or Safari tested.

- Visually inspected layouts at 320, 375, 768 and 1440 CSS pixels; DOM measurements found no horizontal page overflow.
- Reviewed complete Polish and English accessibility snapshots, including notices, provisional offer, sample hours, labels and image description. Confirmed proper name and supplied contacts remain unchanged. Checked document language/title and pressed language state.
- Tested keyboard activation of language button and solid visible focus outline.
- Tested section links and language switching at contact. After correcting section selection and disabling competing scroll anchoring, the contact section remained at approximately 140px in both languages.
- All three image instances loaded (two SVG logo instances and one local JPEG). Relative paths worked beneath `/rozanka-1a-preview/`.
- Inspected phone, email and Google Maps link targets without calling, emailing or navigating to directions.
- Polish fallback tested using a temporary copy with its sole script omitted: zero scripts, hidden language controls, loaded images and working contact anchor. Temporary fixture is excluded from repository.
- No warning/error console entries observed. `node --check script.js` passed.
- Source reviewed for unsupported services, business claims, prices and external runtime dependencies; none introduced. Photo provenance is documented separately.

Limits: browser zoom shortcut testing was attempted but an exact 200% zoom level was not established, so 200% zoom is not claimed as verified. No screen-reader session, formal accessibility conformance audit or real-device testing. Initial delivery was local only; public deployment was subsequently authorized and checked as recorded below. Owner approval remains pending.

## Public Netlify deployment

- URL: https://rozanka-1a-preview.netlify.app/
- Netlify project ID: 44f8c928-accc-476b-afd2-1515bd594e44; uploaded deployment: 6ade47a9ebe39c0142bf7c00.
- Account dashboard confirmed Free plan and no saved credit card. Public-status dialog confirmed anyone can visit.
- Unauthenticated HTTP retrieval returned the expected site HTML.
- In-app browser smoke check confirmed Polish content, English switching, translated title/lang, all images loaded and no warning/error console entries. Noindex metadata retained.
- Netlify adds its Powered by Netlify badge to the hosted page. No paid feature or custom domain enabled.
