import * as React from "react";
import { Login, LoginContextType } from "./interface";

export const LoginContext = React.createContext<LoginContextType>({
  login: false,
  setLogin: () => {},
});

export type LoginProviderType = {
  children: React.ReactNode;
};

const LoginProvider: React.FC<LoginProviderType> = (props) => {
  const [login, setLogin] = React.useState<Login>(false);
  return (
    <LoginContext.Provider value={{ login: login, setLogin: setLogin }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
