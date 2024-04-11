import axios from "axios";
import {
  BASE_URL_API,
  URL_API_ABOUT_ME,
  URL_API_EDUCATION,
  URL_API_EXPERIENCE,
  URL_API_PERSONAL_PROJECT,
  URL_API_PROFILE,
  URL_API_SKILLS,
} from "../../utils/constants";
import { loadLoginStatus } from "../../utils/loadersFunction";
import {
  AwardType,
  CertificateType,
  EducationType,
  PersonalProjectType,
  SkillType,
  WorkExperienceType,
} from "../../utils/type";
import { UserInformationType } from "../../utils/type/profileType";
import { convertSkillsToSkillType } from "../../utils/function/convertSkillsToSkillType";

// Generate config to use in api
export const generateConfig = async () => {
  const token = await loadLoginStatus().then((res) => {
    return res.token;
  });
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

// Api use to remove image and use default no avatar image
export const srcToFile = async (src: string, fileName: string) => {
  const response = await axios.get(src, {
    responseType: "blob",
  });
  const mimeType = response.headers["content-type"];
  return new File([response.data], fileName, { type: mimeType });
};

// Get user information api
export const getUserInformationApi = async () => {
  const config = await generateConfig();
  const response = await axios.get(`${URL_API_PROFILE}`, config);
  return response.data;
};

// Update user information api
export const updateUserInformationApi = async (
  data: UserInformationType
  // image: File | undefined
) => {
  // const formDataToSend = new FormData();
  // formDataToSend.append("name", data.name);
  // formDataToSend.append("title", data.title);
  // formDataToSend.append("email", data.email);
  // formDataToSend.append("phone", data.phone);
  // formDataToSend.append("birthday", data.birthday);
  // data.gender && formDataToSend.append("gender", data.gender);
  // data.location && formDataToSend.append("location", data.location);
  // image && formDataToSend.append("image", image);

  const config = await generateConfig();
  const response = await axios.put(`${URL_API_PROFILE}`, data, config);
  return response.data;
};

// Get about me api
export const getAboutMeApi = async () => {
  const config = await generateConfig();
  const response = await axios.get(`${URL_API_ABOUT_ME}`, config);
  return response.data;
};

// Update about me api
export const updateAboutMeApi = async (description: string, id: number) => {
  const config = await generateConfig();
  const response = await axios.put(
    `${URL_API_ABOUT_ME}/${id}`,
    { description: description },
    config
  );
  return response.data;
};

// Get user education api
export const getEducationApi = async () => {
  const config = await generateConfig();
  const response = await axios.get(`${URL_API_EDUCATION}`, config);
  return response.data;
};

// Add user education api
export const addEducationApi = async (education: EducationType) => {
  const config = await generateConfig();
  const response = await axios.post(
    `${URL_API_EDUCATION}`,
    {
      institution: education.institution,
      degree: education.degree,
      start_date: education.start_date,
      end_date: education.end_date,
      additionalDetail: education.additionalDetail || "",
    },
    config
  );
  return response.data;
};

// Update user education api
export const updateEducationApi = async (education: EducationType) => {
  console.log(education);
  const config = await generateConfig();
  const response = await axios.put(
    `${URL_API_EDUCATION}/${education.id}`,
    {
      institution: education.institution,
      degree: education.degree,
      start_date: education.start_date,
      end_date: education.end_date,
      additionalDetail: education.additionalDetail || "",
    },
    config
  );
  return response.data;
};

// Delete user education api
export const deleteEducationApi = async (educationId: string) => {
  const config = await generateConfig();
  const response = await axios.delete(
    `${BASE_URL_API}/profiles/educations/${educationId}`,
    config
  );
  return response.data;
};

// Get user experiences api
export const getWorkExperienceApi = async () => {
  const config = await generateConfig();
  const response = await axios.get(`${URL_API_EXPERIENCE}`, config);
  return response.data;
};

// add user experiences api
export const addWorkExperienceApi = async (
  workExperience: WorkExperienceType
) => {
  const config = await generateConfig();
  const response = await axios.post(
    `${URL_API_EXPERIENCE}`,
    workExperience,
    config
  );
  return response.data;
};

// Update user experiences api
export const updateWorkExperienceApi = async (
  workExperience: WorkExperienceType
) => {
  const config = await generateConfig();
  const response = await axios.put(
    `${URL_API_EXPERIENCE}/${workExperience.id}`,
    workExperience,
    config
  );
  return response.data;
};

// Get user skills api
export const getSkillApi = async () => {
  const config = await generateConfig();
  const response = await axios.get(`${URL_API_SKILLS}`, config);
  return response.data;
};

// Get project api
export const getPersonalProjectApi = async () => {
  const config = await generateConfig();
  const response = await axios.get(`${URL_API_PERSONAL_PROJECT}`, config);
  return response.data;
};

// Get certificate api
export const getCertificateApi = async () => {
  const config = await generateConfig();
  const response = await axios.get(
    `${BASE_URL_API}/profiles/certificates`,
    config
  );
  return response.data;
};

// Get award api
export const getAwardApi = async () => {
  const config = await generateConfig();
  const response = await axios.get(`${BASE_URL_API}/profiles/awards`, config);
  return response.data;
};

// Get user profile api
export const getUserProfileApi = async (
  aboutMePromise: Promise<{ data: { description: string }[] }>,
  educationPromise: Promise<{ data: EducationType }>,
  workExperiencePromise: Promise<{ data: WorkExperienceType }>,
  personalProjectsPromise: Promise<{ data: PersonalProjectType }>,
  certificatePromise: Promise<{ data: CertificateType }>,
  awardPromise: Promise<{ data: AwardType }>,
  skillsPromise: Promise<{ data: SkillType }>
) => {
  try {
    const [
      aboutMeRes,
      educationRes,
      workExperienceRes,
      personalProjectRes,
      certificateRes,
      awardRes,
      skillsRes,
    ] = await Promise.all([
      aboutMePromise,
      educationPromise,
      workExperiencePromise,
      personalProjectsPromise,
      certificatePromise,
      awardPromise,
      skillsPromise,
    ]);
    const aboutMeData = aboutMeRes.data[0];
    console.log(aboutMeData);
    const educationData = educationRes.data;
    const workExperienceData = workExperienceRes.data;
    const personalProjectData = personalProjectRes.data;
    const certificateResData = certificateRes.data;
    const awardData = awardRes.data;
    const skillsData = skillsRes.data;

    return {
      aboutMe: aboutMeData,
      education: educationData,
      workExperience: workExperienceData,
      personalProjects: personalProjectData,
      certificates: certificateResData,
      awards: awardData,
      skills: convertSkillsToSkillType(skillsData),
    };
  } catch (error) {
    console.error("Error fetching user profile data:", error);
    // Handle error appropriately, e.g., show a message to the user
  }
};
