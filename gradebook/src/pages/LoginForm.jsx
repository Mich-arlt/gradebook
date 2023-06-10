import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import axios from "axios";

const LoginForm = ({ closeLogSite, setUsername, setPassword, setToken, messageApi }) => {

  const loginUser = async (username, password) => {
    const data = {
      contactEmail: username,
      password: password,
    };
    try {
      const response = await axios.post(
        "https://gradebook-api-app.azurewebsites.net/api/student/login",
        data
      );
      setToken(response.data.toString());
      closeLogSite(false);
    } catch (error) {
        messageApi.open({
          type: "error",
          content: "Podano nieprawidłowe dane logowania!",
        }); 
    }
  };

  const onFinish = (values) => {
    loginUser(values.username, values.password);
    console.log(values);
  };

  const onFinishFailed = (errorInfo) => {
    messageApi.open({
      type: "error",
      content: "Nie podano wszystkich wymaganych danych!",
    });
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
        onFinishFailed={onFinishFailed}
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
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
