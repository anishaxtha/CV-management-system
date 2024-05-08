import React, { useState } from "react";
import { Button, Form, Input } from "antd";

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

  return (
    <>
      <div className="signup-form">
        <Form
          name="register"
          initialValues={{
            prefix: "977",
          }}
          style={{
            maxWidth: 600,
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

          <Form.Item>
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
