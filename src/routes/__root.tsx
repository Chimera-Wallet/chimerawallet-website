import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Chimera Wallet" },
      { name: "description", content: "The only Bitcoin super-app built so nobody can ever take your money away." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Chimera Wallet" },
      { property: "og:description", content: "The only Bitcoin super-app built so nobody can ever take your money away." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Chimera Wallet" },
      { name: "twitter:description", content: "The only Bitcoin super-app built so nobody can ever take your money away." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7dd2e4a0-c2ff-4f8f-8c19-e5ec01a2c402/id-preview-3e2172de--c1c26671-6d8a-47c2-8082-e76e22fa0bd2.lovable.app-1777985302818.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7dd2e4a0-c2ff-4f8f-8c19-e5ec01a2c402/id-preview-3e2172de--c1c26671-6d8a-47c2-8082-e76e22fa0bd2.lovable.app-1777985302818.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window as any;
    w.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: "a7pgvcoj",
    };
    const ic = w.Intercom;
    if (typeof ic === "function") {
      ic("reattach_activator");
      ic("update", w.intercomSettings);
    } else {
      const d = document;
      const i: any = function () {
        i.c(arguments);
      };
      i.q = [];
      i.c = function (args: any) {
        i.q.push(args);
      };
      w.Intercom = i;
      const l = () => {
        const s = d.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://widget.intercom.io/widget/a7pgvcoj";
        const x = d.getElementsByTagName("script")[0];
        x.parentNode!.insertBefore(s, x);
      };
      if (document.readyState === "complete") {
        l();
      } else {
        window.addEventListener("load", l, false);
      }
    }
  }, []);

  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  );
}
