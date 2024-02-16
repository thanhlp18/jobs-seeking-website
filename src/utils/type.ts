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

export type ProfileContactInformationType = {
  email: string;
  phone: string;
  birthday: string;
  gender: string;
  location: string;
  website: string;
};

export type ProfileContractCategoryType = {
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
