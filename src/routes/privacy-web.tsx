import { createFileRoute } from "@tanstack/react-router";
import { useTranslation, Trans } from "react-i18next";
import { Reveal } from "@/components/reveal";
import i18n from "@/i18n";

export const Route = createFileRoute("/privacy-web")({
  head: () => ({
    meta: [
      { title: i18n.t("privacyWeb.meta.title") },
      { name: "description", content: i18n.t("privacyWeb.meta.description") },
      { property: "og:title", content: i18n.t("privacyWeb.meta.ogTitle") },
      { property: "og:description", content: i18n.t("privacyWeb.meta.ogDescription") },
    ],
  }),
  component: WebPrivacyPolicy,
});

function H2({ children }: { children: React.ReactNode }) {
  return <Reveal><h2 className="display mt-12 text-2xl md:text-3xl text-[var(--brand-green)]">{children}</h2></Reveal>;
}
function H3({ children }: { children: React.ReactNode }) {
  return <Reveal><h3 className="mt-8 text-lg md:text-xl font-semibold text-foreground">{children}</h3></Reveal>;
}
function P({ children }: { children: React.ReactNode }) {
  return <Reveal><p className="mt-4 text-sm md:text-base text-foreground/85 leading-relaxed">{children}</p></Reveal>;
}

