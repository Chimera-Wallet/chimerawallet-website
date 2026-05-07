import { createRouter } from "@tanstack/react-router";
import { useEffect } from "react";
import { routeTree } from "./routeTree.gen";

const RELOAD_KEY = "chimera:error-reload-attempted";

function DefaultErrorComponent({ error }: { error: Error; reset: () => void }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    console.error(error);
    if (window.sessionStorage.getItem(RELOAD_KEY) === "true") return;
    window.sessionStorage.setItem(RELOAD_KEY, "true");
    window.location.reload();
  }, [error]);

  return null;
}

export const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent,
  });

  return router;
};
