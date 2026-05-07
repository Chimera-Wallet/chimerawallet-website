import { createRouter } from "@tanstack/react-router";
import { useEffect } from "react";
import { routeTree } from "./routeTree.gen";

const STALE_CHUNK_RELOAD_KEY = "chimera:stale-chunk-reload-attempted";

function isStaleChunkError(error: Error) {
  return /Failed to fetch dynamically imported module|error loading dynamically imported module|Importing a module script failed|ChunkLoadError|Loading chunk \d+ failed/i.test(
    error.message,
  );
}

function DefaultErrorComponent({ error }: { error: Error; reset: () => void }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!isStaleChunkError(error)) return;
    if (window.sessionStorage.getItem(STALE_CHUNK_RELOAD_KEY) === "true") return;

    window.sessionStorage.setItem(STALE_CHUNK_RELOAD_KEY, "true");
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
