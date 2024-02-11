import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn.tsx";
import { action } from "./pages/SignIn.tsx";
import Layout from "./ui/Layout.tsx";
import SignUp from "./pages/SignUp.tsx";
import { LoaderLoginResponse } from "./utils/type.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: (): Promise<LoaderLoginResponse> => {
      function parseCookieString(cookieString: string): {
        [key: string]: string;
      } {
        const cookies: { [key: string]: string } = {};
        cookieString.split(";").forEach(function (cookie) {
          const [key, value] = cookie.trim().split("=");
          cookies[key] = value;
        });
        return cookies;
      }

      const cookieString = document.cookie;
      const cookies = parseCookieString(cookieString);
      if (
        cookies["token"] !== undefined ||
        Number(cookies["expires_in"] + cookies["created_at"]) >=
          new Date().getTime()
      ) {
        return Promise.resolve({ user_id: cookies.user_id, isLogin: true });
      } else {
        return Promise.resolve({ user_id: "", isLogin: false });
      }
    },
    children: [
      {
        path: "/",
        element: <App />,
        action: action,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
        action: action,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
        action: action,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
