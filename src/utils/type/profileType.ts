// General type
export type ProfileUserInformationType = {
  image_url?: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  birthday: string;
  gender?: string;
  location?: string;
  website?: string;
};

// API type
export type ApiProfileUserInformationResponseType = {
  success: boolean;
  message: string;
  data: ProfileUserInformationType[];
};
