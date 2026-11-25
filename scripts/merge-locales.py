"""Merge src/locales/_parts/*.json into src/locales/en/app.json (source for GitLocalize).
Other languages keep existing translations; missing keys are filled with English."""
import json, glob, os

base = os.path.join(os.path.dirname(__file__), "..", "src", "locales")
en = {}
for f in sorted(glob.glob(os.path.join(base, "_parts", "*.json"))):
    en[os.path.splitext(os.path.basename(f))[0]] = json.load(open(f, encoding="utf-8"))


def fill(src, dst):
    if isinstance(src, dict):
        dst = dst if isinstance(dst, dict) else {}
        return {k: fill(v, dst.get(k)) for k, v in src.items()}
    if isinstance(src, list):
        dst = dst if isinstance(dst, list) and len(dst) == len(src) else [None] * len(src)
        return [fill(a, b) for a, b in zip(src, dst)]
    return dst if isinstance(dst, str) and dst else src


for lang in ["en", "es", "fr", "ru", "zh"]:
    p = os.path.join(base, lang, "app.json")
    cur = {} if lang == "en" else json.load(open(p, encoding="utf-8"))
    out = en if lang == "en" else fill(en, cur)
    json.dump(out, open(p, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    open(p, "a").write("\n")
print("merged", list(en))
