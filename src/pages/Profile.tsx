import {
  faChevronDown,
  faChevronUp,
  faEnvelope,
  faGlobe,
  faLocation,
  faPlusCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons/faGift";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import cvDownloadIcon from "../assets/profile-cv-download-icon.svg";
import Button from "../components/Button";
import Card from "../components/Card";
import Divider from "../components/Divider";
import EditIcon from "../components/EditIcon";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import CardWithTitle from "../ui/CardWithTitle";
import ProfileCV from "../ui/ProfileCV";
import {
  PROFILE_CONTACT_INFORMATION,
  PROFILE_DATA_CATEGORY,
  PROFILE_EXAMPLE_DATA_FOR_CV,
} from "../utils/constants";
import { ProfileDataForCV, ProfileUserInformationType } from "../utils/type";
import { useNavigate } from "react-router-dom";

const percentage = 0.75;
const CIRCLE_COLOR: { [key: string]: string } = {
  poor: "#fd7e14",
  good: "#ffc107",
  "very good": "#198754",
  excellent: "#0d6efd",
};

const getPercentageRate = (percentage: number) => {
  switch (true) {
    case percentage > 0.75:
      return "excellent";
    case percentage > 0.5:
      return "very good";
    case percentage > 0.25:
      return "good";
    default:
      return "poor";
  }
};

export default function Profile() {
  const navigate = useNavigate();
  const [isShowMoreUpdateProfile, setIsShowMoreUpdateProfile] = useState(false);
  const [userData, setUserData] = useState<ProfileUserInformationType>({
    name: "",
    title: "",
    email: "",
    phone: "",
    birthday: "",
    gender: "",
    location: "",
  });
  const [ProfileForCV, setProfileForCV] = useState<ProfileDataForCV>({
    aboutMe: {
      description: "",
    },
    education: [
      {
        degree: "",
        institution: "",
        duration: {
          start: "",
          end: "",
        },
        additionalDetail: "",
      },
    ],
    workExperience: [
      {
        position: "",
        company: "",
        duration: {
          start: "",
          end: "",
        },
        responsibilities: "",
      },
    ],
    skills: {
      excellent: [],
      intermediate: [],
      beginner: [],
    },
    personalProjects: [],
    certificates: [],
    awards: [],
  });
  const [profileCTA, setProfileCTA] = useState<string[]>([]);
  useEffect(() => {
    setUserData(PROFILE_CONTACT_INFORMATION);
    setProfileForCV(PROFILE_EXAMPLE_DATA_FOR_CV);
    PROFILE_DATA_CATEGORY.map((category) => {
      console.log(PROFILE_EXAMPLE_DATA_FOR_CV.aboutMe.description.length);
      let profileCTATemp: string[] = [];
      switch (category.id) {
        case "about-me": {
          PROFILE_EXAMPLE_DATA_FOR_CV.aboutMe.description.length === 0 ??
            (profileCTATemp = [...profileCTATemp, "Add About Me"]);
          break;
        }
        case "education": {
          PROFILE_EXAMPLE_DATA_FOR_CV.education.length === 0 ??
            (profileCTATemp = [...profileCTATemp, "Add Education"]);
          break;
        }
        case "work-experience": {
          PROFILE_EXAMPLE_DATA_FOR_CV.workExperience.length === 0 ??
            (profileCTATemp = [...profileCTATemp, "Add Work Experience"]);
          break;
        }
        case "skills": {
          (PROFILE_EXAMPLE_DATA_FOR_CV.skills.excellent?.length === 0 &&
            PROFILE_EXAMPLE_DATA_FOR_CV.skills.intermediate?.length === 0 &&
            PROFILE_EXAMPLE_DATA_FOR_CV.skills.beginner?.length === 0) ??
            (profileCTATemp = [...profileCTATemp, "Add Skills"]);
          break;
        }
        case "personal-projects": {
          PROFILE_EXAMPLE_DATA_FOR_CV.personalProjects.length === 0 ??
            (profileCTATemp = [...profileCTATemp, "Add Personal Projects"]);
          break;
        }
        case "certificates": {
          PROFILE_EXAMPLE_DATA_FOR_CV.certificates.length === 0 ??
            (profileCTATemp = [...profileCTATemp, "Add Certificates"]);
          break;
        }
        case "awards": {
          PROFILE_EXAMPLE_DATA_FOR_CV.awards.length === 0 ??
            (profileCTATemp = [...profileCTATemp, "Add Awards"]);
          break;
        }
        default:
          break;
      }
      setProfileCTA(profileCTATemp);
    });
  }, []);

  return (
    <Wrapper className="">
      <div className="grid grid-cols-10 gap-6">
        <Card className="md:col-span-3 bg-white md:flex hidden flex-col h-fit">
          <div className="flex flex-row gap-4 justify-between align-center">
            <div className="relative h-fit">
              <svg
                width={100}
                height={100}
                xmlns="http://www.w3.org/2000/svg"
                className="transform -rotate-[90deg]"
              >
                <circle r="46" cx="50%" cy="50%" stroke="#ccc" />
                <circle
                  r="45"
                  cx="50%"
                  cy="50%"
                  fill="white"
                  stroke={CIRCLE_COLOR[getPercentageRate(percentage)]}
                  strokeWidth={8}
                  strokeDasharray={Math.PI * 2 * 43} // Set the strokeDasharray to the circumference of the circle
                  strokeDashoffset={Math.PI * 2 * 43 * (1 - percentage)} // Set the strokeDashoffset to a quarter of the circumference
                />
              </svg>
              <FontAwesomeIcon
                icon={faStar}
                className={`text-2xl absolute top-[50%] right-[50%] transform translate-x-[50%] -translate-y-[50%] ${
                  percentage > 0 ? "text-yellow-500" : "text-orange-500"
                }`}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-lg font-semibold">Profile Strength</span>
              <span
                className={`text-base capitalize font-extrabold text-[${
                  CIRCLE_COLOR[getPercentageRate(percentage)]
                }]`}
              >
                {getPercentageRate(percentage)}
              </span>
              <span className="font-medium text-sm text-gray-700">
                {percentage * 100}% completed
              </span>
            </div>
          </div>
          <Divider />
          <div className="flex flex-col gap-3 ">
            <Title type="h5" className="text-base">
              Upgrade profile to "Excellent" to unlock Download CV
            </Title>
            <ul className="flex flex-col gap-3  ">
              {profileCTA.map((cta, index) => {
                if (index <= 2)
                  return (
                    <li
                      key={`update-profile-${index}`}
                      className="cursor-pointer text-blue-500 font-medium"
                    >
                      <span>
                        <FontAwesomeIcon icon={faPlusCircle} />
                      </span>
                      <span className="ml-2">{cta}</span>
                    </li>
                  );
              })}
              {profileCTA.length > 3 &&
                profileCTA.map((cta, index) => (
                  <li
                    key={`update-profile-${index}`}
                    className={`cursor-pointer text-blue-500 font-medium ${
                      isShowMoreUpdateProfile ? "block" : "hidden"
                    }`}
                  >
                    <span>
                      <FontAwesomeIcon icon={faPlusCircle} />
                    </span>
                    <span className="ml-2">{cta}</span>
                  </li>
                ))}

              {profileCTA.length > 3 && (
                <li
                  className="cursor-pointer text-gray-500 font-medium transition delay-1000 ease-in"
                  onClick={() =>
                    setIsShowMoreUpdateProfile(!isShowMoreUpdateProfile)
                  }
                >
                  {!isShowMoreUpdateProfile ? (
                    <>
                      <Transition
                        show={!isShowMoreUpdateProfile}
                        enter="transition-translate duration-150"
                        enterFrom="-translate-y-1"
                        enterTo="translate-y-0"
                        leave="transition-translate duration-150"
                        leaveFrom="translate-y-0"
                        leaveTo="-translate-y-1"
                      >
                        <span>
                          <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                        <span className="ml-2">Add more information</span>
                      </Transition>
                    </>
                  ) : (
                    <>
                      {" "}
                      <Transition
                        show={isShowMoreUpdateProfile}
                        enter="transition-translate duration-150"
                        enterFrom="-translate-y-1"
                        enterTo="translate-y-0"
                        leave="transition-translate duration-150"
                        leaveFrom="translate-y-0"
                        leaveTo="-translate-y-1"
                      >
                        <span>
                          <FontAwesomeIcon icon={faChevronUp} />
                        </span>
                        <span className="ml-2">Show less</span>
                      </Transition>
                    </>
                  )}
                </li>
              )}
            </ul>
            <Divider />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-2">
              <img
                src={cvDownloadIcon}
                alt="Explore CV templates and download your CV"
              />
              <span className="text-base font-medium">
                Explore CV templates and download your CV
              </span>
            </div>
            <div>
              <Button
                buttonType="primary"
                className="py-2 px-4 w-full rounded-sm"
                onClick={() => navigate("/create-cv")}
              >
                Preview & Download CV
              </Button>
            </div>
          </div>
        </Card>
        <div className="md:col-span-7 col-span-10 gap-6 grid">
          <Card className=" bg-white relative">
            <div className="flex gap-6 flex-col md:flex-row items-center md:items-start">
              <div>
                <img
                  src="../src/assets/profile-avatar.jpg"
                  alt="profile-avatar"
                  height={140}
                  width={140}
                  className="rounded-full"
                />
              </div>
              <div className="gap-2 flex flex-col w-full">
                <div>
                  <Title type="h2" className="text-center md:text-start">
                    {userData.name}
                  </Title>
                </div>
                <Title
                  type="h4"
                  className="text-gray-600  text-center md:text-start"
                >
                  {userData.title}
                </Title>
                <Divider />
                <div className="sm:grid-cols-2 sm:grid-rows-3 grid grid-cols-1 gap-x-4 gap-y-2 ">
                  <div className="flex flex-row gap-2 flex-nowrap">
                    <span className="text-lg text-gray-400 items-center">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <span className="font-medium text-base text-gray-700 line-clamp-1">
                      {userData.email}
                    </span>
                  </div>
                  <div className="flex flex-row gap-2 flex-nowrap items-center">
                    <span className="text-lg text-gray-400">
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <span className="font-medium text-base text-gray-700 line-clamp-1">
                      {userData.phone}
                    </span>
                  </div>
                  <div className="flex flex-row gap-2 flex-nowrap items-center">
                    <span className="text-lg text-gray-400">
                      <FontAwesomeIcon icon={faGift} />
                    </span>
                    <span className="font-medium text-base text-gray-700 line-clamp-1">
                      {userData.birthday}
                    </span>
                  </div>
                  <div className="flex flex-row gap-2 flex-nowrap items-center">
                    <span className="text-lg text-gray-400">
                      <FontAwesomeIcon icon={faGift} />
                    </span>
                    {userData.gender && (
                      <span className="font-medium text-base text-gray-700 line-clamp-1">
                        {userData.gender}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-row gap-2 flex-nowrap items-center">
                    <span className="text-lg text-gray-400">
                      <FontAwesomeIcon icon={faLocation} />
                    </span>
                    {userData.location && (
                      <span className="font-medium text-base text-gray-700 line-clamp-1">
                        {userData.location}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-row gap-2 flex-nowrap items-center">
                    <span className="text-lg text-gray-400">
                      <FontAwesomeIcon icon={faGlobe} />
                    </span>
                    {userData.website && (
                      <span className="font-medium text-base text-gray-700 line-clamp-1">
                        {userData.website}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <EditIcon className="absolute right-4 top-4 text-lg" />
          </Card>
          {PROFILE_DATA_CATEGORY.map((category, index) => {
            return (
              category.id !== "cover-letter" && (
                <CardWithTitle
                  title={category.title}
                  titleType="h3"
                  key={`about-${index}`}
                  description={category.description}
                  icon={category.icon}
                >
                  <ProfileCV
                    ProfileData={ProfileForCV}
                    sectionKey={category.id}
                  />
                </CardWithTitle>
              )
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}
