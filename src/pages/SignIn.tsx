import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast from "react-hot-toast";
import {
  ActionFunctionArgs,
  Form,
  redirect,
  useNavigate,
} from "react-router-dom";
import icon_google from "../assets/icons/icon_google.svg";
import Button from "../components/Button";
import Input from "../components/Input";
import Link from "../components/Link";
import Title from "../components/Title";
import { loginApi } from "../services/api";
import { LOGIN_PAGE_TEXT_USP } from "../utils/constants";
import { ApiLoginResponse } from "../utils/type";
import { useEffect } from "react";
import Wrapper from "../components/Wrapper";

export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin") === "true";
    console.log(isLogin);
    if (isLogin) navigate("/");
  }, []);

  return (
    <Wrapper>
      <div className="flex flex-col gap-4">
        <Title type="h2">Welcome to ITViec!</Title>
        <div className="flex flex-col-reverse md:flex-row md:gap-40 gap-10 w-full">
          <div className="flex flex-col gap-4 ">
            <div className="text-base">
              By signing in, you agree to ITviec’s{" "}
              <Link to="terms-conditions"> Terms & Conditions</Link> and{" "}
              <Link to="privacy-policy">Privacy Policy</Link> in relation to
              your privacy information.
            </div>
            <div>
              <Button
                buttonType="outline"
                type="button"
                className="w-full h-12 rounded-md"
              >
                <div className="flex flex-row justify-center items-center gap-4">
                  <span>
                    <img src={icon_google} className="h-8" />
                  </span>
                  <span>Login with Google</span>
                </div>
              </Button>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex-grow border-t-2 border-slate-200 border-solid"></div>
              <div className="grid-1 px-2">or</div>
              <div className="flex-grow border-t-2 border-slate-200 border-solid"></div>
            </div>

            <Form
              method="POST"
              className="text-base flex flex-col gap-4 text-base"
            >
              <Input
                placeholder="Email"
                type="text"
                name="email"
                id="login-email"
                required
                label="Email"
              />

              <Input
                placeholder="Password"
                type="password"
                name="password"
                label="Password"
                id="login-password"
                required
              />
              <span>
                <Button
                  type="submit"
                  buttonType="primary"
                  className="w-full h-12 rounded-md"
                >
                  Login
                </Button>
                <Link to="forgot" className="text-end block">
                  Forgot password?
                </Link>
              </span>
            </Form>
            <div className="text-center">
              <span>Do not have an account? </span>
              <Link to="/sign-up">Sign up now!</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Title type="h2" className="">
              Sign in to get instant access to thousands of reviews and salary
              information
            </Title>
            <ul className="flex flex-col">
              {LOGIN_PAGE_TEXT_USP.map((text, idx) => (
                <li key={idx}>
                  <span className="text-green-500 mr-2 text-xl">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className="text-md text-lg ">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData();
  const formToJSON: { [key: string]: FormDataEntryValue } = {};
  for (const [key, value] of form.entries()) {
    formToJSON[key] = value;
  }

  const res: ApiLoginResponse = await loginApi(
    formToJSON.email.toString(),
    formToJSON.password.toString()
  );
  if (res.status === 200) {
    document.cookie = `token=${res.data.token}`;
    document.cookie = `token_expires=${res.data.expires_in}`;
    document.cookie = `token_created_at=${res.data.created_at}`;
    document.cookie = `user_id=${res.data.user_id}`;
    toast.success("Login successfully!");
    return redirect("/home");
  } else {
    toast.error(res.data.message ? res.data.message : "Login fail!");
    return null;
  }
};
