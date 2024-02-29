import {
  faEnvelope,
  faGift,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import {
  PROFILE_CONTACT_INFORMATION,
  PROFILE_EXAMPLE_DATA_FOR_CV,
} from "../utils/constants";
import { ProfileDataForCV, ProfileUserInformationType } from "../utils/type";
import Button from "../components/Button";
import Divider from "../components/Divider";
// import EditIcon from "../components/EditIcon";

type props = {
  className?: string;
};

export default function CVCubic({ className }: props) {
  const [userProfile] = React.useState<ProfileDataForCV>(
    PROFILE_EXAMPLE_DATA_FOR_CV
  );
  const [personalInformation] = React.useState<ProfileUserInformationType>(
    PROFILE_CONTACT_INFORMATION
  );
  const [primaryColor, setPrimaryColor] = useState<string>("#ed1b2f");
  useEffect(() => {
    setPrimaryColor("#ed1b2f");
  }, []);
  return (
    <div className={`${className} bg-white overflow-hidden`}>
      {/* Render the personal information section */}
      <div className="   px-6 md:px-8 lg:px-12 pt-6 md:pt-8 lg:pt-12 pb-3 md:pb-4 lg:pb-6 relative">
        <div className="flex gap-6 flex-col md:flex-row items-center md:items-start">
          <div className="gap-2 flex flex-col w-full pl-20 ">
            {/* Decorative shape */}
            <div
              className={`absolute z-20 top-0 left-0 w-0 h-0 before:border-t-[4rem] before:border-r-[4rem]
              !before:border-t-[${primaryColor}] before:border-t-cv_color_red 
               before:border-transparent rotate-90`}
            ></div>
            <div
              className={`absolute z-20 left-[6rem] top-[3rem] w-0 h-0 before:border-b-[3rem] before:border-l-[3rem] !before:border-b-[${primaryColor}] before:border-b-cv_color_red    before:border-transparent rotate-90`}
            ></div>
            <div
              className={`absolute z-10 top-[1rem] left-[4.2rem] w-[8.5rem] h-[8.5rem] border border-solid border-[${primaryColor}] border-cv_color_red `}
            >
              <div className="absolute -bottom-2 -right-2 w-[7rem] h-[8rem] bg-white  "></div>
            </div>

            <div className="z-20 flex flex-col gap-2">
              <Title
                type="h2"
                className={`md:text-start text-cv_color_red !text-${primaryColor}`}
              >
                {personalInformation.name}
              </Title>
              <Title type="h4" className="text-bold md:text-start font-normal">
                {personalInformation.title}
              </Title>
            </div>

            <div className="sm:grid-cols-2 sm:grid-rows-2 grid grid-cols-1  gap-y-2 z-20">
              <div className="flex flex-row gap-2 flex-nowrap">
                <span className="text-base text-bold items-center">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="text-base text-bold line-clamp-1">
                  {personalInformation.email}
                </span>
              </div>
              <div className="flex flex-row gap-2 flex-nowrap items-center">
                <span className="text-base text-bold">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span className="text-base text-bold line-clamp-1">
                  {personalInformation.phone}
                </span>
              </div>
              <div className="flex flex-row gap-2 flex-nowrap items-center">
                <span className="text-base text-bold">
                  <FontAwesomeIcon icon={faGift} />
                </span>
                <span className="text-base text-bold line-clamp-1">
                  {personalInformation.birthday}
                </span>
              </div>

              <div className="flex flex-row gap-2 flex-nowrap items-center">
                <span className="text-base text-bold">
                  <FontAwesomeIcon icon={faLocation} />
                </span>
                {personalInformation.location && (
                  <span className="text-base text-bold line-clamp-1">
                    {personalInformation.location}
                  </span>
                )}
              </div>
            </div>

            <p className="text-bold col-span-10 text-base">
              {userProfile.aboutMe}
            </p>
          </div>
        </div>{" "}
        <div className="absolute right-0 top-20">
          <svg
            fill="none"
            height="204"
            viewBox="0 0 42 204"
            width="42"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 65.3579V32L42 0V204L23.3253 190.686V90.7749L0 65.3579Z"
              fill={primaryColor ? primaryColor : "#9A173F"}
            ></path>
          </svg>
        </div>
        {/* <EditIcon className="absolute right-4 top-4 text-sm" /> */}
      </div>
      {/* Render the main section */}
      <div className=" px-6 md:px-8 lg:px-12 pt-3 md:pt-4 lg:pt-6 pb-3 md:pb-4 lg:pb-6  flex flex-col flex-nowrap gap-1">
        {/* Render the education section */}
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-3">
            <span
              className={`bg-red w-3 h-3 block bg-cv_color_red rotate-45 bg-[${primaryColor}]`}
            ></span>
            <p
              className={`text-cv_color_red text-[${primaryColor}] text-center md:text-start font-bold  !text-lg uppercase tracking-wide  `}
            >
              EDUCATION
            </p>
          </div>
          <Divider className="ml-6" />

          <div className="flex flex-col  text-base">
            {userProfile.education.map((education) => (
              <div className="grid grid-cols-12 gap-3">
                {/* time */}
                <div className="col-span-3 flex flex-row items-center gap-3 h-fit">
                  <span
                    className={`bg-red w-2 h-2 block bg-normal rotate-45 bg-[${primaryColor}]`}
                  ></span>
                  <div className="text-base  text-bold">
                    <span>{education.duration.start}</span> <span> - </span>
                    <span>{education.duration.end}</span>
                  </div>
                </div>

                <div className="col-span-9 flex flex-col gap-2">
                  <div className=" flex flex-col  flex-nowrap">
                    <div className="text-base  text-bold font-bold">
                      {education.institution}
                    </div>
                    <p className="text-bold text-base ">{education.degree}</p>
                  </div>
                  <div className=" text-base text-bold ">
                    {education.additionalDetail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Render the work experience section */}
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-3">
            <span
              className={`bg-red w-3 h-3 block bg-cv_color_red rotate-45 bg-[${primaryColor}]`}
            ></span>
            <p
              className={`text-cv_color_red text-[${primaryColor}] text-center md:text-start font-bold  !text-lg uppercase tracking-wide  `}
            >
              WORK EXPERIENCE
            </p>
          </div>
          <Divider className="ml-6" />

          <div className="flex flex-col  text-base">
            {userProfile.workExperience.map((experience) => (
              <div className="grid grid-cols-12 gap-3">
                {/* time */}
                <div className="col-span-3 flex flex-row items-center gap-3 h-fit">
                  <span
                    className={`bg-red w-2 h-2 block bg-normal rotate-45 bg-[${primaryColor}]`}
                  ></span>
                  <div className="text-base  text-bold">
                    <span>{experience.duration.start}</span> <span> - </span>
                    <span>{experience.duration.end}</span>
                  </div>
                </div>

                <div className="col-span-9 flex flex-col gap-2">
                  <div className=" flex flex-col  flex-nowrap">
                    <div className="text-base  text-bold font-bold">
                      {experience.position}
                    </div>
                    <div className="text-base  text-bold ">
                      {experience.company}
                    </div>
                  </div>{" "}
                  <div
                    className=" text-base text-bold "
                    dangerouslySetInnerHTML={{
                      __html: experience.responsibilities,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Render the skills section */}
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-3">
            <span
              className={`bg-red w-3 h-3 block bg-cv_color_red rotate-45 bg-[${primaryColor}]`}
            ></span>
            <p
              className={`text-cv_color_red text-[${primaryColor}] text-center md:text-start font-bold  !text-lg uppercase tracking-wide  `}
            >
              SKILLS
            </p>
          </div>
          <Divider className="ml-6" />

          <div className="flex flex-col text-base gap-3">
            {userProfile.skills.excellent && (
              <div className="grid grid-cols-12 gap-3">
                {/* excellent */}
                <div className="col-span-3 flex flex-row items-center gap-3 h-fit">
                  <span
                    className={`bg-red w-2 h-2 block bg-normal rotate-45 bg-[${primaryColor}]`}
                  ></span>
                  <div className="text-base  text-bold">Excellent</div>
                </div>

                <div className="col-span-9 flex flex-col gap-2">
                  <div className="flex flex-row gap-2 flex-wrap w-fit">
                    {userProfile.skills.excellent.map((skill, index) => (
                      <Button
                        buttonType="disabled"
                        className="border border-solid border-gray-300 !bg-white  px-2 w-fit block text-base "
                        textColor="rgb(107,114,128)"
                        key={index}
                      >
                        {skill}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {userProfile.skills.intermediate && (
              <div className="grid grid-cols-12 gap-3">
                {/* intermediate */}
                <div className="col-span-3 flex flex-row items-center gap-3 h-fit">
                  <span
                    className={`bg-red w-2 h-2 block bg-normal rotate-45 bg-[${primaryColor}]`}
                  ></span>
                  <div className="text-base  text-bold">Intermediate</div>
                </div>

                <div className="col-span-9 flex flex-col gap-2">
                  <div className="flex flex-row gap-2 flex-wrap w-fit">
                    {userProfile.skills.intermediate.map((skill, index) => (
                      <Button
                        buttonType="disabled"
                        className="border border-solid border-gray-300 !bg-white  px-2 w-fit block text-base "
                        textColor="rgb(107,114,128)"
                        key={index}
                      >
                        {skill}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}{" "}
            {userProfile.skills.beginner && (
              <div className="grid grid-cols-12 gap-3">
                {/* intermediate */}
                <div className="col-span-3 flex flex-row items-center gap-3 h-fit">
                  <span
                    className={`bg-red w-2 h-2 block bg-normal rotate-45 bg-[${primaryColor}]`}
                  ></span>
                  <div className="text-base  text-bold">Beginner</div>
                </div>

                <div className="col-span-9 flex flex-col gap-2">
                  <div className="flex flex-row gap-2 flex-wrap w-fit">
                    {userProfile.skills.beginner.map((skill, index) => (
                      <Button
                        buttonType="disabled"
                        className="border border-solid border-gray-300 !bg-white  px-2 w-fit block text-base "
                        textColor="rgb(107,114,128)"
                        key={index}
                      >
                        {skill}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Render the personal projects section */}
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-3">
            <span
              className={`bg-red w-3 h-3 block bg-cv_color_red rotate-45 bg-[${primaryColor}]`}
            ></span>
            <p
              className={`text-cv_color_red text-[${primaryColor}] text-center md:text-start font-bold  !text-lg uppercase tracking-wide  `}
            >
              PERSONAL PROJECTS
            </p>
          </div>
          <Divider className="ml-6" />

          <div className="flex flex-col  text-base">
            {userProfile.personalProjects.map((project) => (
              <div className="grid grid-cols-12 gap-3">
                {/* time */}
                <div className="col-span-3 flex flex-row items-center gap-3 h-fit">
                  <span
                    className={`bg-red w-2 h-2 block bg-normal rotate-45 bg-[${primaryColor}]`}
                  ></span>
                  <div className="text-base  text-bold">
                    <span>{project.duration.start}</span> <span> - </span>
                    <span>{project.duration.end}</span>
                  </div>
                </div>

                <div className="col-span-9 flex flex-col gap-2">
                  <div className=" flex flex-col  flex-nowrap">
                    <div className="text-base  text-bold font-bold">
                      {project.title}
                    </div>
                  </div>{" "}
                  <div
                    className=" text-base text-bold "
                    dangerouslySetInnerHTML={{
                      __html: project.description,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* Render the certificates section */}
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-3">
            <span
              className={`bg-red w-3 h-3 block bg-cv_color_red rotate-45 bg-[${primaryColor}]`}
            ></span>
            <p
              className={`text-cv_color_red text-[${primaryColor}] text-center md:text-start font-bold  !text-lg uppercase tracking-wide  `}
            >
              CERTIFICATES
            </p>
          </div>
          <Divider className="ml-6" />

          <div className="flex flex-col  text-base">
            {userProfile.certificates.map((certificate) => (
              <div className="grid grid-cols-12 gap-3">
                {/* time */}
                <div className="col-span-3 flex flex-row items-center gap-3 h-fit">
                  <span
                    className={`bg-red w-2 h-2 block bg-normal rotate-45 bg-[${primaryColor}]`}
                  ></span>
                  <div className="text-base  text-bold">
                    <span>{certificate.issueDate}</span>
                  </div>
                </div>

                <div className="col-span-9 flex flex-col gap-2">
                  <div className=" flex flex-col  flex-nowrap">
                    <div className="text-base  text-bold font-bold">
                      {certificate.title}
                    </div>
                  </div>{" "}
                  <div
                    className=" text-base text-bold "
                    dangerouslySetInnerHTML={{
                      __html: certificate.description,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* Render the awards section */}
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-3">
            <span
              className={`bg-red w-3 h-3 block bg-cv_color_red rotate-45 bg-[${primaryColor}]`}
            ></span>
            <p
              className={`text-cv_color_red text-[${primaryColor}] text-center md:text-start font-bold  !text-lg uppercase tracking-wide  `}
            >
              AWARDS
            </p>
          </div>
          <Divider className="ml-6" />

          <div className="flex flex-col  text-base">
            {userProfile.awards.map((award) => (
              <div className="grid grid-cols-12 gap-3">
                {/* time */}
                <div className="col-span-3 flex flex-row items-center gap-3 h-fit">
                  <span
                    className={`bg-red w-2 h-2 block bg-normal rotate-45 bg-[${primaryColor}]`}
                  ></span>
                  <div className="text-base  text-bold">
                    <span>{award.issueDate}</span>
                  </div>
                </div>

                <div className="col-span-9 flex flex-col gap-2">
                  <div className=" flex flex-col  flex-nowrap">
                    <div className="text-base  text-bold font-bold">
                      {award.title}
                    </div>
                  </div>{" "}
                  <div
                    className=" text-base text-bold "
                    dangerouslySetInnerHTML={{
                      __html: award.description,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
