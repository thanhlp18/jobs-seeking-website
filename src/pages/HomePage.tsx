import {
  faChevronRight,
  faLocationDot,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionFunctionArgs, Form, redirect } from "react-router-dom";
import Button from "../components/Button";
import CompanyCard from "../ui/Card/CompanyCard";
import ArticleCard from "../ui/Card/ArticleCard";
import Dropdown from "../components/Dropdown";
import Input from "../components/Input";
import Link from "../components/Link";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import {
  COLOR_SECONDARY,
  HOMEPAGE_FEATURE_ARTICLES,
  HOMEPAGE_JOBS_CITIES,
  HOMEPAGE_SKILLS_TRENDING,
  HOMEPAGE_TOP_EMPLOYERS,
  HOMEPAGE_USPS,
} from "../utils/constants";

export default function HomePage() {
  // const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4">
      {/* Search box */}
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
              containerClassName="h-12  font-semibold"
            />

            <div className="flex flex-row flex-1 md:gap-2">
              <Input
                containerClassName="flex-1 flex flex-col"
                type="text"
                name="keyword"
                required
                placeholder="Enter keyword skill (Java, iOS...), job title, company..."
              />
              <Button
                buttonType="primary"
                type="submit"
                className="-ml-1   rounded-s-none rounded-e-lg md:ml-0 px-4 md:rounded-lg  h-12"
              >
                <FontAwesomeIcon icon={faSearch} />
                <span className="ml-2 md:inline hidden">Search</span>
              </Button>
            </div>
          </Form>

          <div className="flex flex-row flex-wrap gap-2 ">
            <Title type="h-3" className="font-semibold text-gray-100">
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

      {/* Platform's USP */}
      <section className="py-4 pb-12">
        <Wrapper>
          <Title type="h2" className="text-center">
            Best tools for your application journey
          </Title>
          <div className="grid lg:grid-cols-3 gap-4 pt-8">
            {HOMEPAGE_USPS.map((usp, index) => (
              <div
                className="flex flex-col sm:flex-row items-center gap-4 w-full"
                key={`usp-${index}`}
              >
                <div>
                  <img
                    src={usp.icon}
                    className="min-w-48 lg:min-w-28 p-6 pt-0 lg:p-3"
                  />
                </div>
                <div className="grid grid-row-4 gap-2 text-center sm:text-left">
                  <Title type="h4">{usp.title}</Title>
                  <p className="text-base font-semibold text-gray-700 row-span-2 pb-4">
                    {usp.description}
                  </p>
                  <Button
                    type="button"
                    buttonType={index % 2 != 0 ? "primary" : "outline"}
                    className="min-w-36 rounded-lg max-w-48 h-12 mx-auto sm:mx-0"
                  >
                    <span className={`text-base font-semibold `}>
                      {usp.cta}
                    </span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>

      {/* Top Employers */}
      <section className="py-4 pb-12">
        <Wrapper>
          <Title type="h2" className="text-center">
            Top Employers
          </Title>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-8">
            {HOMEPAGE_TOP_EMPLOYERS.map((employer, index) => (
              <CompanyCard
                key={`top-employer-${index}`}
                title={employer.title}
                skills={[...employer.skills]}
                location={employer.location}
                jobsCount={employer.jobsCount}
                className="mx-auto w-full"
              />
            ))}
          </div>
        </Wrapper>
      </section>

      {/* Features articles */}
      <section className="py-4 pb-12 bg-gray-100">
        <Wrapper>
          <div className="flex flex-row  justify-between items-center">
            <Title type="h2" className="text-center">
              Feature Articles
            </Title>
            <Link to="/blog">
              <>
                <span>View all articles </span>
                <span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 pt-8">
            {HOMEPAGE_FEATURE_ARTICLES.map((article, index) => (
              <ArticleCard
                key={`feature-article-${index}`}
                containerClassName={`shadow-sm ${
                  article.isHighlight
                    ? "md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-3 flex-col"
                    : "flex-row"
                }`}
                title={article.title}
                description={article.description}
                link={article.link}
                imageSrc={article.image}
                isHighlight={article.isHighlight}
              />
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
