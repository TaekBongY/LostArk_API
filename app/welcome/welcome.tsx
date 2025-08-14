import React, { useState } from "react";
import { useAuth } from "../contexts/AutoContext";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const { user, setUser } = useAuth();
  const [charName, setCharName] = useState("");
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <p>로그인이 필요합니다.</p>
      </div>
    );
  }

  const handleSelect = () => {
    setUser({ ...user, mainCharacterName: charName });
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-2xl mb-4">환영합니다, {user.name}님!</h1>
      <img
        src={user.picture}
        alt="Profile"
        className="w-16 h-16 rounded-full mb-4"
      />
      <p className="mb-2">대표 캐릭터 이름을 입력하세요</p>
      <input
        className="text-black p-2 rounded mb-4 text-white bg-gray-700"
        value={charName}
        onChange={(e) => setCharName(e.target.value)}
      />
      <button
        onClick={handleSelect}
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
      >
        선택 완료
      </button>
    </div>
  );
}
