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
