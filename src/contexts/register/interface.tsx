export type Register = "success" | "fail";

export type RegisterContextType = {
  register: Register;
  setRegister: (register: Register) => void;
};
