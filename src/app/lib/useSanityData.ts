import { useState, useEffect } from "react";
import { isSanityConfigured } from "./sanity";

/**
 * Fetch data from Sanity with a static fallback.
 * Returns static data immediately, then replaces with Sanity data when loaded.
 */
export function useSanityData<T>(
  fetcher: () => Promise<T[]>,
  staticData: T[],
): { data: T[]; loading: boolean } {
  const [data, setData] = useState<T[]>(staticData);
  const [loading, setLoading] = useState(isSanityConfigured);

  useEffect(() => {
    if (!isSanityConfigured) return;

    let cancelled = false;
    fetcher()
      .then((result) => {
        if (!cancelled && result.length > 0) {
          setData(result);
        }
      })
      .catch((err) => {
        console.warn("Sanity fetch failed, using static data:", err);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, []);

  return { data, loading };
}
