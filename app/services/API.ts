function getApiKey() {
  let apiKey = import.meta.env.VITE_LOSTARK_API_KEY;
  if (!apiKey) {
    throw new Error("API 키가 설정되어 있지 않습니다.");
  }
  return apiKey.replace(/[\r\n\t]/g, "").trim();
}

export async function getCharacterInfo(characterName: string) {
  const apiKey = getApiKey();

  const res = await fetch(
    `/api/characters/${encodeURIComponent(characterName)}/siblings`,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${apiKey}`
      }
    }
  );

  if (!res.ok) {
    throw new Error(`API 요청 실패: ${res.status}`);
  }

  return res.json();
}

export async function getArmoriesInfo(characterName: string) {
  const apiKey = getApiKey();

  const res = await fetch(
    `/api/armories/characters/${encodeURIComponent(characterName)}/profiles`,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${apiKey}`
      }
    }
  );

  if (!res.ok) {
    throw new Error(`API 요청 실패: ${res.status}`);
  }

  return res.json();
}
