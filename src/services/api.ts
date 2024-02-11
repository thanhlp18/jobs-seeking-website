import { ApiLoginResponse } from "../utils/type";

export const loginApi = async (
  email: string,
  password: string
): Promise<ApiLoginResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let res; // Declare the 'res' variable
      if (email === "admin" && password === "admin") {
        console.log(email, password, "res");
        res = {
          status: 200,
          data: {
            token: "faf234rfasfd",
            expires_in: 36000,
            created_at: new Date().getTime(),
            user_id: "1234567890",
          },
        };
      } else {
        res = {
          status: 401,
          data: {
            message: "Invalid email or password",
          },
        };
      }
      resolve(res); // Resolve
    }, 1000);
  });
};
