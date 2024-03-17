import { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";
import CardWithTitle from "../../ui/Card/CardWithTitle";
import ProfileCV from "../../ui/Profile/ProfileCV";
import {
  // PROFILE_CONTACT_INFORMATION,
  PROFILE_DATA_CATEGORY,
  PROFILE_EXAMPLE_DATA_FOR_CV,
} from "../../utils/constants";
import { ProfileDataForCV } from "../../utils/type";
import ProfileQuality from "./components/ProfileQuality";
import UserInformation from "./components/UserInformation";

export default function Profile() {
  const [ProfileForCV, setProfileForCV] = useState<ProfileDataForCV>({
    aboutMe: "",

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
    // setUserData(PROFILE_CONTACT_INFORMATION);
    setProfileForCV(PROFILE_EXAMPLE_DATA_FOR_CV);
    PROFILE_DATA_CATEGORY.map((category) => {
      console.log(PROFILE_EXAMPLE_DATA_FOR_CV.aboutMe.length);
      let profileCTATemp: string[] = [];
      switch (category.id) {
        case "about-me": {
          PROFILE_EXAMPLE_DATA_FOR_CV.aboutMe.length === 0 ??
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
        <ProfileQuality profileCTA={profileCTA} />
        <div className="md:col-span-7 col-span-10 gap-6 grid">
          {/* <Card className=" bg-white relative">
            <div className="flex gap-6 flex-col md:flex-row items-center md:items-start">
              <div>
                <img
                  src={userData.profileImage}
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
          </Card> */}
          <UserInformation />
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
