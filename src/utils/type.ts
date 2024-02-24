import React from "react";

export type ApiLoginResponse = {
  status: number;
  data: {
    token?: string;
    message?: string;
    expires_in?: number;
    created_at?: number;
    user_id?: string;
  };
};

export type LoaderLoginResponse = {
  user_id: string;
  isLogin: boolean;
};

export type ProfileNavLinkItemsType = {
  label: string;
  to: string;
}[];

export type ProfileUserInformationType = {
  profileImage: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  birthday: string;
  gender?: string;
  location?: string;
  website?: string;
};

export type ProfileDataCategoryType = {
  title: string;
  id: string;
  description: string;
  icon: string;
  content?: React.ReactNode;
};

export type ComponentSelectionWithSearchType = {
  id: number;
  name: string;
};

export type ProfileJobLevelType = {
  id: string;
  text: string;
};

export type ToggleType = {
  name: string;
  isChecked: boolean;
};

export type Duration = {
  start: string;
  end: string;
};

export type Education = {
  degree: string;
  institution: string;
  duration: Duration;
  additionalDetail: string;
};

export type WorkExperience = {
  position: string;
  company: string;
  duration: Duration;
  responsibilities: string;
};

export type Skills = {
  excellent?: string[];
  intermediate?: string[];
  beginner?: string[];
};

export type PersonalProject = {
  title: string;
  duration: Duration;
  description: string;
};

export type Certificate = {
  title: string;
  provider: string;
  issueDate: string;
  description: string;
  certificateUrl: string;
};

export type Award = {
  title: string;
  provider: string;
  issueDate: string;
  description: string;
};

export type ProfileDataForCV = {
  aboutMe: {
    description: string;
  };
  education: Education[];
  workExperience: WorkExperience[];
  skills: Skills;
  personalProjects: PersonalProject[];
  certificates: Certificate[];
  awards: Award[];
};
