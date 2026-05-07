import { createRouter } from "@tanstack/react-router";
import { useEffect } from "react";
import { routeTree } from "./routeTree.gen";

const RELOAD_KEY = "chimera:error-reload-attempted";

function isModuleLoadError(error: Error) {
  const message = `${error.name}: ${error.message}`;
  return /Failed to fetch dynamically imported module|Importing a module script failed|error loading dynamically imported module|Unable to preload CSS|Loading chunk \d+ failed|ChunkLoadError/i.test(
    message,
  );
}

function DefaultErrorComponent({ error }: { error: Error; reset: () => void }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    console.error(error);
    if (!isModuleLoadError(error)) return;
    if (window.sessionStorage.getItem(RELOAD_KEY) === "true") return;
    window.sessionStorage.setItem(RELOAD_KEY, "true");
    window.location.replace(window.location.href);
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
