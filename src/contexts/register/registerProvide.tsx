import { createContext } from "react";

import * as React from "react";
import { Register, RegisterContextType } from "./interface";

export const RegisterContext = React.createContext<RegisterContextType | null>(
  null
);
export type RegisterProviderProps = {
  children: React.ReactNode;
};

const RegisterProvider: React.FC<RegisterProviderProps> = (props) => {
  const [register, setRegister] = React.useState<Register>("fail");
  return (
    <RegisterContext.Provider
      value={{ register: register, setRegister: setRegister }}
    >
      {props.children}
    </RegisterContext.Provider>
  );
};

export default RegisterProvider;
