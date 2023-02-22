import { Button, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { RowContainTextNoti, TextNotification } from "./style";

export const DashBoardFanPagePublic: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <RowContainTextNoti>
        <TextNotification>
          This is homepage. Welcome to Company!
        </TextNotification>
      </RowContainTextNoti>
      <Row
        style={{ width: "100%", justifyContent: "center", marginTop: "30px" }}
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
    </>
  );
};
