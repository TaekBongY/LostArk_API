import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import "./app.css";
import Header from "./components/Header";
import ContentItems from "./components/ContentItems";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
        <body className="flex flex-col min-h-screen">
          {/* 이 부분에 페이지 중앙 정렬 및 max-width 컨테이너를 추가합니다. */}
          {/* 설명:
          container: 반응형 max-width와 기본 좌우 패딩을 적용.
          mx-auto: 좌우 마진을 자동으로 설정하여 블록 요소를 중앙 정렬.
          px-4: 기본적으로 좌우 패딩 1rem (16px)
          sm:px-6: small 브레이크포인트(기본 640px) 이상에서는 좌우 패딩 1.5rem (24px)
          lg:px-8: large 브레이크포인트(기본 1024px) 이상에서는 좌우 패딩 2rem (32px) */}
          <Header />
          <main className="flex-1 pt-16"> {/* 이 부분을 수정합니다: <main> 태그 추가 및 flex-1, pt-16 클래스 적용 */}
          {children} {/* 기존에 {children}이 있던 위치 */}
          <ContentItems />
          </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
