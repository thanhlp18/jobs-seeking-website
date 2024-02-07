import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionFunctionArgs, Form, redirect } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Title from "../components/Title";
import Link from "../components/Link";
import icon_google from "../assets/icons/icon_google.svg";

const LOGIN_PAGE_TEXT = [
  "View salary to help you negotiate your offer or pay rise",
  "Find out about benefits, interview, company culture via reviews",
  "Easy apply with only 1 click",
  "Manage your own profile & privacy",
];

export default function Login() {
  return (
    <div className="flex flex-col gap-4 ">
      <Title type="h2" className="my-4">
        Welcome to ITViet
      </Title>
      <div className="flex flex-col-reverse md:flex-row md:gap-40 gap-10 w-full">
        <div className="flex flex-col gap-4 ">
          <div className="text-base">
            By signing in, you agree to ITviec’s Terms & Conditions and Privacy
            Policy in relation to your privacy information.
          </div>
          <div>
            <Button buttonType="outline" type="button">
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
              <Button type="submit" buttonType="primary">
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
            {LOGIN_PAGE_TEXT.map((text, idx) => (
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
  );
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData();
  const formToJSON: { [key: string]: FormDataEntryValue } = {};
  for (const [key, value] of form.entries()) {
    formToJSON[key] = value;
  }

  console.log("OKKK");
  console.log(formToJSON);

  return redirect("/home");
};
