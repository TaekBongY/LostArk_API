// routes.ts
import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Welcome from "./welcome/welcome";
import Home from "./routes/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Welcome />, // 인덱스는 Welcome 페이지 (캐릭터 선택)
      },
      {
        path: "home",
        element: <Home />, // /home 경로는 Home 페이지
      },
    ],
  },
]);