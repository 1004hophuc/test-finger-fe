import React from "react";

interface appContext {
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  register: string;
  setRegister: React.Dispatch<React.SetStateAction<string>>;
  openRegisterForm: boolean;
  setOpenRegisterForm: React.Dispatch<React.SetStateAction<boolean>>;
  role: string;
  setRole: React.Dispatch<React.SetStateAction<string>>;
  accessToken: string;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = React.createContext({} as appContext);

export { AppContext as default };
