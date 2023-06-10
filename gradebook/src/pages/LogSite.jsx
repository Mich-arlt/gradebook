import React, { useState, useEffect } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import axios from "axios";

const Logging = ({ closeLogSite, Login, Password, Token }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [logsuc, setlogsuc] = useState(false);

  const SendData = async () => {
    const data = {
      contactEmail: username,
      password: password,
    };
    try {
      const response = await axios.post(
        "https://gradebook-api-app.azurewebsites.net/api/student/login",
        data
      );
      console.log("Sukces:", response.data);
      setToken(response.data.toString());
      console.log("token:", token);
      closeLogSite(false);
    } catch (error) {
      console.error("Błąd:", error.response.data);
      setlogsuc(true);
    }
  };

  const onFinish = () => {
    Login(username.toString());
    Password(password.toString());
    Token(token);
  };

  return (
    <>
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
            onChange={(e) => setUsername(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={SendData}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
      {logsuc && <div>Błędne hasło lub mail</div>}
    </>
  );
};

export default Logging;
