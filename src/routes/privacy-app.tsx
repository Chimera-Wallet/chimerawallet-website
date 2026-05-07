import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-app")({
  head: () => ({
    meta: [
      { title: "App Privacy Policy — Chimera Wallet" },
      { name: "description", content: "Chimera Wallet App Privacy Policy. Zero-knowledge architecture. Your data stays yours." },
      { property: "og:title", content: "App Privacy Policy — Chimera Wallet" },
      { property: "og:description", content: "Chimera Wallet App Privacy Policy. Zero-knowledge architecture. Your data stays yours." },
    ],
  }),
  component: AppPrivacyPolicy,
});

function Section({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      {title && <h2 className="display text-2xl md:text-3xl text-[var(--brand-green)]">{title}</h2>}
      <div className="mt-4 space-y-4 text-sm md:text-base text-foreground/85 leading-relaxed">{children}</div>
    </section>
  );
}

function AppPrivacyPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="display text-4xl md:text-6xl">Chimera Wallet App Privacy Policy</h1>

      <Section>
        <p>
          Every individual has an inalienable right to privacy and complete data sovereignty. In a world where technology is increasingly weaponized to identify, monitor, and track users, Chimera wallet App takes a deliberate stand in the opposite direction. The Chimera wallet app does not collect or share your personal information. Your data remains yours alone, never ours.
        </p>
        <p className="font-semibold text-foreground">That's our policy in a nutshell.</p>
      </Section>

      <Section title="Information We Don't Collect">
        <p>
          Chimera wallet App doesn't store any identifying information about your device, such as your IP address, user agents, or your transactions. Chimera wallet App is designed with a zero-knowledge architecture so that it doesn't store any personal information. You don't need a phone number, e-mail, or any information tied to your identity or your Assets to use the Chimera wallet App. Your digital footprint is yours alone to control. Chimera wallet App is private by default and by design.
        </p>
      </Section>

      <Section title="Information Shared with Chimera wallet App">
        <p>
          If you use the Chimera wallet App on your Android or iOS phone, Google or Apple might store information about how you use the app. They can record when the app is closed, opened, how long you use it for, crash logs, and your device model. This usage information could also be associated with your Google or Apple account. The only information that Chimera wallet App receives is the number of downloads and crashes. If you're planning to use Chimera wallet App on wallet, it's worth reading Apple or Google's privacy policies. If you're using iOS, check out Apple's App Store Review Guidelines. For Android, read the User Data section of Google's Developer Policy Center.
        </p>
      </Section>

      <Section title="Third-Party API Integration">
        <p>
          Chimera wallet App integrates with various third-party services through their APIs to enhance functionality. We believe in absolute transparency about these connections while maintaining your sovereignty over your data. When you use these features:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Chimera may send necessary non-identifying data to these third-party services to complete requested operations</li>
          <li>These third-party services operate under their own privacy policies, which we recommend you review</li>
          <li>You maintain complete control and can disable specific third-party API integrations through app settings at any time</li>
          <li>Third-party services may collect and process data according to their own terms and privacy policies when you interact with their services through Chimera</li>
          <li>Information transmitted to third-party services may include transaction details, blockchain data, or other technical information required for the service to function properly</li>
          <li>Chimera does not share your identity, contact information, or personally identifiable information with these third-party services</li>
          <li>You retain full sovereignty over what data leaves your device and which services you choose to connect with</li>
        </ul>
        <p>
          For FIAT amounts conversion Chimera Wallet relies on CoinGecko public APIs. Also Chimera wallet App has no influence and/or awareness of if.
        </p>
        <p>
          While Chimera wallet App itself maintains strict privacy standards and respects your absolute right to privacy and data sovereignty, we cannot guarantee the same level of privacy protection for data processed by third-party services when you choose to use their functionality through our app. We strongly encourage you to review all privacy policies of third-party services, conduct your own analysis, and choose carefully which services you wish to interact with through the Chimera wallet App.
        </p>
      </Section>

      <p className="mt-12 text-xs text-muted-foreground">This policy is effective as of April 15, 2025.</p>
    </main>
  );
}
