import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SignIn, { action as signInAction } from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";
import Layout from "./ui/Layout.tsx";
import { loadLoginStatus } from "./utils/loadersFunction.ts";
import HomePage, { action as searchITJobAction } from "./pages/HomePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: loadLoginStatus,
    children: [
      {
        path: "/",
        element: <HomePage />,
        action: searchITJobAction,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
        action: signInAction,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
        action: signInAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
