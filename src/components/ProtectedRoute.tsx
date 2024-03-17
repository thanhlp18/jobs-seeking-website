import { useEffect } from "react";
import { Navigate, useLoaderData } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { signIn } from "../services/redux/user";
import { LoaderLoginResponse } from "../utils/type";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
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

  if (!loginData.isLogin) {
    return (
      <Navigate
        to="/sign-in"
        replace={true}
        state={{ alert: "You need sign in to access this feature!" }}
      />
    );
  } else {
    return <>{children}</>;
  }
};
