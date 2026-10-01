# Multi-language support (GitLocalize-ready)

## Goal
Move every piece of visible text on the site into translation files, add a language picker with flags in the header, and structure files the same way as the app so GitLocalize can sync them.

Languages: English (source), Spanish, French, Russian, Chinese (Simplified).

## What you will see
- A flag dropdown in the header (desktop: next to the X/Telegram icons; tablet/mobile: inside the burger menu).
- Choosing a language switches all page text instantly and is remembered on the next visit.
- First visit picks the browser language if supported, otherwise English.
- Page titles and descriptions (browser tab / search snippets) also translate.

## Folder structure (mirrors the app)
```text
src/locales/
  en/app.json   <- source of truth, fully filled
  es/app.json
  fr/app.json
  ru/app.json
  zh/app.json
```
Keys are grouped by page, e.g. `header.*`, `footer.*`, `home.*`, `token.*`, `card.*`, `app.*`, `referrals.*`, `about.*`, `news.*`, `pressKit.*`, `privacyManifesto.*`, `privacyApp.*`, `privacyWeb.*`, `common.*`.

Non-English files start as copies of English (so nothing shows blank) and get replaced by GitLocalize translations. Optionally I can pre-fill them with machine translations — tell me if you want that.

## Pages covered
All 12 pages plus header, footer, 404 page and shared buttons/cards (~146 KB of page code to sweep). Text baked into images (e.g. token cards, press kit banner) cannot be translated this way and stays as-is.

## GitLocalize
- Add a `gitlocalize.yml` at the project root mapping `src/locales/en/app.json` to `src/locales/{lang}/app.json`, matching the app's setup.
- You then connect the GitHub repo in GitLocalize; translator pull requests drop straight into these files.

## Technical details
- Add `i18next`, `react-i18next`, `i18next-browser-languagedetector`; init in `src/i18n.ts`, imported from `src/main.tsx`. All locale JSONs bundled statically (works with the Azure static deploy, no extra requests).
- Detection order: localStorage (`chimera:lang`) then navigator; fallback `en`. Update `<html lang>` on change.
- `LanguageSwitcher` component using existing shadcn `DropdownMenu`, flag emojis (GB, ES, FR, RU, CN) with native names.
- Replace hardcoded strings with `t("...")`; use `<Trans>` where text contains links/line breaks; arrays (timeline, FAQ, cards) stored as JSON arrays/objects via `returnObjects`.
- Route `head()` meta uses `i18n.t` so titles follow the language.
- Embed mode (`?embed=1`) unaffected; switcher lives in the hidden header. Optional `?lang=xx` param supported for embedded pages.
- Record the i18n rule in `AGENTS.md`.
