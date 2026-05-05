import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "Chimera — News" },
      { name: "description", content: "News and updates from Chimera." },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24 text-center">
      <h1 className="display text-4xl md:text-6xl">NEWS</h1>
      <p className="mt-6 text-sm text-muted-foreground">Coming soon.</p>
    </main>
  );
}
