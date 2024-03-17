import { ApiLoginResponse } from "../../utils/type";
import { BASE_URL_API } from "../../utils/constants";

export const signInApi = async (
  email: string,
  password: string
): Promise<ApiLoginResponse> => {
  return new Promise((resolve) => {
    fetch(`${BASE_URL_API}/login`, {
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
              name: res.name,
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
    fetch(`${BASE_URL_API}/register`, {
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
