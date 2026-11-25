# Project rules

- All user-visible text lives in `src/locales/<lang>/app.json` (en is source, synced via GitLocalize `gitlocalize.yml`); never hardcode copy — why: site must translate into en/es/fr/ru/zh.
- Edit English copy in `src/locales/_parts/<namespace>.json`, then run `python3 scripts/merge-locales.py` to regenerate `app.json` files — why: keeps per-page sources manageable while GitLocalize sees one file per language.
- Deploy as a pure Vite SPA to flat `dist/index.html` (no TanStack Start/Cloudflare wrapper) — why: Azure Static Web Apps needs it.
