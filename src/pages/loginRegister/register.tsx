import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  Space,
  Typography,
  Row,
  Checkbox,
  Radio,
  RadioChangeEvent,
} from "antd";
import COLOR from "../../configs/color";
import appContext from "../../appContext";
import "./login.css";
import { HandleUserRegister } from "../../service/user";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

const RegisterForm = () => {
  const { Text } = Typography;
  const { openRegisterForm, setOpenRegisterForm } = useContext(appContext);
  const [value, setValue] = useState("User");

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const onFinish = async (values: any) => {
    const { username, password, email } = values;
    await HandleUserRegister({ username, password, email, role: value });
    setOpenRegisterForm(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    setOpenRegisterForm(true);
  };

  return (
    <>
      <Space className="modalBackground">
        <Space
          style={{
            background: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            borderRadius: "15px",
            padding: "20px",
            minWidth: "400px",
          }}
        >
          <Text style={{ fontSize: "20px", fontWeight: 700 }}>
            Please input information
          </Text>
          <Form
            name="normal_register"
            className="register-form"
            initialValues={{
              remember: true,
            }}
            style={{ padding: "30px" }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              style={{ minWidth: "250px" }}
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Row
              style={{ justifyContent: "space-around", marginBottom: "20px" }}
            >
              <Text>Role</Text>
              <Radio.Group onChange={onChange} value={value}>
                <Radio value="User">User</Radio>
                <Radio value="Admin">Admin</Radio>
              </Radio.Group>
            </Row>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={() => {
                  // setOpenRegisterForm(true);
                }}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </Space>
    </>
  );
};

export default RegisterForm;
