import { Outlet, Link, createRootRoute, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

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
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  const searchStr = useRouterState({ select: (s) => s.location.searchStr });
  const embed = /(?:^|[?&])embed=1(?:&|$)/.test(searchStr ?? "");

  useEffect(() => {
    if (typeof window === "undefined" || embed) return;
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
      {!embed && <SiteHeader />}
      <main>
        <Outlet />
      </main>
      {!embed && <SiteFooter />}
    </div>
  );
}
