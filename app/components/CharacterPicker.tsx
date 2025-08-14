// src/components/CharacterPicker.tsx
import React, { useState } from "react";
import { useAuth } from "../contexts/AutoContext";

type Props = { onClose?: () => void };

export default function CharacterPicker({ onClose }: Props) {
  const { saveMainCharacter } = useAuth();
  const [input, setInput] = useState("");
  const [mockResults, setMockResults] = useState<string[]>([]);

  const onSearch = () => {
    // 백엔드가 없으면 mock 결과로 대체 (나중에 fetch로 바꿀 예정)
    const samples = ["모지오", "모찌칼리버", "카마인", "모지오_2"];
    setMockResults(samples.filter((s) => s.includes(input)));
  };

  const onChoose = (name: string) => {
    saveMainCharacter(name);
    if (onClose) onClose();
  };

  const onManualSave = () => {
    if (!input) return alert("캐릭터명을 입력하세요");
    saveMainCharacter(input);
    if (onClose) onClose();
  };

  return (
    <div style={{ background: "rgba(0,0,0,0.4)", position: "fixed", inset: 0 }}>
      <div style={{ width: 520, margin: "80px auto", background: "#fff", padding: 20 }}>
        <h3>대표 캐릭터 선택</h3>

        <div>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="캐릭터명 입력" />
          <button onClick={onSearch}>검색 (mock)</button>
          <button onClick={onManualSave}>수동 저장</button>
        </div>

        <ul>
          {mockResults.map((r) => (
            <li key={r}>
              {r} <button onClick={() => onChoose(r)}>대표로 선택</button>
            </li>
          ))}
        </ul>

        <button onClick={() => onClose?.()}>닫기</button>
      </div>
    </div>
  );
}
