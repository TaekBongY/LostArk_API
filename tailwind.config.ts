import type { Config } from 'tailwindcss';

export default {
  // Tailwind CSS가 유틸리티 클래스를 스캔할 파일들을 지정합니다.
  content: [
    "./index.html", // HTML 파일
    "./app/**/*.{js,ts,jsx,tsx}", // app 폴더 내의 모든 JS/TS/JSX/TSX 파일
    "./app/**/*.css",
  ],
  theme: {
    extend: {
      // 여기에 커스텀 테마 설정을 추가할 수 있습니다 (예: 색상, 폰트 등)
    },
  },
  plugins: [
    // 여기에 Tailwind CSS 플러그인을 추가할 수 있습니다.
  ],
} satisfies Config;