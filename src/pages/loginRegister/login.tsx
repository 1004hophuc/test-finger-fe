import React, { useContext } from "react";
import "./login.css";
import { Form, Input, Button, Checkbox, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import appContext from "../../appContext";
import { HandleUserLogin } from "../../service/user";
import { useNavigate } from "react-router-dom";

const PERMISSIONS = {
  User: "User",
  Admin: "Admin",
  Super: "Super",
};

const PATHS = {
  User: "/user",
  Admin: "/admin",
  Super: "/",
};

export const LoginForm = () => {
  const { setOpenRegisterForm, setError } = useContext(appContext);
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    const { username, password } = values;
    const result = await HandleUserLogin({ username, password });
    if (!result.data) {
      alert("Something wrong");
      return setError("Something wrong!");
    }

    // if (result.data && result.data.statusCode !== 200) {
    //   console.log("result.data:", result.data);
    //   alert("Bad request");
    //   return setError(result.data.message);
    // }

    let accessToken = result?.data["token"].token;

    if (!accessToken) {
      alert("Unauthorized");
      return setError("Something wrong!");
    }

    localStorage["accessToken"] = accessToken;
    const { role, isActive } = result?.data["user"];
    console.log("isActive:", isActive);
    if (!isActive) {
      return navigate("/dashboardInActive");
    }

    switch (role) {
      case PERMISSIONS.User:
        navigate(PATHS.User);
        break;
      case PERMISSIONS.Admin:
        navigate(PATHS.Admin);
        break;
      case PERMISSIONS.Super:
        navigate(PATHS.Super);
        break;
      default:
        navigate("/public");
        break;
    }
  };

  const onClickOpenRegisterForm = () => {
    setOpenRegisterForm(true);
  };

  return (
    <Space>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
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
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          {/* <a className="login-form-forgot" href="">
            Forgot password
          </a> */}
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or{" "}
          <Button
            style={{
              border: "none",
              color: "#1677FF",
              background: "transparent",
              outline: "none",
            }}
            onClick={onClickOpenRegisterForm}
          >
            register now
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
};
