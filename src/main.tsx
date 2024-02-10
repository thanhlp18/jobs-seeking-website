import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn.tsx";
import { action } from "./pages/SignIn.tsx";
import Layout from "./ui/Layout.tsx";
import SignUp from "./pages/SignUp.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
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
