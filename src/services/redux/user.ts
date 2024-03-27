import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { ProfileDataForCV } from "../../utils/type";
import { UserInformationType } from "../../utils/type/profileType";

// Define a type for the slice state
export interface UserState {
  name: string;
  token: string;
  token_type: string;
  userProfile: ProfileDataForCV;
  userInformation: UserInformationType;
}

// Define the initial state using that type
const initialState: UserState = {
  name: "",
  token: "",
  token_type: "",
  userInformation: {
    image_url: "",
    name: "",
    title: "",
    email: "",
    phone: "",
    birthday: "",
    gender: "",
    location: "",
  },
  userProfile: {
    aboutMe: { description: "" },
    education: [],
    workExperience: [],
    skills: {},
    personalProjects: [],
    certificates: [],
    awards: [],
  },
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    signIn: (state, action) => {
      return {
        ...state,
        name: action.payload.name,
        token: action.payload.token,
        token_type: action.payload.token_type,
      };
    },

    updateUserInformation: (state, action) => {
      return {
        ...state,
        userInformation: {
          ...state.userInformation,
          ...action.payload,
        },
      };
    },
    updateUserProfile: (state, action) => {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          ...action.payload,
        },
      };
    },
    addEducation: (state, action) => {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          education: [...state.userProfile.education, action.payload],
        },
      };
    },
    updateEducation: (state, action) => {
      const { education } = action.payload;
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          education: [
            ...state.userProfile.education.filter(
              (ele) => ele.id !== education.id
            ),
            education,
          ],
        },
      };
    },
    deleteEducation: (state, action) => {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          education: state.userProfile.education.filter(
            (ele) => ele.id !== action.payload
          ),
        },
      };
    },
  },
});

export const {
  signIn,
  updateUserProfile,
  updateUserInformation,
  updateEducation,
  deleteEducation,
  addEducation,
} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getUserAuthentication = (state: RootState) => state.user;
export const getUserProfile = (state: RootState) => state.user.userProfile;
export const getUserInformation = (state: RootState) =>
  state.user.userInformation;
export const getUserEducation = (state: RootState) =>
  state.user.userProfile.education;
export const getToken = (state: RootState) => state.user.token;

export default userSlice.reducer;
