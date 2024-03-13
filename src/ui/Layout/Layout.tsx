import { Outlet, useLoaderData } from "react-router-dom";

import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { LoaderLoginResponse } from "../../utils/type";
import { signIn } from "../../services/redux/user";
import Toast from "../../components/Toast";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const dispatch = useAppDispatch();
  const loginData: LoaderLoginResponse = useLoaderData() as LoaderLoginResponse;

  useEffect(() => {
    if (loginData.isLogin) {
      dispatch(
        signIn({
          token: loginData.token,
          token_type: loginData.token_type,
          name: loginData.name,
        })
      );
    }
  }, [loginData, dispatch]);

  return (
    <div className="relative  h-screen">
      <Toast />
      <Header />
      <div className="absolute top-11 bottom-0  w-full   flex flex-col items-center justify-between">
        <div className="flex-1 w-full">
          <Outlet />
        </div>
        <Footer className=" w-full pt-8" />
      </div>
    </div>
  );
}
