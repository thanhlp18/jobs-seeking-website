// import EditIcon from "../components/EditIcon";

import { useState } from "react";
import {
  PROFILE_CONTACT_INFORMATION,
  PROFILE_EXAMPLE_DATA_FOR_CV,
} from "../../../utils/constants";
import {
  ProfileDataForCV,
  ProfileUserInformationType,
} from "../../../utils/type";
import AboutMeSection from "./components/AboutMeSection";
import CertificateSection from "./components/CertificateSection";
import EducationSection from "./components/EducationSection";
import NameSection from "./components/NameSection";
import PersonalDetailSection from "./components/PersonalDetailSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillSection from "./components/SkillSection";
import WorkExperienceSection from "./components/WorkExperienceSection";

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
      {/* information cv*/}
      <NameSection personalInformation={personalInformation} />
      {/* Main cv */}
      <div className="p-6 md:p-8 lg:p-12 grid grid-cols-12 bg-white">
        {/* Left section */}
        <div className="flex flex-col gap-5 col-span-4 pr-4 border-r border-solid border-gray-300">
          {/* Personal Detail */}
          <PersonalDetailSection
            personalInformation={personalInformation}
            templateColor={templateColor}
          />

          {/* About Detail */}
          <AboutMeSection
            aboutMe={userProfile.aboutMe}
            templateColor={templateColor}
          />

          {/* Education section */}
          <EducationSection
            education={userProfile.education}
            templateColor={templateColor}
          />

          {/* Render the skills section */}
          <SkillSection
            skills={userProfile.skills}
            templateColor={templateColor}
          />
        </div>

        <div className="pl-4 col-span-8 flex flex-col gap-5 ">
          {/* Render the work experience section */}
          <WorkExperienceSection workExperience={userProfile.workExperience} />

          {/* Projects section */}
          <ProjectsSection
            personalProjects={userProfile.personalProjects}
            templateColor={templateColor}
          />

          {/* Certificates section */}
          <CertificateSection
            certificates={userProfile.certificates}
            templateColor={templateColor}
          />
        </div>
      </div>
    </div>
  );
}
