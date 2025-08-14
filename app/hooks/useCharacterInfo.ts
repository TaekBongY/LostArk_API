import { useState, useEffect } from "react";
import { getCharacterInfo } from "../services/API";
import type { CharacterInfo } from "../types";

export function useCharacterInfo(userId: string | null) {
  const [data, setData] = useState<CharacterInfo | CharacterInfo[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!userId) return; // userId 없으면 호출 안 함

    setLoading(true);
    getCharacterInfo(userId)
      .then(response => {
        setData(response);
        setError(null);
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [userId]);

  return { data, loading, error };
}