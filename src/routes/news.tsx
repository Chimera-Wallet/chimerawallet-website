import { createFileRoute } from "@tanstack/react-router";
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
      { title: "Chimera — News" },
      { name: "description", content: "News and updates from Chimera." },
      { name: "robots", content: "noindex, nofollow, noarchive, nosnippet" },
      { name: "googlebot", content: "noindex, nofollow, noarchive, nosnippet" },
    ],
  }),
  component: NewsPage,
});

const newsItems = [
  {
    image: coinmarketcapImg,
    source: "coinmarketcap",
    title: "Nimbus Capital and Chimera Wallet Announce $15 Million Strategic Partnership To Expand DeFi Infrastructure on Bitcoin",
    url: "https://coinmarketcap.com/community/articles/69956464b090f37b28113f0e/",
  },
  {
    image: coinliveImg,
    source: "COINLIVE",
    title: "Nimbus Capital and Chimera Wallet Forge $15 Million Partnership to Enhance Bitcoin DeFi",
    url: "https://www.coinlive.com/news-flash/1038936",
  },
  {
    image: ainvestImg,
    source: "AInvest",
    title: "Bitcoin DeFi Partnership: A $15M Signal or Noise?",
    url: "https://www.ainvest.com/news/bitcoin-defi-partnership-15m-signal-noise-2602/",
  },
  {
    image: cointelegraphImg,
    source: "cointelegraph",
    title: "Nimbus Capital and Chimera Wallet announce $15 million strategic partnership to expand DeFi infrastructure on Bitcoin",
    url: "https://cointelegraph.com/press-releases/nimbus-capital-and-chimera-wallet-announce-15-million-strategic-partnership-to-expand-defi-infrastructure-on-bitcoin",
  },
  {
    image: prnewswireImg,
    source: "PR NEWSWIRE",
    title: "Bitcoin Meets Commerce: Wirex and Chimera Wallet Bring Bitcoin spending to 80M+ Merchants",
    url: "https://www.prnewswire.com/news-releases/bitcoin-meets-commerce-wirex-and-chimera-wallet-bring-bitcoin-spending-to-80m-merchants-302677597.html",
  },
  {
    image: fintecbuzzImg,
    source: "FINTEC BUZZ",
    title: "Wirex and Chimera Wallet Bring Bitcoin spending to 80M+ Merchants",
    url: "https://fintecbuzz.com/wirex-and-chimera-wallet-bring-bitcoin-spending-to-80m-merchants/",
  },
  {
    image: mexcImg,
    source: "MEXC",
    title: "Wirex Powers Chimera Card, Bringing Bitcoin Payments to 80M+ Merchants Worldwide",
    url: "https://www.mexc.com/news/630603",
  },
  {
    image: binance1Img,
    source: "binance",
    title: "Wirex and Chimera Wallet Launch Bitcoin-Based Debit Card",
    url: "https://www.binance.com/en/square/post/02-04-2026-wirex-and-chimera-wallet-launch-bitcoin-based-debit-card-35988065039417",
  },
  {
    image: globenewswireImg,
    source: "globe news wire",
    title: "Nimbus Capital and Chimera Wallet announce $15 million strategic partnership to expand DeFi infrastructure on Bitcoin",
    url: "https://www.globenewswire.com/news-release/2026/02/18/3239958/0/en/Nimbus-Capital-and-Chimera-Wallet-announce-15-million-strategic-partnership-to-expand-DeFi-infrastructure-on-Bitcoin.html",
  },
  {
    image: zeroxzxImg,
    source: "0xzx",
    title: "Nimbus Capital and Chimera Wallet enter into a $15 million strategic partnership to expand Bitcoin DeFi infrastructure",
    url: "https://0xzx.com/en/2026021818106110333.html",
  },
  {
    image: binance2Img,
    source: "binance",
    title: "Nimbus Capital and Chimera Wallet $15M DeFi Partnership",
    url: "https://www.binance.com/en/square/post/02-18-2026-nimbus-capital-chimera-wallet-1500-defi-292936985201234",
  },
];

function NewsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      <h1 className="display text-4xl md:text-6xl text-center">NEWS</h1>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--brand-navy-card)] transition-transform hover:-translate-y-1"
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
          </a>
        ))}
      </div>
    </main>
  );
}
