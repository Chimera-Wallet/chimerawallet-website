import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { Reveal } from "@/components/reveal";
import coinmarketcapImg from "@/assets/news-images/coinmarketcap.jpg";
import coinliveImg from "@/assets/news-images/coinlive.jpg";
import ainvestImg from "@/assets/news-images/ainvest.webp";
import cointelegraphImg from "@/assets/news-images/cointelegraph.jpg";
import prnewswireImg from "@/assets/news-images/prnewswire.jpg";
import fintecbuzzImg from "@/assets/news-images/fintecbuzz.webp";
import mexcImg from "@/assets/news-images/mexc.webp";
import binance1Img from "@/assets/news-images/binance-1.png";
import globenewswireImg from "@/assets/news-images/globenewswire.jpg";
import zeroxzxImg from "@/assets/news-images/0xzx.png";
import binance2Img from "@/assets/news-images/binance-2.png";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: i18n.t("news.meta.title") },
      {
        name: "description",
        content: i18n.t("news.meta.description"),
      },
      { property: "og:title", content: i18n.t("news.meta.title") },
      {
        property: "og:description",
        content: i18n.t("news.meta.description"),
      },
      { name: "robots", content: "noindex, nofollow, noarchive, nosnippet" },
      { name: "googlebot", content: "noindex, nofollow, noarchive, nosnippet" },
    ],
  }),
  component: NewsPage,
});

const newsAssets = [
  { image: coinmarketcapImg, url: "https://coinmarketcap.com/community/articles/69956464b090f37b28113f0e/" },
  { image: coinliveImg, url: "https://www.coinlive.com/news-flash/1038936" },
  { image: ainvestImg, url: "https://www.ainvest.com/news/bitcoin-defi-partnership-15m-signal-noise-2602/" },
  {
    image: cointelegraphImg,
    url: "https://cointelegraph.com/press-releases/nimbus-capital-and-chimera-wallet-announce-15-million-strategic-partnership-to-expand-defi-infrastructure-on-bitcoin",
  },
  {
    image: prnewswireImg,
    url: "https://www.prnewswire.com/news-releases/bitcoin-meets-commerce-wirex-and-chimera-wallet-bring-bitcoin-spending-to-80m-merchants-302677597.html",
  },
  { image: fintecbuzzImg, url: "https://fintecbuzz.com/wirex-and-chimera-wallet-bring-bitcoin-spending-to-80m-merchants/" },
  { image: mexcImg, url: "https://www.mexc.com/news/630603" },
  {
    image: binance1Img,
    url: "https://www.binance.com/en/square/post/02-04-2026-wirex-and-chimera-wallet-launch-bitcoin-based-debit-card-35988065039417",
  },
  {
    image: globenewswireImg,
    url: "https://www.globenewswire.com/news-release/2026/02/18/3239958/0/en/Nimbus-Capital-and-Chimera-Wallet-announce-15-million-strategic-partnership-to-expand-DeFi-infrastructure-on-Bitcoin.html",
  },
  { image: zeroxzxImg, url: "https://0xzx.com/en/2026021818106110333.html" },
  {
    image: binance2Img,
    url: "https://www.binance.com/en/square/post/02-18-2026-nimbus-capital-chimera-wallet-1500-defi-292936985201234",
  },
];

function NewsPage() {
  const { t } = useTranslation();
  const items = t("news.items", { returnObjects: true }) as {
    source: string;
    title: string;
  }[];

  const newsItems = newsAssets.map((asset, i) => ({
    ...asset,
    source: items[i].source,
    title: items[i].title,
  }));

  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      <Reveal delay={120}><h1 className="hero-title text-center">{t("news.title")}</h1></Reveal>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item, i) => (
          <Reveal key={item.url} delay={(i % 3) * 120}><a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="surface-card group flex flex-col overflow-hidden p-0 transition-transform hover:-translate-y-1"
          >
            <div className="aspect-[3/2] w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="display text-xs uppercase tracking-widest text-[var(--brand-green)]">
                {item.source}
              </span>
              <h2 className="text-base font-semibold leading-snug text-foreground group-hover:text-[var(--brand-green)]">
                {item.title}
              </h2>
            </div>
          </a></Reveal>
        ))}
      </div>
    </main>
  );
}
