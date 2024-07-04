import { useState } from "react";
import { Button, Form, Input } from "antd";
import cvmanager from "../assets/cvmanager.png";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const doSignup = async () => {
    const res = await fetch("https://swcstgbe.cellapp.co/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        password_confirmation: cpassword,
      }),
    });
    console.log(res);
  };

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 10,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center flex-col bg-[#171b5b]">
        <img src={cvmanager} alt="" className="h-24 w-24" />
        <h1 className="text-3xl font-semibold text-white mb-4">Signup Form</h1>

        <Form
          {...formItemLayout}
          style={{ padding: "30px 30px 10px 30px", maxWidth: 600 }}
          className="bg-white rounded-md"
          name="register"
          initialValues={{
            prefix: "977",
          }}
          scrollToFirstError
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
            ]}
          >
            <Input.Password
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />
          </Form.Item>

          <Form.Item className="w-full flex items-center justify-center">
            <Button onClick={doSignup} type="primary" htmlType="submit">
              SignUp
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default SignUp;
