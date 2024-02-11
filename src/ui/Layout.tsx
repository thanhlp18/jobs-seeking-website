import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import { LoaderLoginResponse } from "../utils/type";
import { Toaster } from "react-hot-toast";

export default function Layout() {
  const loginData: LoaderLoginResponse = useLoaderData() as LoaderLoginResponse;
  localStorage.setItem("isLogin", loginData?.isLogin.toString());
  localStorage.setItem("user_id", loginData?.user_id.toString());
  return (
    <div className="relative  h-screen">
      <Toaster
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          error: {
            duration: 3000,
            style: {
              background: "#ff0000",
              color: "#fff",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#b10000",
            },
          },
          success: {
            duration: 3000,
            style: {
              background: "rgb(34, 197, 94)",

              color: "#fff",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "rgb(34, 197, 94)",
            },
          },
        }}
      />
      <Header />
      <div className="absolute top-11 bottom-0  w-full   flex flex-col items-center justify-between">
        <div className="xl:max-w-[1280px] flex-1 px-4">
          <Outlet />
        </div>
        <Footer className=" w-full mt-8 " />
      </div>
    </div>
  );
}
