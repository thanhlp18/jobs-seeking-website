import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Wrapper from "../../components/Wrapper";
import {
  getAboutMeApi,
  getAwardApi,
  getCertificateApi,
  getEducationApi,
  getPersonalProjectApi,
  getWorkExperienceApi,
} from "../../services/api/profileApi";
import { ProfileDataForCV } from "../../utils/type";
import AboutMe from "./components/AboutMe";
import { Education } from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import ProfileQuality from "./components/ProfileQuality";
import UserInformation from "./components/UserInformation";
import Skill from "./components/Skill";
import PersonalProject from "./components/PersonalProject";
import Certificate from "./components/Certificate";
import Award from "./components/Award";

const initialProfileForCV: ProfileDataForCV = {
  aboutMe: { description: "" },
  education: [],
  workExperience: [],
  skills: {},
  personalProjects: [],
  certificates: [],
  awards: [],
};

export default function Profile() {
  const [profileForCV, setProfileForCV] =
    useState<ProfileDataForCV>(initialProfileForCV);
  const [profileCTA, setProfileCTA] = useState<string[]>([]);

  // Call api to get user profile
  useEffect(() => {
    const aboutMePromise = getAboutMeApi().catch((err) =>
      toast.error("Error when get 'about me' data: " + err)
    );
    const educationPromise = getEducationApi().catch((err) =>
      toast.error("Error when get 'education' data: " + err)
    );
    const workExperiencePromise = getWorkExperienceApi().catch((err) =>
      toast.error("Error when get 'work experience' data: " + err)
    );
    const personalProjectsPromise = getPersonalProjectApi().catch((err) =>
      toast.error("Error when get 'personal projects' data: " + err)
    );
    const certificatePromise = getCertificateApi().catch((err) =>
      toast.error("Error when get 'certificates' data: " + err)
    );
    const awardPromise = getAwardApi().catch((err) =>
      toast.error("Error when get 'awards' data: " + err)
    );

    Promise.all([
      aboutMePromise,
      educationPromise,
      workExperiencePromise,
      personalProjectsPromise,
      certificatePromise,
      awardPromise,
    ]).then(
      ([
        aboutMeRes,
        educationRes,
        workExperienceRes,
        personalProjectRes,
        certificateRes,
        awardRes,
      ]) => {
        const aboutMeData = aboutMeRes.data[1];
        const educationData = educationRes.data;
        const workExperienceData = workExperienceRes.data;
        const personalProjectData = personalProjectRes.data;
        const certificateResData = certificateRes.data;
        const awardData = awardRes.data;
        setProfileForCV({
          ...profileForCV,
          aboutMe: aboutMeData,
          education: educationData,
          workExperience: workExperienceData,
          personalProjects: personalProjectData,
          certificates: certificateResData,
          awards: awardData,
        });
      }
    );
  }, []);
  useEffect(() => {
    const tempCTA = [];
    if (profileForCV.aboutMe.description.length === 0)
      tempCTA.push("Add About Me");
    if (profileForCV.education.length === 0) tempCTA.push("Add Education");
    if (profileForCV.workExperience.length === 0)
      tempCTA.push("Add Work Experience");

    if (
      !(
        profileForCV.skills.beginner &&
        profileForCV.skills.intermediate &&
        profileForCV.skills.excellent
      )
    )
      tempCTA.push("Add Skills");
    if (profileForCV.personalProjects.length === 0)
      tempCTA.push("Add Personal Projects");
    if (profileForCV.certificates.length === 0)
      tempCTA.push("Add Certificates");
    if (profileForCV.awards.length === 0) tempCTA.push("Add Awards");

    setProfileCTA(tempCTA);
  }, [profileForCV]);

  return (
    <Wrapper className="">
      <div className="grid grid-cols-10 gap-6">
        <ProfileQuality profileCTA={profileCTA} />
        <div className="md:col-span-7 col-span-10 gap-6 grid">
          <UserInformation />
          {/* {PROFILE_DATA_CATEGORY.map((category, index) => {
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
                    ProfileData={profileForCV}
                    sectionKey={category.id}
                  />
                </CardWithTitle>
              )
            );
          })} */}
          <AboutMe aboutMeDescription={profileForCV.aboutMe.description} />
          <Education educationList={profileForCV.education} />
          <WorkExperience workExperienceList={profileForCV.workExperience} />
          <Skill skills={profileForCV.skills} />
          <PersonalProject
            personalProjectList={profileForCV.personalProjects}
          />
          <Certificate certificateList={profileForCV.certificates} />
          <Award awardList={profileForCV.awards} />
        </div>
      </div>
    </Wrapper>
  );
}
