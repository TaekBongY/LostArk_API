import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import type { CredentialResponse } from "@react-oauth/google";
import { useAuth } from "../contexts/AutoContext";

const parseJwt = (token?: string) => {
  if (!token) return null;
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch {
    return null;
  }
};

export default function GoogleLoginBtn() {
  const { setUser } = useAuth();

  const handleSuccess = (credentialResponse: CredentialResponse | null) => {
    const token = credentialResponse?.credential;
    if (!token) {
      console.warn("구글 인증 토큰이 없습니다.");
      return;
    }
    const payload = parseJwt(token);
    if (!payload) {
      console.error("토큰 파싱 실패");
      return;
    }

    setUser({
      email: payload.email,
      name: payload.name,
      picture: payload.picture,
      sub: payload.sub,
      mainCharacterName: null,
    });
  };

  const handleError = () => {
    console.error("구글 로그인 실패");
  };

  // 테스트용 더미 로그인
  const handleTestLogin = () => {
    setUser({
      email: "test@example.com",
      name: "테스트 유저",
      picture: "https://via.placeholder.com/150",
      sub: "test_user_123",
      mainCharacterName: null,
    });
  };

  return (
    <div className="flex flex-col space-y-2">
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
      {/* 개발 환경에서만 표시 */}
      {import.meta.env.DEV && (
        <button
          onClick={handleTestLogin}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
        >
          🧪 테스트 로그인
        </button>
      )}
    </div>
  );
}
