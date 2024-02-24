import {
  faEnvelope,
  faGift,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Title from "../components/Title";
import {
  PROFILE_CONTACT_INFORMATION,
  PROFILE_EXAMPLE_DATA_FOR_CV,
} from "../utils/constants";
import { ProfileDataForCV, ProfileUserInformationType } from "../utils/type";
import Button from "../components/Button";
// import EditIcon from "../components/EditIcon";

type props = {
  className?: string;
};

export default function CVMinimal({ className }: props) {
  const [userProfile] = React.useState<ProfileDataForCV>(
    PROFILE_EXAMPLE_DATA_FOR_CV
  );
  const [personalInformation] = React.useState<ProfileUserInformationType>(
    PROFILE_CONTACT_INFORMATION
  );
  return (
    <div className={`${className} bg-white rounded-md overflow-hidden`}>
      {/* Render the personal information section */}
      <div className=" bg-red-500 p-6 relative">
        <div className="flex gap-6 flex-col md:flex-row items-center md:items-start">
          <div>
            <img
              src={personalInformation.profileImage}
              alt="profile-avatar"
              height={140}
              width={140}
            />
          </div>
          <div className="gap-2 flex flex-col w-full">
            <div>
              <Title type="h2" className="text-center md:text-start text-white">
                {personalInformation.name}
              </Title>
              <Title
                type="h4"
                className="text-white text-center md:text-start font-normal"
              >
                {personalInformation.title}
              </Title>
            </div>

            <div className="sm:grid-cols-2 sm:grid-rows-2 grid grid-cols-1  gap-y-2 ">
              <div className="flex flex-row gap-2 flex-nowrap">
                <span className="text-sm text-white items-center">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="text-sm text-white line-clamp-1">
                  {personalInformation.email}
                </span>
              </div>
              <div className="flex flex-row gap-2 flex-nowrap items-center">
                <span className="text-sm text-white">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span className="text-sm text-white line-clamp-1">
                  {personalInformation.phone}
                </span>
              </div>
              <div className="flex flex-row gap-2 flex-nowrap items-center">
                <span className="text-sm text-white">
                  <FontAwesomeIcon icon={faGift} />
                </span>
                <span className="text-sm text-white line-clamp-1">
                  {personalInformation.birthday}
                </span>
              </div>

              <div className="flex flex-row gap-2 flex-nowrap items-center">
                <span className="text-sm text-white">
                  <FontAwesomeIcon icon={faLocation} />
                </span>
                {personalInformation.location && (
                  <span className="text-sm text-white line-clamp-1">
                    {personalInformation.location}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* <EditIcon className="absolute right-4 top-4 text-sm" /> */}
      </div>
      <div className="p-6">
        {/* Render the aboutMe section */}
        <div className="grid grid-cols-12">
          <p className="text-bold text-center md:text-start font-bold col-span-2 !text-base">
            About Me
          </p>

          <p className="text-bold col-span-10 text-base">
            {userProfile.aboutMe.description}
          </p>
        </div>

        {/* Render the education section */}
        <div className="grid grid-cols-12">
          <p className="text-bold text-center md:text-start font-bold col-span-2 ">
            Education
          </p>

          <div className="text-bold col-span-10 text-base">
            {userProfile.education.map((education) => (
              <div className="flex flex-col gap-2 flex-nowrap">
                <div className="flex flex-col  flex-nowrap">
                  <div className="text-base  text-bold font-medium">
                    {education.institution}
                  </div>
                  <div className="flex flex-row gap-2  flex-nowrap">
                    <div className="text-base  text-bold">
                      <span>{education.duration.start}</span> -{" "}
                      <span>{education.duration.end}</span>
                    </div>

                    <span>|</span>
                    <p className="text-bold text-base ">{education.degree}</p>
                  </div>
                </div>
                <div className=" text-base text-bold ">
                  {education.additionalDetail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Render the work experience section */}
        <div className="grid grid-cols-12">
          <p className="text-bold text-center md:text-start font-bold col-span-2 !text-base">
            Work Experience
          </p>
          <div className="text-bold col-span-10 text-base">
            {userProfile.workExperience.map((experience) => (
              <div className="flex flex-col gap-2 flex-nowrap">
                <div className="flex flex-col  flex-nowrap">
                  <div className="text-base  text-bold font-medium">
                    {experience.duration.start} - {experience.duration.end}
                  </div>
                  <div className="flex flex-row gap-2  flex-nowrap">
                    <div className="text-base  text-bold">
                      {experience.position}
                    </div>

                    <span>|</span>
                    <p className="text-bold text-base ">{experience.company}</p>
                  </div>
                </div>

                <div
                  className=" text-base text-bold "
                  dangerouslySetInnerHTML={{
                    __html: experience.responsibilities,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Render the skills section */}
        <div className="grid grid-cols-12">
          <p className="text-bold text-center md:text-start font-bold col-span-2 !text-base">
            Skills
          </p>
          <div className="flex flex-col gap-4 col-span-10">
            {userProfile.skills.excellent && (
              <div className="flex flex-row items-center gap-3">
                <span className="text-base font-bold text-bold">Excellent</span>
                <div className="flex flex-row gap-2 flex-wrap w-fit">
                  {userProfile.skills.excellent.map((skill, index) => (
                    <Button
                      buttonType="disabled"
                      className="rounded-lg  px-2 w-fit block text-base "
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
              <div className="flex flex-row items-center gap-3 ">
                <span className="text-base font-bold text-bold">
                  Intermediate
                </span>

                <div className="flex flex-row gap-3 w-full flex-wrap">
                  {userProfile.skills.intermediate.map((skill, index) => (
                    <Button
                      buttonType="disabled"
                      className="rounded-lg px-2 block text-base bg-gray-100 flex-wrap "
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
              <div className="flex flex-row items-center gap-3 ">
                <span className="text-base font-bold text-bold">Beginner</span>

                <div className="flex flex-row gap-3 w-full flex-wrap">
                  {userProfile.skills.beginner.map((skill, index) => (
                    <Button
                      buttonType="disabled"
                      className="rounded-lg px-2 block text-base bg-gray-100 flex-wrap "
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

        {/* Render the personal projects section */}
        <div className="grid grid-cols-12">
          <p className="text-bold text-center md:text-start font-bold col-span-2 !text-base">
            Personal Projects
          </p>
          <div className="text-bold col-span-10 text-base">
            {userProfile.personalProjects.map((project) => (
              <div className="flex flex-col gap-2 flex-nowrap">
                <div className="flex flex-col  flex-nowrap">
                  <div className="text-base  text-bold font-medium">
                    {project.duration.start} - {project.duration.end}
                  </div>
                  <div className="flex flex-row gap-2  flex-nowrap">
                    <div className="text-base  text-bold font-medium">
                      {project.title}
                    </div>

                    <span>|</span>
                    <p className="text-bold text-base ">
                      {project.duration.start} - {project.duration.end}
                    </p>
                  </div>
                </div>

                <div
                  className=" text-base text-bold "
                  dangerouslySetInnerHTML={{
                    __html: project.description,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Render the certificates section */}
        <div className="grid grid-cols-12">
          <p className="text-bold text-center md:text-start font-bold col-span-2 ">
            Certificates
          </p>

          <div className="text-bold col-span-10 text-base">
            {userProfile.certificates.map((certificate) => (
              <div className="flex flex-col gap-2 flex-nowrap">
                <div className="flex flex-col  flex-nowrap">
                  <div className="text-base  text-bold font-medium">
                    {certificate.title}
                  </div>
                  <div className="flex flex-row gap-2  flex-nowrap">
                    <div className="text-base  text-bold">
                      <span>{certificate.issueDate}</span>
                    </div>

                    <span>|</span>
                    <p className="text-bold text-base ">
                      {certificate.provider}
                    </p>
                  </div>
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

        {/* Render the awards section */}
        <div className="grid grid-cols-12">
          <p className="text-bold text-center md:text-start font-bold col-span-2 ">
            Awards
          </p>

          <div className="text-bold col-span-10 text-base">
            {userProfile.awards.map((award) => (
              <div className="flex flex-col gap-2 flex-nowrap">
                <div className="flex flex-col  flex-nowrap">
                  <div className="text-base  text-bold font-medium">
                    {award.title}
                  </div>
                  <div className="flex flex-row gap-2  flex-nowrap">
                    <div className="text-base  text-bold">
                      <span>{award.issueDate}</span>
                    </div>

                    <span>|</span>
                    <p className="text-bold text-base ">{award.provider}</p>
                  </div>
                </div>
                <div
                  className=" text-base text-bold "
                  dangerouslySetInnerHTML={{
                    __html: award.description,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
