import React from "react";
import { useAuth } from "../contexts/AutoContext";
import { useCharacterInfo } from "../hooks/useCharacterInfo";
import { useArmoriesInfo } from "../hooks/useArmoriesInfo";
import ContentItems from "../components/ContentItems";
import type { CharacterInfo, Armory } from "../types";

export default function HomePage() {
  const { user } = useAuth();
  const characterName = user?.mainCharacterName ?? "";

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

  if (!characterName) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        대표 캐릭터가 설정되지 않았습니다.
      </div>
    );
  }

  if (loadingCharacter || loadingArmories)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        로딩 중...
      </div>
    );

  if (errorCharacter)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        캐릭터 정보 에러: {errorCharacter.message}
      </div>
    );

  if (errorArmories)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        아머리 정보 에러: {errorArmories.message}
      </div>
    );

  const characterDataList = Array.isArray(characterData)
    ? characterData
    : characterData
    ? [characterData]
    : [];

  const combinedData: CharacterInfo[] = characterDataList.map((char) => {
    let matchedArmory = null;

    if (Array.isArray(armoriesData)) {
      matchedArmory =
        armoriesData.find(
          (armory) => armory.CharacterName === char.CharacterName
        ) || null;
    } else if (
      armoriesData &&
      armoriesData.CharacterName === char.CharacterName
    ) {
      matchedArmory = armoriesData;
    }

    return {
      CharacterName: char.CharacterName,
      CharacterClassName: char.CharacterClassName,
      CharacterLevel: char.CharacterLevel,
      ItemAvgLevel: char.ItemAvgLevel,
      ServerName: char.ServerName,
      characterImage: matchedArmory?.CharacterImage,
      armory: matchedArmory,
    };
  });

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <ContentItems characterDataList={combinedData} />
    </div>
  );
}
