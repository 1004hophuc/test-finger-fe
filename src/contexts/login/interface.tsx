export type Login = boolean;

export type LoginContextType = {
  login: Login;
  setLogin: (login: Login) => void;
};
