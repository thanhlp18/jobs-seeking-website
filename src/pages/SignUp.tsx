import { ActionFunctionArgs, Form, redirect } from "react-router-dom";
import icon_google from "../assets/icons/icon_google.svg";
import Button from "../components/Button";
import Input from "../components/Input";
import Link from "../components/Link";
import Title from "../components/Title";
import { useState } from "react";

export default function SignUp() {
  const [isAgreeGoogle, setIsAgreeGoogle] = useState(true);
  const [isAgreeTerms, setIsAgreeTerms] = useState(true);
  console.log(isAgreeGoogle, "isAgreeGoogle");
  return (
    <div className="flex flex-col gap-4 ">
      <Title type="h2" className="mb-4 mt-8">
        Welcome to ITViet!
      </Title>
      <div className="flex flex-col-reverse md:flex-row md:gap-40 gap-10 w-full">
        <div className="flex flex-col gap-4 flex-1 ">
          <div className="text-base ">
            <Input
              type="checkbox"
              placeholder=""
              name="sign-with-google"
              handleOnChange={() => {
                setIsAgreeGoogle(!isAgreeGoogle);
              }}
              containerClassName="h-6 w-6 transform translate-y-1.5 mr-1"
            />{" "}
            By signing up with Google, I agree to ITviec’s{" "}
            <Link to="terms-conditions"> Terms & Conditions</Link> and{" "}
            <Link to="privacy-policy">Privacy Policy</Link> in relation to your
            privacy information.
          </div>
          <div>
            <Button
              buttonType={isAgreeGoogle ? "disabled" : "outline"}
              type="button"
            >
              <div className="flex flex-row justify-center items-center gap-4">
                <span>
                  <img src={icon_google} className="h-8" />
                </span>
                <span>Sign Up with Google</span>
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
              placeholder="Name"
              type="text"
              name="Name"
              id="sign-up-name"
              required
              label="Name"
            />
            <Input
              placeholder="Email"
              type="text"
              name="email"
              id="sign-up-email"
              required
              label="Email"
            />

            <Input
              placeholder="Password"
              type="password"
              name="password"
              label="Password"
              id="sign-up-password"
              required
            />
            <div className="text-base ">
              <Input
                type="checkbox"
                placeholder=""
                name="sign-with-google"
                required
                containerClassName="h-6 w-6 transform translate-y-1.5 mr-1"
                handleOnChange={() => {
                  setIsAgreeTerms(!isAgreeTerms);
                }}
              />{" "}
              I have read and agree to ITviec’s{" "}
              <Link to="terms-conditions"> Terms & Conditions</Link> and{" "}
              <Link to="privacy-policy">Privacy Policy</Link> in relation to
              your privacy information.
            </div>
            <span>
              <Button
                type="submit"
                buttonType={isAgreeTerms ? "disabled" : "primary"}
              >
                Login
              </Button>
            </span>
          </Form>

          <div className="text-center">
            <span>Already have an account? </span>
            <Link to="/sign-in">Sign In Now!</Link>
          </div>
        </div>
        <div className="flex-1 gap-4 lg:block hidden">
          <img
            src="src/assets/sign-up-robot-image.png"
            className=" w-full max-w-96"
          />
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
