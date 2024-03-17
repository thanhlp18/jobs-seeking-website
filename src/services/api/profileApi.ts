import axios from "axios";
import { BASE_URL_API } from "../../utils/constants";
import { loadLoginStatus } from "../../utils/loadersFunction";
import { ProfileUserInformationType } from "../../utils/type/profileType";

export const generateConfig = async () => {
  const token = await loadLoginStatus().then((res) => {
    return res.token;
  });
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

export const getUserInformationApi = async () => {
  const config = await generateConfig();
  const response = await axios.get(`${BASE_URL_API}/profile`, config);
  return response.data;
};

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

export const srcToFile = async (src: string, fileName: string) => {
  const response = await axios.get(src, {
    responseType: "blob",
  });
  const mimeType = response.headers["content-type"];
  return new File([response.data], fileName, { type: mimeType });
};
