import { faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Input from "../components/Input";
import Title from "../components/Title";
import { ActionFunctionArgs, Form, redirect } from "react-router-dom";
import {
  COLOR_SECONDARY,
  HOMEPAGE_JOBS_CITIES,
  HOMEPAGE_SKILLS_TRENDING,
} from "../utils/constants";
import Wrapper from "../components/Wrapper";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4 ">
      <section className="py-4 pb-12  bg-gradient-to-r from-gray-950 from-40%  to-blue-800 ">
        <Wrapper className="gap-4 grid grid-cols-1 ">
          <Title type="h2" className="text-white">
            674 IT Jobs "Chất" for Le Phuoc Thanh
          </Title>

          <Form
            className="flex 6 md:flex-row flex-nowrap gap-2 flex-col"
            method="POST"
          >
            <Dropdown
              name="city"
              options={HOMEPAGE_JOBS_CITIES}
              icon={<FontAwesomeIcon icon={faLocationDot} />}
              containerClassName="md:w-56 h-12 text-lg font-semibold w-full"
            />

            <Input
              containerClassName="flex-1 "
              type="text"
              name="keyword"
              required
              placeholder="Enter keyword skill (Java, iOS...), job title, company..."
            />
            <Button
              buttonType="primary"
              type="submit"
              className="px-4 rounded-lg  h-12"
            >
              <FontAwesomeIcon icon={faSearch} />
              <span className="ml-2 ">Search</span>
            </Button>
          </Form>

          <div className="flex flex-row flex-wrap gap-2 ">
            <Title type="h-3" className="font-semibold text-gray-200">
              Trending now:
            </Title>
            {HOMEPAGE_SKILLS_TRENDING.map((skill, index) => (
              <Button
                buttonType="colored"
                className="text-sm rounded-2xl border border-gray-400 border-solid hover:bg-gray-600 hover:opacity-100 hover:text-white py-1 px-2"
                backgroundColor={COLOR_SECONDARY}
                textColor="rgb(107,114,128)"
                key={index}
              >
                {skill}
              </Button>
            ))}
          </div>
        </Wrapper>
      </section>
    </div>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const formDataObject: { [key: string]: FormDataEntryValue } = {};
  for (const [key, value] of form.entries()) {
    const convertValue = value
      .toString()
      .trim()
      .replace(/\s/g, "-")
      .toLowerCase();
    formDataObject[key] = convertValue;
  }
  if (formDataObject.keyword !== "") {
    return redirect(
      `/it-jobs/${formDataObject.keyword}${
        formDataObject.city ? `/${formDataObject.city}` : ""
      }`
    );
  }
  return null;
}
