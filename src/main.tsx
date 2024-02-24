import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import CreateCV from "./pages/CreateCV.tsx";
import HomePage, { action as searchITJobAction } from "./pages/HomePage.tsx";
import JobPreferences from "./pages/JobPreferences.tsx";
import ManageCV from "./pages/ManageCV.tsx";
import Profile from "./pages/Profile.tsx";
import SignIn, { action as signInAction } from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";
import Layout from "./ui/Layout.tsx";
import LayoutWithoutFooter from "./ui/LayoutWithoutFooter.tsx";
import ProfileLayout from "./ui/ProfileLayout.tsx";
import { loadLoginStatus } from "./utils/loadersFunction.ts";

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
      {
        path: "/profile",
        element: <ProfileLayout />,
        action: signInAction,
        children: [
          { path: "", element: <Profile /> },
          {
            path: "manage-cv",
            element: <ManageCV />,
          },
          {
            path: "job-preferences",
            element: <JobPreferences />,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <LayoutWithoutFooter />,
    loader: loadLoginStatus,
    children: [
      {
        path: "/create-cv",
        element: <CreateCV />,
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
