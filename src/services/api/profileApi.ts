import axios from "axios";
import { BASE_URL_API } from "../../utils/constants";
import { loadLoginStatus } from "../../utils/loadersFunction";
import { ProfileUserInformationType } from "../../utils/type/profileType";

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
  const response = await axios.get(`${BASE_URL_API}/profile`, config);
  return response.data;
};

// Update user information api
export const updateUserInformationApi = async (
  data: ProfileUserInformationType,
  image: File | undefined
) => {
  const formDataToSend = new FormData();
  formDataToSend.append("name", data.name);
  formDataToSend.append("title", data.title);
  formDataToSend.append("email", data.email);
  formDataToSend.append("phone", data.phone);
  formDataToSend.append("birthday", data.birthday);
  data.gender && formDataToSend.append("gender", data.gender);
  data.location && formDataToSend.append("location", data.location);
  image && formDataToSend.append("image", image);
  const config = await generateConfig();
  const response = await axios.post(
    `${BASE_URL_API}/profile`,
    formDataToSend,
    config
  );
  return response.data;
};

// Get about me api
export const getAboutMeApi = async () => {
  const config = await generateConfig();
  const response = await axios.get(`${BASE_URL_API}/profiles/aboutMe`, config);
  return response.data;
};

// Update about me api
export const updateAboutMeApi = async (description: string) => {
  const config = await generateConfig();
  const response = await axios.post(
    `${BASE_URL_API}/profiles/aboutMe`,
    { description: description },
    config
  );
  return response.data;
};

// Get user education api
export const getEducationApi = async () => {
  const config = await generateConfig();
  const response = await axios.get(
    `${BASE_URL_API}/profiles/educations`,
    config
  );
  return response.data;
};

// Update user education api

// Get user experiences api
export const getWorkExperienceApi = async () => {
  const config = await generateConfig();
  const response = await axios.get(
    `${BASE_URL_API}/profiles/experiences`,
    config
  );
  return response.data;
};

// Get project api
export const getPersonalProjectApi = async () => {
  const config = await generateConfig();
  const response = await axios.get(`${BASE_URL_API}/profiles/projects`, config);
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
