import { createFileRoute } from "@tanstack/react-router";
import { useTranslation, Trans } from "react-i18next";
import i18n from "@/i18n";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/privacy-manifesto")({
  head: () => ({
    meta: [
      { title: i18n.t("privacyManifesto.meta.title") },
      {
        name: "description",
        content: i18n.t("privacyManifesto.meta.description"),
      },
      { property: "og:title", content: i18n.t("privacyManifesto.meta.title") },
      {
        property: "og:description",
        content: i18n.t("privacyManifesto.meta.description"),
      },
    ],
  }),
  component: PrivacyManifestoPage,
});

function PrivacyManifestoPage() {
  const { t } = useTranslation();
  return (
    <main className="mx-auto max-w-3xl px-6 pt-16 pb-24">
      <Reveal delay={0}><p className="hero-eyebrow text-[var(--brand-green)]">{t("privacyManifesto.eyebrow")}</p></Reveal>
      <Reveal delay={120}><h1 className="hero-title mt-6">{t("privacyManifesto.title")}</h1></Reveal>

      <Reveal delay={240}><div className="mt-10 space-y-6 text-sm leading-relaxed text-foreground/85">
        <p className="text-base font-medium text-foreground">
          {t("privacyManifesto.intro.p1")}
        </p>

        <p>{t("privacyManifesto.intro.p2")}</p>

        <p>
          {t("privacyManifesto.intro.p3")}
        </p>

        <p>{t("privacyManifesto.intro.p4")}</p>

        <p>
          {t("privacyManifesto.intro.p5")}
        </p>

        <p>
          <Trans
            i18nKey="privacyManifesto.intro.p6"
            components={{
              a: (
                <a
                  href="https://plausible.io/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--brand-green)] hover:underline"
                />
              ),
            }}
          />
        </p>

        <p className="text-base font-medium text-foreground">
          {t("privacyManifesto.intro.p7")}
        </p>

        <p>
          {t("privacyManifesto.intro.p8")}
        </p>
      </div></Reveal>

      <Reveal><h2 className="display mt-12 text-2xl text-[var(--brand-green)]">{t("privacyManifesto.providersTitle")}</h2></Reveal>
      <Reveal delay={120}><ul className="mt-6 space-y-3 text-sm">
        <li>
          {t("privacyManifesto.providers.plausible")} —{" "}
          <a
            href="https://plausible.io/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--brand-green)] hover:underline"
          >
            https://plausible.io/about
          </a>
        </li>
        <li>
          {t("privacyManifesto.providers.outlogic")} —{" "}
          <a
            href="https://outlogic.net/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--brand-green)] hover:underline"
          >
            https://outlogic.net/privacy-policy/
          </a>
        </li>
        <li>
          {t("privacyManifesto.providers.lendasat")} —{" "}
          <a
            href="https://lendasat.com/docs/p2p-loans/legal/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--brand-green)] hover:underline"
          >
            https://lendasat.com/docs/p2p-loans/legal/terms
          </a>
        </li>
      </ul></Reveal>
    </main>
  );
}
