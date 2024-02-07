import { ActionFunctionArgs, Form, redirect } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Title from "../components/Title";

export default function Login() {
  return (
    <div className=" w-screen h-screen flex items-center justify-center">
      <div className=" bg-slate-100 px-6 py-8 m-auto  min-w-[800px] rounded-lg shadow-sm">
        <Title type="h3" className="text-center">
          Login
        </Title>
        <Form method="POST">
          <Input placeholder="Email" type="text" name="email" required />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            required
          />
          <Button>Login</Button>
        </Form>
      </div>
    </div>
  );
}

export const LoginAction = () => {
  // Perform login logic here
  console.log("Logging in...");
};

/* eslint-disable */
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
