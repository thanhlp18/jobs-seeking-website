import axios from "axios";
import { URL_API_LOGIN } from "../../utils/constants";
import { ApiLoginResponse } from "../../utils/type";
import { generateConfig } from "./profileApi";

export const signInApi = async (
  email: string,
  password: string
): Promise<ApiLoginResponse> => {
  return new Promise((resolve) => {
    fetch(`${URL_API_LOGIN}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status_code === 200) {
          resolve({
            status: 200,
            data: {
              name: res.user.name,
              token: res.access_token,
              token_type: res.token_type,
              success: true,
              message: "Login successfully",
            },
          });
        } else {
          resolve({
            status: res.status_code,
            data: {},
            errors: res.error,
          });
        }
      })
      .catch((err) => {
        console.log("err", err);
        resolve({
          status: 401,
          data: { success: false, message: "Invalid email or password" },
        });
      });
  });
};

export const signUpApi = async (
  email: string,
  password: string,
  name: string
): Promise<ApiLoginResponse> => {
  return new Promise((resolve) => {
    fetch(`${URL_API_LOGIN}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status_code === 200) {
          resolve({
            status: 200,
            data: {
              name: res.user.name,
              token: res.access_token,
              token_type: res.token_type,
              message: "Sign up successfully",
            },
          });
        } else {
          resolve({
            status: res.status_code,
            // the error response from back end are email, password, name
            errors: res.error,
            data: {},
          });
        }
      })
      .catch((err) => {
        console.log("err", err);
        resolve({
          status: err.status_code,
          data: { success: false, message: err },
        });
      });
  });
};

export const signOutApi = async () => {
  const config = await generateConfig(); // Assuming you have a function to generate the configuration
  try {
    const response = await axios.delete(`${URL_API_LOGIN}/logout`, config);
    return response.data;
  } catch (error) {
    console.error("Error logging out:", error);
    // You might want to handle error cases here
    throw error;
  }
};
