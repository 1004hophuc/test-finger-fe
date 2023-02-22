import "antd/dist/reset.css";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import AppContext from "./appContext";
import { Router } from "./routes";

function App() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState("fail");
  const [openRegisterForm, setOpenRegisterForm] = useState(false);
  const [role, setRole] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [error, setError] = useState("");

  return (
    <AppContext.Provider
      value={{
        login,
        setLogin,
        register,
        setRegister,
        openRegisterForm,
        setOpenRegisterForm,
        role,
        setRole,
        accessToken,
        setAccessToken,
        isLogin,
        setIsLogin,
        error,
        setError,
      }}
    >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
