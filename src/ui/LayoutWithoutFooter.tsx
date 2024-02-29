import { Outlet, useLoaderData } from "react-router-dom";
import Toast from "../components/Toast";
import { LoaderLoginResponse } from "../utils/type";
import Header from "./Header";

export default function LayoutWithoutFooter() {
  const loginData: LoaderLoginResponse = useLoaderData() as LoaderLoginResponse;
  localStorage.setItem("isLogin", loginData?.isLogin.toString());
  localStorage.setItem("user_id", loginData?.user_id.toString());
  return (
    <div className="relative  h-screen">
      <Toast />
      <Header />
      <div className="absolute top-11 bottom-0  w-full   flex flex-col items-center justify-between">
        <div className="flex-1 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}