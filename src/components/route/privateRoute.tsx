import { Button, Row } from "antd";
import { useContext, useEffect, useState } from "react";
import { redirect, Route, RouteProps, useNavigate } from "react-router-dom";
import appContext from "../../appContext";
import { Home } from "../../pages/home/home";
import HomeLoginRegister from "../../pages/homeLoginRegister/homeLoginRegister";
import { HandleCheckAccessToken, HandleCheckRole } from "../../service/user";

export type PrivateRouteType = {
  children: any;
  roles: Array<string>;
};

export const PrivateRoute: React.FC<PrivateRouteType> = (props) => {
  const { role, setRole, isLogin, setIsLogin } = useContext(appContext);
  const navigate = useNavigate();

  const checkAccessToken = async (accessToken: string) => {
    const check = await HandleCheckAccessToken(accessToken);
    if (check && check?.data) {
      setIsLogin(true);
      setRole(check.data.role);
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      checkAccessToken(token);
    } else {
      navigate("/login");
    }
  }, []);

  if (!isLogin) return null;
  if (!props.roles.includes(role))
    return (
      <>
        <h1 style={{ textAlign: "center", marginTop: 100 }}>
          You don't have permission to access to this page
        </h1>
        <Row style={{ width: "100%", justifyContent: "center" }}>
          <Button
            onClick={() => {
              localStorage["accessToken"] = "";
              navigate("/login");
            }}
            style={{
              textAlign: "center",
            }}
          >
            Logout
          </Button>
        </Row>
      </>
    );
  return <>{props.children}</>;
};
