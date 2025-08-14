import { useState, useEffect } from "react";
import { getArmoriesInfo } from "../services/API";
import type { Armory } from "../types";

export function useArmoriesInfo(userId: string | null) {
  const [data, setData] = useState<Armory | Armory[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!userId) return; // userId 없으면 호출 안 함

    setLoading(true);
    getArmoriesInfo(userId)
      .then((response) => {
        setData(response);
        setError(null);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [userId]);

  return { data, loading, error };
}
