// import EditIcon from "../components/EditIcon";

import { useState } from "react";
import Title from "../components/Title";
import {
  PROFILE_CONTACT_INFORMATION,
  PROFILE_EXAMPLE_DATA_FOR_CV,
} from "../utils/constants";
import { ProfileDataForCV, ProfileUserInformationType } from "../utils/type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGift,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";

type props = {
  className?: string;
};

export default function CVMinimal({ className }: props) {
  const [userProfile] = useState<ProfileDataForCV>(PROFILE_EXAMPLE_DATA_FOR_CV);
  const [personalInformation] = useState<ProfileUserInformationType>(
    PROFILE_CONTACT_INFORMATION
  );
  const [templateColor] = useState<string>("#ed1b2f");
  return (
    <div className={`${className} rounded-lg overflow-hidden w-full  bg-white`}>
      {/* Header cv*/}
      <div className=" relative flex flex-row flex-nowrap  justify-between px-6 md:px-8 lg:px-12 pt-6 md:pt-8 lg:pt-12 items-center w-full after:w-[calc(100%+20rem)] after:h-48 after:bg-gray-200 after:absolute after:-ml-6 after:-rotate-3 after:-translate-y-12 lg:after:-translate-y-16 after:-translate-x-8 after:z-0  ">
        <div className="z-10">
          <Title type="h1" className="tracking-widest	font-semibold">
            {personalInformation.name}
          </Title>
          <Title type="h4" className="font-normal tracking-widest	">
            {personalInformation.title}
          </Title>
        </div>
        <div className="z-10">
          <img
            src={personalInformation.profileImage}
            alt="profile"
            className="rounded-full w-32 h-32 object-cover object-center"
          />
        </div>
      </div>
      {/* Main cv */}
      <div className="p-6 md:p-8 lg:p-12 grid grid-cols-12 bg-white">
        {/* Left section */}
        <div className="flex flex-col gap-5 col-span-4 pr-4 border-r border-solid border-gray-300">
          {/* Personal Detail */}
          <div className="flex flex-col gap-1.5">
            <Title type="h6" className={`font-medium text-[${templateColor}]`}>
              PERSONAL DETAILS
            </Title>
            <div className="flex flex-col flex-nowrap gap-1 ">
              <div className="flex flex-row gap-2 flex-nowrap">
                <span className="text-base  items-center">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="text-base  line-clamp-1">
                  {personalInformation.email}
                </span>
              </div>
              <div className="flex flex-row gap-2 flex-nowrap items-center">
                <span className="text-base ">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span className="text-base  line-clamp-1">
                  {personalInformation.phone}
                </span>
              </div>
              <div className="flex flex-row gap-2 flex-nowrap items-center">
                <span className="text-base ">
                  <FontAwesomeIcon icon={faGift} />
                </span>
                <span className="text-base  line-clamp-1">
                  {personalInformation.birthday}
                </span>
              </div>

              <div className="flex flex-row gap-2 flex-nowrap items-center">
                <span className="text-base ">
                  <FontAwesomeIcon icon={faLocation} />
                </span>
                {personalInformation.location && (
                  <span className="text-base  line-clamp-1">
                    {personalInformation.location}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Personal Detail */}
          <div className="flex flex-col gap-1.5">
            <Title type="h6" className={`font-medium text-[${templateColor}]`}>
              ABOUT ME
            </Title>
            <div>
              <p className="text-base">{userProfile.aboutMe.description}</p>
            </div>
          </div>

          {/* Education section */}
          <div className=" col-span-10 text-base gap-1.5">
            <Title type="h6" className={`font-medium text-[${templateColor}]`}>
              EDUCATION
            </Title>
            {userProfile.education.map((education) => (
              <div className="flex flex-col gap-2 flex-nowrap">
                <div className="flex flex-col  flex-nowrap">
                  <div className="text-base  text-bold font-medium">
                    {education.institution}
                  </div>
                  <p className="text-bold text-base ">{education.degree}</p>
                  <div className="text-base  text-bold">
                    <span>{education.duration.start}</span> <span> - </span>
                    <span>{education.duration.end}</span>
                  </div>
                </div>
                <div className=" text-base text-bold ">
                  {education.additionalDetail}
                </div>
              </div>
            ))}
          </div>

          {/* Render the skills section */}
          <div className=" col-span-10 text-base gap-1.5">
            <Title type="h6" className={`font-medium text-[${templateColor}]`}>
              EDUCATION
            </Title>
            <div className="flex flex-col gap-2 col-span-10 ">
              {userProfile.skills.excellent && (
                <div className="flex flex-col gap-1">
                  <span className="text-base font-bold text-bold">
                    Excellent
                  </span>
                  <div className="flex flex-row gap-2 flex-wrap w-fit">
                    {userProfile.skills.excellent.map((skill, index) => (
                      <Button
                        buttonType="disabled"
                        className="rounded-lg  px-2 w-fit block text-sm py-1 font-normal "
                        textColor="rgb(107,114,128)"
                        key={index}
                      >
                        {skill}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              {userProfile.skills.intermediate && (
                <div className="flex flex-col  gap-1 ">
                  <span className="text-base font-bold text-bold">
                    Intermediate
                  </span>

                  <div className="flex flex-row gap-3 w-full flex-wrap">
                    {userProfile.skills.intermediate.map((skill, index) => (
                      <Button
                        buttonType="disabled"
                        className="rounded-lg  px-2 w-fit block text-sm py-1 font-normal"
                        textColor="rgb(107,114,128)"
                        key={index}
                      >
                        {skill}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              {userProfile.skills.beginner && (
                <div className="flex flex-col  gap-1 ">
                  <span className="text-base font-bold text-bold">
                    Beginner
                  </span>

                  <div className="flex flex-row gap-3 w-full flex-wrap">
                    {userProfile.skills.beginner.map((skill, index) => (
                      <Button
                        buttonType="disabled"
                        className="rounded-lg  px-2 w-fit block text-sm py-1 font-normal"
                        textColor="rgb(107,114,128)"
                        key={index}
                      >
                        {skill}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="pl-4 col-span-8 flex flex-col gap-5 ">
          {/* Render the work experience section */}
          <div className="flex flex-col gap-1.5">
            <Title type="h6" className={`font-medium text-[${templateColor}]`}>
              ABOUT ME
            </Title>
            <div className="text-bold col-span-10 text-base">
              {userProfile.workExperience.map((experience, index) => (
                <div
                  className="flex flex-col gap-2 flex-nowrap"
                  key={`work-exp-${index}`}
                >
                  <div className="flex flex-col  flex-nowrap">
                    <div className="flex flex-row gap-2  flex-nowrap justify-between">
                      <div className="text-base  text-bold font-bold">
                        {experience.position}
                      </div>
                      <div className="text-base  text-bold ">
                        {experience.duration.start} - {experience.duration.end}
                      </div>
                    </div>
                    <p className="text-bold text-base font-bold">
                      {experience.company}
                    </p>
                  </div>

                  <div
                    className=" text-base text-bold ml-2 "
                    dangerouslySetInnerHTML={{
                      __html: experience.responsibilities,
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects section */}
          <div className="flex flex-col gap-1.5">
            <Title type="h6" className={`font-medium text-[${templateColor}]`}>
              PERSONAL PROJECT
            </Title>
            <div className="text-bold flex flex-col gap-1 text-base ">
              {userProfile.personalProjects.map((project, index) => (
                <div
                  className="flex flex-col  flex-nowrap"
                  key={`project-${index}`}
                >
                  <div className="flex flex-row flex-nowrap justify-between">
                    <div className="text-base  text-bold font-bold">
                      {project.title}
                    </div>

                    <p className="text-bold text-base text-right">
                      {project.duration.start} - {project.duration.end}
                    </p>
                  </div>

                  <div
                    className=" text-base text-bold ml-2"
                    dangerouslySetInnerHTML={{
                      __html: project.description,
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates section */}
          <div className="flex flex-col gap-1.5">
            <Title type="h6" className={`font-medium text-[${templateColor}]`}>
              ABOUT ME
            </Title>

            <div className="text-bold flex flex-col gap-1 text-base">
              {userProfile.certificates.map((certificate) => (
                <div className="flex flex-col gap-1 flex-nowrap">
                  <div className="flex flex-col  flex-nowrap">
                    <div className="flex flex-row gap-1 justify-between  flex-nowrap">
                      <div className="text-base  text-bold font-bold">
                        {certificate.title}
                      </div>
                      <div className="text-base  text-bold">
                        <span>{certificate.issueDate}</span>
                      </div>
                    </div>
                    <p className="text-bold text-base font-medium">
                      {certificate.provider}
                    </p>
                  </div>
                  <div>
                    Certificate URL:{" "}
                    <a
                      href={certificate.certificateUrl}
                      target="_blank"
                      className="underline"
                    >
                      {certificate.certificateUrl}
                    </a>
                  </div>
                  <div
                    className=" text-base text-bold "
                    dangerouslySetInnerHTML={{
                      __html: certificate.description,
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
