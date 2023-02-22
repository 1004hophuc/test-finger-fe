import React, { useContext, useEffect } from "react";
import appContext from "../../appContext";

import { LoginForm } from "../loginRegister/login";
import "./homeLoginRegister.css";
import RegisterForm from "../loginRegister/register";

function HomeLoginRegister() {
  const { openRegisterForm } = useContext(appContext);

  return (
    <div className="App">
      {openRegisterForm && <RegisterForm />}
      <header className="App-header">
        <LoginForm />
      </header>
    </div>
  );
}

export default HomeLoginRegister;
