# New page: The Hydra Manifesto

## What you'll get
- A new page at `/hydra-manifesto`, styled like the Privacy Manifesto page (same layout, fonts, fade-in).
- Large title: **THE HYDRA MANIFESTO**; sub-heading: **Defending Freedom's Infrastructure**.
- Not in the top nav or burger menu.
- Footer link "The Hydra Manifesto" directly under the Privacy Manifesto link.
- Body text: placeholder paragraphs until you send the real text (then swapped in).

## Technical details
- New `src/routes/hydra-manifesto.tsx` copying the privacy-manifesto structure (Reveal, `hero-title`, sub-heading under it, `max-w-3xl` body), with page title/description meta.
- New `src/locales/_parts/hydraManifesto.json` (meta, title, subtitle, body paragraphs) plus `footer.hydraManifesto` in `_parts/footer.json`; run `python3 scripts/merge-locales.py` so all five languages get the keys.
- Add footer `<Link to="/hydra-manifesto">` in `src/components/site-footer.tsx`, placed immediately below the Privacy Manifesto link.
- Verify in the browser: page renders, footer link navigates.
