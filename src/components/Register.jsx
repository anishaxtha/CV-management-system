import { Button, Cascader, Checkbox, Form, Input, Select } from "antd";

import "../App.css";
import { uploadCV } from "../services/api";
const { SHOW_CHILD } = Cascader;

const options = [
  {
    label: "React Js",
    value: "react",
  },
  {
    label: "Dot net",
    value: "dotnet",
  },
  {
    label: "DevOps",
    value: "devops",
  },
  {
    label: "Node Js",
    value: "nodejs",
  },
  {
    label: "QA",
    value: "qa",
  },
];

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Register = (value) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    uploadCV(values);
  };
  const { Option } = Select;
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 90,
        }}
      >
        <Option value="977">+977</Option>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const onChange = (value) => {
    console.log(value);
  };

  const handleChange = () => {
    console.log(`selected: ${value}`);
  };

  return (
    <div className="register-form">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
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
              type: "name",
              message: "The input is not valid name!",
            },
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input
            placeholder="Enter the name "
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          name="tech"
          label="Technology"
          rules={[
            {
              required: false,
              message: "Please input website!",
            },
          ]}
        >
          <Cascader
            style={{
              width: "100%",
            }}
            options={options}
            onChange={onChange}
            multiple
            maxTagCount="responsive"
            showCheckedStrategy={SHOW_CHILD}
          />
          <br />
        </Form.Item>

        <Form.Item
          name="level"
          label="Level"
          rules={[{ required: true, message: "Please select an option" }]}
        >
          <Select placeholder="select the level" onChange={handleChange}>
            <Option value="option1">Beginner</Option>
            <Option value="option2">Intermediate</Option>
            <Option value="option3">Advanced</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="SalaryExp"
          name="salaryexp"
          rules={[{ required: true, message: "Please input your salary!" }]}
        >
          <Input
            type="number"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          name="exp"
          label="Experience"
          rules={[
            {
              required: true,
              message: "Experience in years",
            },
          ]}
        >
          <Input
            type="number"
            onChange={(e) => {
              setExp(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          name="number"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
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
          name="ref"
          label="References"
          rules={[
            {
              type: "reference",
              message: "The input is not valid reference!",
            },
            {
              required: true,
              message: "Please input your reference!",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setRef(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: "Please select gender!",
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Upload Cv">
          <Input
            type="file"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Register;
