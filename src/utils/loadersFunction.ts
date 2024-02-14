import { LoaderLoginResponse } from "./type";

export async function loadLoginStatus(): Promise<LoaderLoginResponse> {
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
}
