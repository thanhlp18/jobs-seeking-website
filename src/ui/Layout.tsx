import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";

export default function Layout() {
  return (
    <div className="relative  h-screen">
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
