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

## Targeted refinement — 2026-10-26

- Replaced all user-facing business-name instances with `Różanka 1A` (without a trailing period), including both languages, headings, navigation, footer, title and accessible image text. The requested address appears in both contact and location cards.
- Replaced the hero JPEG with a 1280 × 486 public-domain USFWS Mountain-Prairie photograph identified as rainbow trout (*Oncorhynchus mykiss*); checked the image visually and recorded the source in `ASSET_SOURCES.md`.
- Added a lazy-loaded OpenStreetMap embed with a marker at the owner-supplied approximate coordinates (50.183333, 16.633333), attribution, an external OpenStreetMap fallback link and the existing Google directions link. The embedded tiles and marker were visually visible on the published page; the exact entrance/building was not verified.
- On the published Netlify page, checked Polish and English titles, document language, translated map context, requested address and all three loaded images. The hero image reported a natural width of 1280 pixels.
- `node --check script.js`, `git diff --check` and source assertions passed. No real-device or formal accessibility audit was performed for this refinement.
- Updated production deployment: `6adeeb83ea19961eb7e1d6e2` on the existing Netlify project; URL unchanged.

## Approved-design implementation — 2026-10-26

- At 1440 CSS pixels, visually inspected the two-column hero: the trout is centered in an underwater riverbed scene, the rounded upper-left photo corner is retained, and the photo fills its frame without blank horizontal bands. Screenshot: `../rozanka-1a-desktop-1440.png`.
- At 390 CSS pixels, inspected the stacked hero and a separate scrolled photo view. The whole fish remains visible after adjusting mobile image positioning; no horizontal document overflow was observed. Screenshots: `../rozanka-1a-mobile-390.png` and `../rozanka-1a-mobile-photo-390.png`.
- Browser inspection confirmed the Polish headline is exactly three lines, `Hodowla` / `pstrągów` / `tęczowych`, with no terminal period, normal Georgia styling and computed color `rgb(32, 61, 49)` (`#203d31`). The English headline is `Rainbow` / `trout farm` with no terminal period and the same styling.
- Confirmed the new 1280 × 853 image loads, English switching works, the contact address is unchanged in both locations, and the OpenStreetMap embed source and marker coordinates remain intact. No browser warning/error logs were recorded.
- The purported approved visualization was not present in the supplied files or follow-up message, so a direct image-to-image comparison and similarity score could not be performed. The photograph and layout were judged against the written design criteria only; exact visual-reference fidelity remains unverified.
- GitHub implementation commit: `f32feca`. The same static files were manually uploaded to the existing Netlify project as production deployment `6adf2f57bdbb5c3d4533314f`. The public page visibly showed the new image, exact Polish/English headlines and computed hero styles; the embedded map remained present.
- The live browser emitted one `MutationObserver.observe` TypeError with no source URL; it was not reproduced locally and no visible site behavior failed. Its source remains unconfirmed.
