import { Button, Row, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { RowContainTextNoti, TextNotification } from "./style";

export const DashBoardUserInActive: React.FC = () => {
  const { Text } = Typography;
  const navigate = useNavigate();
  return (
    <>
      <RowContainTextNoti>
        <TextNotification>
          You account current inActive. Please contact page admin to go to
          Dashboard. Thank you!
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
