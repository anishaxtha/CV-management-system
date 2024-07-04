import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import cvmanager from "../assets/cvmanager.png";
import "../App.css";
import { Link } from "react-router-dom";
import { Loginpage } from "../services/api";
const LoginPage = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const { email, password } = values;
    // login(email, password);
    Loginpage(email, password)
      .then(() => {
        console.log("login page ");
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  // const login = (email, password) => {
  //   console.log("🚀 ~ onFinish ~ login:", login);
  //   Loginpage(email, password)
  //     .then(() => {
  //       console.log("login page ");
  //     })
  //     .catch((error) => {
  //       console.error("Login failed:", error);
  //     });
  // };
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center flex-col bg-[#171b5b]">
        <img src={cvmanager} alt="" className="h-24 w-24" />
        <h1 className="text-3xl font-semibold text-white mb-4">Login Form</h1>

        <Form
          name="normal_login"
          style={{ padding: "30px 30px 10px 30px" }}
          className="bg-white rounded-md"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email address"
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

            <a className="login-form-forgot" href="">
              <span>Forgot password?</span>
            </a>
          </Form.Item>

          <Form.Item className="flex items-center justify-center">
            {/* <Link to="/dashboard"> */}
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              // onClick={login}
            >
              Log in
            </Button>
            {/* </Link> */}
            &nbsp; Or &nbsp;
            <Link to="/signup">
              <span className="color-blue-500">SignUp</span>
            </Link>
          </Form.Item>
          <p className="flex items-center justify-center ">SmartPalika @2024</p>
        </Form>
      </div>
    </>
  );
};
export default LoginPage;
