import { Button, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ListUserRequireActive } from "../listUserRequireActive/listUserRequireActive";
import { RowContainTextNoti, TextNotification } from "./style";

export const DashBoardSuperAdmin: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <RowContainTextNoti>
        <TextNotification>This is Dashboard for Super Admin</TextNotification>
      </RowContainTextNoti>
      <Row
        style={{
          width: "100%",
          justifyContent: "center",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
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

      <ListUserRequireActive />
    </>
  );
};
