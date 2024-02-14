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
import { useState } from "react";
import cvDownloadIcon from "../assets/profile-cv-download-icon.svg";
import Button from "../components/Button";
import Card from "../components/Card";
import Divider from "../components/Divider";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import {
  PROFILE_CONTACT_INFORMATION,
  PROFILE_CONTRACT_CATEGORY,
  PROFILE_UPDATE_PROFILE_CTA,
} from "../utils/constants";
import EditIcon from "../components/EditIcon";
import CardWithTitle from "../ui/CardWithTitle";

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
  const [isShowMoreUpdateProfile, setIsShowMoreUpdateProfile] = useState(false);
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
              {PROFILE_UPDATE_PROFILE_CTA.map((cta, index) => {
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
              {PROFILE_UPDATE_PROFILE_CTA.length > 3 &&
                PROFILE_UPDATE_PROFILE_CTA.map((cta, index) => (
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

              {PROFILE_UPDATE_PROFILE_CTA.length > 3 && (
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
                    Le Phuoc Thanh
                  </Title>
                </div>
                <Title
                  type="h4"
                  className="text-gray-600  text-center md:text-start"
                >
                  Front end developer intern
                </Title>
                <Divider />
                <div className="sm:grid-cols-2 sm:grid-rows-3 grid grid-cols-1 gap-x-4 gap-y-2 ">
                  <div className="flex flex-row gap-2 flex-nowrap">
                    <span className="text-lg text-gray-400 items-center">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <span className="font-medium text-base text-gray-700 line-clamp-1">
                      {PROFILE_CONTACT_INFORMATION.email}
                    </span>
                  </div>
                  <div className="flex flex-row gap-2 flex-nowrap items-center">
                    <span className="text-lg text-gray-400">
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <span className="font-medium text-base text-gray-700 line-clamp-1">
                      {PROFILE_CONTACT_INFORMATION.phone}
                    </span>
                  </div>
                  <div className="flex flex-row gap-2 flex-nowrap items-center">
                    <span className="text-lg text-gray-400">
                      <FontAwesomeIcon icon={faGift} />
                    </span>
                    <span className="font-medium text-base text-gray-700 line-clamp-1">
                      {PROFILE_CONTACT_INFORMATION.birthday}
                    </span>
                  </div>
                  <div className="flex flex-row gap-2 flex-nowrap items-center">
                    <span className="text-lg text-gray-400">
                      <FontAwesomeIcon icon={faGift} />
                    </span>
                    <span className="font-medium text-base text-gray-700 line-clamp-1">
                      {PROFILE_CONTACT_INFORMATION.gender}
                    </span>
                  </div>
                  <div className="flex flex-row gap-2 flex-nowrap items-center">
                    <span className="text-lg text-gray-400">
                      <FontAwesomeIcon icon={faLocation} />
                    </span>
                    <span className="font-medium text-base text-gray-700 line-clamp-1">
                      {PROFILE_CONTACT_INFORMATION.location}
                    </span>
                  </div>
                  <div className="flex flex-row gap-2 flex-nowrap items-center">
                    <span className="text-lg text-gray-400">
                      <FontAwesomeIcon icon={faGlobe} />
                    </span>
                    {PROFILE_CONTACT_INFORMATION.website && (
                      <span className="font-medium text-base text-gray-700 line-clamp-1">
                        {PROFILE_CONTACT_INFORMATION.website}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <EditIcon className="absolute right-4 top-4 text-lg" />
          </Card>
          {PROFILE_CONTRACT_CATEGORY.map((category, index) => (
            <CardWithTitle
              title={category.title}
              titleType="h3"
              key={`about-${index}`}
              description={category.description}
              icon={category.icon}
            ></CardWithTitle>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
