import { createFileRoute } from "@tanstack/react-router";
import { useTranslation, Trans } from "react-i18next";
import i18n from "@/i18n";
import { Reveal } from "@/components/reveal";
import { CtaCard } from "@/components/cta-card";
import { Section, Card, BrandButton } from "@/components/ui";
import mockupAppPage1 from "@/assets/site/mockup-app-page-1.png";
import arkLogo from "@/assets/site/arkade-logo.svg";
import coinChimera from "@/assets/site/Coins/coin-front-chimera.png";
import coinBitcoin from "@/assets/site/Coins/coin-front-bitcoin.png";
import coinTether from "@/assets/site/Coins/coin-front-tether.png";
import coinEthereum from "@/assets/site/Coins/coin-front-ethereum.png";
import coinTron from "@/assets/site/Coins/coin-front-tron.png";
import coinPolygon from "@/assets/site/Coins/coin-front-polygon.png";
import iconBolt from "@/assets/site/Icons/icon_Bolt.svg";
import iconPaperplane from "@/assets/site/Icons/icon_Paperplane.svg";
import iconFaceID from "@/assets/site/Icons/icon_FaceID.svg";
import iconCard from "@/assets/site/Icons/icon_Card.svg";
 import cardSwap from "@/assets/site/Coins/Arkade-card-2-3.png";
import coinsSet from "@/assets/site/coins-set.png";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: i18n.t("app.meta.title") },
      {
        name: "description",
        content: i18n.t("app.meta.description"),
      },
      { property: "og:title", content: i18n.t("app.meta.ogTitle") },
      {
        property: "og:description",
        content: i18n.t("app.meta.description"),
      },
    ],
  }),
  component: AppPage,
});

