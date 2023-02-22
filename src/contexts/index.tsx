import React, { ReactElement, ReactNode } from "react";
import LoginProvider from "./login/loginProvide";
import RegisterProvider from "./register/registerProvide";

interface AppProviderProps {
  children: ReactElement;
}

export const AppProvider: React.FC<AppProviderProps> = (props) => {
  return (
    <RegisterProvider>
      <LoginProvider>{props.children}</LoginProvider>
    </RegisterProvider>
  );
};