function WebPrivacyPolicy() {
  const { t } = useTranslation();
  const definitionItems = t("privacyWeb.interpretationAndDefinitions.definitions.items", { returnObjects: true }) as string[];
  const shareItems = t("privacyWeb.collecting.useOfData.shareItems", { returnObjects: true }) as string[];
  const otherLegalItems = t("privacyWeb.collecting.disclosure.otherLegal.items", { returnObjects: true }) as string[];

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Reveal delay={120}><h1 className="hero-title">{t("privacyWeb.hero.title")}</h1></Reveal>
      <Reveal delay={240}><p className="mt-4 text-xs text-muted-foreground">{t("privacyWeb.hero.lastUpdated")}</p></Reveal>

      <P>{t("privacyWeb.intro")}</P>

      <H2>{t("privacyWeb.interpretationAndDefinitions.heading")}</H2>

      <H3>{t("privacyWeb.interpretationAndDefinitions.interpretation.heading")}</H3>
      <P>{t("privacyWeb.interpretationAndDefinitions.interpretation.body")}</P>

      <H3>{t("privacyWeb.interpretationAndDefinitions.definitions.heading")}</H3>
      <P>{t("privacyWeb.interpretationAndDefinitions.definitions.intro")}</P>
      <Reveal><ul className="mt-4 list-disc space-y-3 pl-6 text-sm md:text-base text-foreground/85 leading-relaxed">
        {definitionItems.map((_, i) => (
          <li key={i}><Trans i18nKey={`privacyWeb.interpretationAndDefinitions.definitions.items.${i}`} components={{ b: <strong /> }} /></li>
        ))}
      </ul></Reveal>

      <H2>{t("privacyWeb.collecting.heading")}</H2>

      <H3>{t("privacyWeb.collecting.typesOfData.heading")}</H3>

      <H3>{t("privacyWeb.collecting.personalData.heading")}</H3>
      <P>{t("privacyWeb.collecting.personalData.body1")}</P>
      <P>{t("privacyWeb.collecting.personalData.body2")}</P>

      <H3>{t("privacyWeb.collecting.usageData.heading")}</H3>
      <P>{t("privacyWeb.collecting.usageData.body1")}</P>
      <P>{t("privacyWeb.collecting.usageData.body2")}</P>
      <P>{t("privacyWeb.collecting.usageData.body3")}</P>
      <P>{t("privacyWeb.collecting.usageData.body4")}</P>

      <H3>{t("privacyWeb.collecting.tracking.heading")}</H3>
      <P>{t("privacyWeb.collecting.tracking.body1")}</P>
      <P>
        <Trans i18nKey="privacyWeb.collecting.tracking.browserCookies" components={{ b: <strong /> }} />
      </P>
      <P>
        <Trans
          i18nKey="privacyWeb.collecting.tracking.flashCookies"
          components={{
            b: <strong />,
            a: (
              <a
                className="underline hover:text-[var(--brand-green)]"
                href="https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html"
                target="_blank"
                rel="noopener noreferrer"
              />
            ),
          }}
        />
      </P>
      <P>
        <Trans i18nKey="privacyWeb.collecting.tracking.webBeacons" components={{ b: <strong /> }} />
      </P>
      <P>{t("privacyWeb.collecting.tracking.body2")}</P>

      <H3>{t("privacyWeb.collecting.necessaryCookies.heading")}</H3>
      <P>{t("privacyWeb.collecting.necessaryCookies.type")}</P>
      <P>{t("privacyWeb.collecting.necessaryCookies.administeredBy")}</P>
      <P>{t("privacyWeb.collecting.necessaryCookies.purpose")}</P>

      <H3>{t("privacyWeb.collecting.noticeCookies.heading")}</H3>
      <P>{t("privacyWeb.collecting.noticeCookies.type")}</P>
      <P>{t("privacyWeb.collecting.noticeCookies.administeredBy")}</P>
      <P>{t("privacyWeb.collecting.noticeCookies.purpose")}</P>

      <H3>{t("privacyWeb.collecting.functionalityCookies.heading")}</H3>
      <P>{t("privacyWeb.collecting.functionalityCookies.type")}</P>
      <P>{t("privacyWeb.collecting.functionalityCookies.administeredBy")}</P>
      <P>{t("privacyWeb.collecting.functionalityCookies.purpose")}</P>
      <P>{t("privacyWeb.collecting.functionalityCookies.moreInfo")}</P>

      <H3>{t("privacyWeb.collecting.useOfData.heading")}</H3>
      <P>{t("privacyWeb.collecting.useOfData.intro")}</P>
      <P>{t("privacyWeb.collecting.useOfData.body1")}</P>
      <P>{t("privacyWeb.collecting.useOfData.body2")}</P>
      <P>{t("privacyWeb.collecting.useOfData.body3")}</P>
      <P>{t("privacyWeb.collecting.useOfData.shareIntro")}</P>
      <Reveal><ol className="mt-4 list-decimal space-y-3 pl-6 text-sm md:text-base text-foreground/85 leading-relaxed">
        {shareItems.map((_, i) => (
          <li key={i}><Trans i18nKey={`privacyWeb.collecting.useOfData.shareItems.${i}`} components={{ b: <strong /> }} /></li>
        ))}
      </ol></Reveal>

      <H3>{t("privacyWeb.collecting.retention.heading")}</H3>
      <P>{t("privacyWeb.collecting.retention.body1")}</P>
      <P>{t("privacyWeb.collecting.retention.body2")}</P>

      <H3>{t("privacyWeb.collecting.transfer.heading")}</H3>
      <P>{t("privacyWeb.collecting.transfer.body1")}</P>
      <P>{t("privacyWeb.collecting.transfer.body2")}</P>
      <P>{t("privacyWeb.collecting.transfer.body3")}</P>

      <H3>{t("privacyWeb.collecting.disclosure.heading")}</H3>

      <H3>{t("privacyWeb.collecting.disclosure.businessTransactions.heading")}</H3>
      <P>{t("privacyWeb.collecting.disclosure.businessTransactions.body1")}</P>
      <P>{t("privacyWeb.collecting.disclosure.businessTransactions.body2")}</P>

      <H3>{t("privacyWeb.collecting.disclosure.otherLegal.heading")}</H3>
      <P>{t("privacyWeb.collecting.disclosure.otherLegal.intro")}</P>
      <Reveal><ol className="mt-4 list-decimal space-y-2 pl-6 text-sm md:text-base text-foreground/85 leading-relaxed">
        {otherLegalItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol></Reveal>

      <H3>{t("privacyWeb.collecting.security.heading")}</H3>
      <P>{t("privacyWeb.collecting.security.body1")}</P>

      <H2>{t("privacyWeb.childrensPrivacy.heading")}</H2>
      <P>{t("privacyWeb.childrensPrivacy.body1")}</P>

      <H2>{t("privacyWeb.linksToOtherWebsites.heading")}</H2>
      <P>{t("privacyWeb.linksToOtherWebsites.body1")}</P>

      <H2>{t("privacyWeb.yourRights.heading")}</H2>
      <P>{t("privacyWeb.yourRights.intro")}</P>

      <H3>{t("privacyWeb.yourRights.accessRight.heading")}</H3>
      <P>{t("privacyWeb.yourRights.accessRight.body1")}</P>
      <P>{t("privacyWeb.yourRights.accessRight.body2")}</P>

      <H3>{t("privacyWeb.yourRights.rectificationAndErasure.heading")}</H3>
      <P>{t("privacyWeb.yourRights.rectificationAndErasure.body1")}</P>
      <P>{t("privacyWeb.yourRights.rectificationAndErasure.body2")}</P>
      <P>{t("privacyWeb.yourRights.rectificationAndErasure.body3")}</P>

      <H3>{t("privacyWeb.yourRights.restrictProcessing.heading")}</H3>
      <P>{t("privacyWeb.yourRights.restrictProcessing.body1")}</P>

      <H3>{t("privacyWeb.yourRights.objectToProcessing.heading")}</H3>
      <P>{t("privacyWeb.yourRights.objectToProcessing.body1")}</P>

      <H3>{t("privacyWeb.yourRights.stopCommunications.heading")}</H3>
      <P>{t("privacyWeb.yourRights.stopCommunications.body1")}</P>

      <H3>{t("privacyWeb.yourRights.withdrawalOfConsent.heading")}</H3>
      <P>{t("privacyWeb.yourRights.withdrawalOfConsent.body1")}</P>
      <P>{t("privacyWeb.yourRights.withdrawalOfConsent.body2")}</P>

      <H2>{t("privacyWeb.changesToPolicy.heading")}</H2>
      <P>{t("privacyWeb.changesToPolicy.body1")}</P>
      <P>{t("privacyWeb.changesToPolicy.body2")}</P>

      <H2>{t("privacyWeb.contactUs.heading")}</H2>
      <P>
        <Trans
          i18nKey="privacyWeb.contactUs.body"
          components={{
            a: <a className="underline hover:text-[var(--brand-green)]" href="mailto:info@chimerawallet.com" />,
          }}
        />
      </P>
    </main>
  );
}