function AppPage() {
  const { t } = useTranslation();

  const coins = [
    { a: t("app.coins.chimera"), img: coinChimera },
    { a: t("app.coins.btc"), img: coinBitcoin },
    { a: t("app.coins.usdt"), img: coinTether },
    { a: t("app.coins.eth"), img: coinEthereum },
    { a: t("app.coins.tron"), img: coinTron },
    { a: t("app.coins.polygon"), img: coinPolygon },
  ];

  const browserItems = t("app.browser.items", { returnObjects: true }) as string[];

  return (
    <main>
      <Section size="none" className="pt-16 pb-12 text-center">
        <Reveal delay={0}><p className="hero-eyebrow text-[var(--brand-green)]">{t("app.hero.eyebrow")}</p></Reveal>
        <Reveal delay={120}><h1 className="hero-title mx-auto mt-6 max-w-5xl">
          <Trans i18nKey="app.hero.title" components={{ br: <br /> }} />
        </h1></Reveal>
        <Reveal delay={240}><h2 className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-foreground/85">
          {t("app.hero.subtitle")}
        </h2></Reveal>
        <Reveal delay={340}><p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
          {t("app.hero.body")}
        </p></Reveal>
        <Reveal delay={460}>
          <BrandButton
            href="https://app.chimerawallet.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8"
          >
            {t("app.hero.cta")}
          </BrandButton>
        </Reveal>

        <Reveal delay={580}><img
          src={mockupAppPage1}
          alt={t("app.hero.mockupAlt")}
          className="mx-auto mt-12 w-full max-w-5xl h-auto"
        /></Reveal>
      </Section>

      <Section size="sm">
        {/* asset row */}
        <div className="mb-16 grid grid-cols-3 gap-6 sm:grid-cols-6">
          {coins.map(({ a, img }, i) => (
            <Reveal key={a} delay={i * 80}><img src={img} alt={t("app.coins.coinAlt", { name: a })} className="aspect-square w-full max-w-20 object-contain mx-auto" /></Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <Reveal><div className="relative z-20">
            <p className="text-sm tracking-widest text-foreground/80">{t("app.browser.eyebrow")}</p>
            <h2 className="display mt-3 text-3xl lg:whitespace-nowrap md:text-5xl">{t("app.browser.title")}</h2>
            <p className="mt-6 text-base font-medium">{t("app.browser.subtitle")}</p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/85">
              {browserItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              {t("app.browser.body")}
            </p>
          </div></Reveal>
          <Reveal delay={120}>
            <img
              src={coinsSet}
              alt={t("app.browser.coinsSetAlt")}
              className="relative z-10 ml-auto w-full max-w-[360px] h-auto object-contain -mb-32"
            />
          </Reveal>
        </div>

        <Reveal>
          <div className="mx-auto mt-12 w-full">
            <CtaCard
              href="https://app.chimerawallet.com"
              eyebrow={t("app.browser.cta.eyebrow")}
              title={t("app.browser.cta.title")}
            />
          </div>
        </Reveal>
      </Section>

      <Section size="sm">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-stretch">
          <Reveal className="h-full"><Tile
            icon={iconBolt}
            title={<>{t("app.tiles.get.titlePrefix")} <span className="text-[var(--brand-green)]">{t("app.tiles.get.titleHighlight")}</span></>}
            body={t("app.tiles.get.body")}
          /></Reveal>
          <Reveal delay={120} className="h-full"><Tile
            icon={iconPaperplane}
            title={
              <>
                {t("app.tiles.send.titleLine1")}
                <br />
                <span className="text-[var(--brand-green)]">{t("app.tiles.send.titleHighlight")}</span>
              </>
            }
            body={t("app.tiles.send.body")}
          /></Reveal>
          <Reveal delay={240} className="h-full"><Tile
            icon={iconFaceID}
            title={<><span className="text-[var(--brand-green)]">{t("app.tiles.id.titleHighlight")}</span>{t("app.tiles.id.titleSuffix")}</>}
            body={t("app.tiles.id.body")}
          /></Reveal>
          <Reveal delay={360} className="h-full"><Tile
            icon={iconCard}
            title={
              <>
                {t("app.tiles.multiAsset.titleLine1")}
                <br />
                <span className="text-[var(--brand-green)]">{t("app.tiles.multiAsset.titleHighlight")}</span>
              </>
            }
            body={t("app.tiles.multiAsset.body")}
          /></Reveal>
        </div>
      </Section>

      <Section size="lg" className="text-center">
        <Reveal><img src={arkLogo} alt={t("app.swap.logoAlt")} className="mx-auto h-16 w-auto object-contain" /></Reveal>
        <div className="mx-auto max-w-3xl md:max-w-5xl">
          <Reveal delay={120}><h2 className="display mt-6 text-3xl md:text-5xl">
            <Trans i18nKey="app.swap.title" components={{ br: <br /> }} />
          </h2></Reveal>
          <Reveal delay={240}><p
            className="mt-6 text-center text-foreground/80"
            style={{
              fontFamily: '"Funnel Display", sans-serif',
              fontWeight: 400,
              fontSize: "clamp(0.875rem, 1.6vw, 20px)",
              lineHeight: "1.4",
              letterSpacing: "0.5px",
            }}
          >
            {t("app.swap.body")}
          </p></Reveal>
        </div>
        <div className="relative">
          <Reveal delay={360}><img src={cardSwap} alt={t("app.swap.cardAlt")} className="mx-auto mt-10 w-72 object-contain" /></Reveal>
          <div className="mx-auto max-w-5xl px-6 -mt-16 relative z-10">
            <Reveal>
              <CtaCard
                href="https://app.chimerawallet.com"
                eyebrow={t("app.swap.cta.eyebrow")}
                title={t("app.swap.cta.title")}
              />
            </Reveal>
          </div>
        </div>
      </Section>
    </main>
  );
}

function Tile({
  icon,
  title,
  body,
}: {
  icon: string;
  title: React.ReactNode;
  body: string;
}) {
  return (
    <Card padding="p-8" className="flex h-full min-h-[260px] flex-col justify-end">
      <img src={icon} alt="" className="h-10 w-10 object-contain" />
      <h3
        className="mt-6 text-2xl font-bold uppercase"
        style={{ fontFamily: '"Titillium Web", ui-sans-serif, system-ui, sans-serif', letterSpacing: '0.005em' }}
      >
        {title}
      </h3>
      <p className="mt-4 text-sm text-foreground/80">{body}</p>
    </Card>
  );
}
