import React, { useEffect, useRef, useState } from "react";
import type { CharacterInfo } from "~/types";

interface ContentItemsProps {
  characterDataList: CharacterInfo[];
}

const ContentItems: React.FC<ContentItemsProps> = ({ characterDataList }) => {
  const masonryContainerRef = useRef<HTMLDivElement>(null);
  const [Masonry, setMasonry] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("masonry-layout")
        .then((mod) => setMasonry(() => mod.default))
        .catch((error) =>
          console.error("Failed to load Masonry-layout:", error)
        );
    }
  }, []);

  useEffect(() => {
    if (Masonry && masonryContainerRef.current) {
      const masonry = new Masonry(masonryContainerRef.current, {
        itemSelector: ".masonry-item",
        columnWidth: ".masonry-item",
        percentPosition: true,
        gutter: 6,
        transitionDuration: "0.4s",
      });

      masonry.layout();

      return () => masonry.destroy();
    }
  }, [Masonry, characterDataList]);

  if (!characterDataList.length) {
    return <p>캐릭터 정보를 불러오는 중입니다...</p>;
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-6">
      <div className="container mx-auto">
        <div ref={masonryContainerRef} className="masonry-grid">
          {characterDataList.map((char, idx) => (
            <div
              key={idx}
              className="character-card masonry-item bg-white dark:bg-gray-700 p-4 rounded shadow mb-4"
              style={{ width: "19%" }}
            >
              {/* 이미지 */}
              {char.characterImage && (
                <img
                  src={char.characterImage}
                  alt={`${char.CharacterName} 이미지`}
                  className="mb-4 rounded"
                  style={{ width: "100%" }}
                />
              )}

              {/* 기본 정보 */}
              <div>
                <strong>닉네임:</strong> {char.CharacterName}
              </div>
              <div>
                <strong>직업:</strong> {char.CharacterClassName}
              </div>
              <div>
                <strong>전투 레벨:</strong> {char.CharacterLevel}
              </div>
              <div>
                <strong>아이템 레벨:</strong> {char.ItemAvgLevel}
              </div>
              <div>
                <strong>서버:</strong> {char.ServerName}
              </div>
              {char.armory && (
                <div>
                  <strong>칭호:</strong> {char.armory.Title}
                </div>
              )}

              {/* 아머리 정보 예시 (Stats 중 일부만 보여주기) */}
              {char.armory && char.armory.Stats && (
                <div className="mt-3 text-sm">
                  <strong>특성</strong>
                  <ul>
                    {char.armory.Stats.slice(0, 8).map((stat, i) => (
                      <li key={i}>
                        {stat.Type}: {stat.Value}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentItems;
