import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
export interface UserState {
  name: string;
  token: string;
  token_type: string;
}

// Define the initial state using that type
const initialState: UserState = {
  name: "",
  token: "",
  token_type: "",
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    signIn: (state, action) => {
      console.log(action);
      return {
        ...state,
        name: action.payload.name,
        token: action.payload.token,
        token_type: action.payload.token_type,
      };
    },
  },
});

export const { signIn } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;
export const getToken = (state: RootState) => state.user.token;

export default userSlice.reducer;
