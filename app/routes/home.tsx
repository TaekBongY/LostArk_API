import React from "react";
import { useCharacterInfo } from "../hooks/useCharacterInfo";
import { useArmoriesInfo } from "../hooks/useArmoriesInfo";
import ContentItems from "../components/ContentItems";

export default function HomePage() {
  const characterName = "모지오";

  const {
    data: characterData,
    loading: loadingCharacter,
    error: errorCharacter,
  } = useCharacterInfo(characterName);

  const {
    data: armoriesData,
    loading: loadingArmories,
    error: errorArmories,
  } = useArmoriesInfo(characterName);

  if (loadingCharacter || loadingArmories) return <div>로딩 중...</div>;
  if (errorCharacter) return <div>캐릭터 정보 에러: {errorCharacter.message}</div>;
  if (errorArmories) return <div>아머리 정보 에러: {errorArmories.message}</div>;

  // characterData가 배열인지 단일 객체인지 확인 후 배열로 만듦
  const characterDataList = Array.isArray(characterData) ? characterData : characterData ? [characterData] : [];

  // armoriesData가 배열일 경우도 고려해서 캐릭터명 기준으로 매칭 후 armory 필드 추가
  const combinedData = characterDataList.map((char) => {
    let matchedArmory = null;

    if (Array.isArray(armoriesData)) {
      matchedArmory = armoriesData.find((armory) => armory.CharacterName === char.CharacterName) || null;
    } else if (armoriesData && armoriesData.CharacterName === char.CharacterName) {
      matchedArmory = armoriesData;
    }

    return {
      ...char,
      characterImage: matchedArmory?.CharacterImage,
      armory: matchedArmory,
    };
  });

  return (
    <div>
      <ContentItems characterDataList={combinedData} />
    </div>
  );
}
