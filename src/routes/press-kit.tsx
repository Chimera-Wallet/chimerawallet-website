import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/press-kit")({
  head: () => ({
    meta: [
      { title: "Press Kit — Chimera Wallet" },
      {
        name: "description",
        content:
          "Chimera Wallet press kit — logos, brand colours and media assets. Where finance meets innovation.",
      },
      { property: "og:title", content: "Press Kit — Chimera Wallet" },
      {
        property: "og:description",
        content:
          "Chimera Wallet press kit — logos, brand colours and media assets.",
      },
    ],
  }),
  component: PressKitPage,
});

const LOGOS = [
  "https://chimerawallet.com/wp-content/uploads/2026/04/Asset-6.svg",
  "https://chimerawallet.com/wp-content/uploads/2026/04/Asset-5.svg",
  "https://chimerawallet.com/wp-content/uploads/2026/04/Asset-7.svg",
  "https://chimerawallet.com/wp-content/uploads/2026/04/LOGO-CHIMERA-white-and-green-1.svg",
  "https://chimerawallet.com/wp-content/uploads/2026/04/LOGO-CHIMERA-Blue-and-black.svg",
  "https://chimerawallet.com/wp-content/uploads/2026/04/LOGO-CHIMERA-black-on-white.svg",
  "https://chimerawallet.com/wp-content/uploads/2026/04/LOGO-CHIMERA-white.svg",
  "https://chimerawallet.com/wp-content/uploads/2026/04/Chimera_LOGO_line.svg",
];

const COLORS = [
  { hex: "#9DFFC4", text: "#000627" },
  { hex: "#1F3BDB", text: "#FFFFFF" },
  { hex: "#000627", text: "#FFFFFF" },
  { hex: "#1DFF78", text: "#000627" },
  { hex: "#CED0DD", text: "#000627" },
  { hex: "#061A8E", text: "#FFFFFF" },
  { hex: "#030E4E", text: "#FFFFFF" },
  { hex: "#9DFFC4", text: "#000627" },
];

function PressKitPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-16 pb-24">
      <p className="hero-eyebrow text-[var(--brand-green)]">PRESS KIT</p>
      <h1 className="display mt-6 text-4xl md:text-6xl">WHERE FINANCE MEETS INNOVATION!</h1>
      <p className="mt-4 display text-lg md:text-xl text-foreground/80">
        The Next-Generation Financial Platform Inspired by Myth and Driven by Innovation
      </p>
      <p className="mt-6 max-w-3xl text-sm text-foreground/85">
        The Chimera Wallet logo draws inspiration from the ancient mythological creature, the
        Chimera — a being described by Plato as "many forms grown together in one." In ancient lore,
        the Chimera symbolised strength, resilience, and adaptability, qualities that resonate
        deeply with the vision of Chimera Wallet, with elements of a lion, goat, and serpent fused
        into a single creature.
      </p>

      <h2 className="display mt-16 text-2xl text-[var(--brand-green)]">LOGOS</h2>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {LOGOS.map((src) => (
          <div
            key={src}
            className="flex aspect-square items-center justify-center rounded-2xl border border-white/10 bg-[var(--brand-navy-card)] p-6"
          >
            <img src={src} alt="Chimera logo variant" className="max-h-full max-w-full object-contain" />
          </div>
        ))}
      </div>

      <h2 className="display mt-16 text-2xl text-[var(--brand-green)]">BRAND COLOURS</h2>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {COLORS.map(({ hex, text }, i) => (
          <div
            key={`${hex}-${i}`}
            className="flex aspect-square items-center justify-center rounded-2xl border border-white/10"
            style={{ background: hex, color: text }}
          >
            <span className="display text-lg">{hex}</span>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a
          href="https://chimerawallet.com/wp-content/uploads/2025/12/ChimeraWallet-MediaKit.zip"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full px-8 py-4 text-xs font-bold tracking-widest text-[var(--brand-navy)]"
          style={{ backgroundColor: "var(--brand-green)" }}
        >
          DOWNLOAD MEDIA KIT
        </a>
      </div>
    </main>
  );
}