import { useState, useEffect } from "react";
import { Button, Cascader, Checkbox, Form, Input, Select, Upload } from "antd";
import { updateCV, uploadCV } from "../services/api";
import { useLocation } from "react-router-dom";
import "../App.css";

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
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 8 },
  },
};

const UploadProfile = () => {
  const { state } = useLocation();
  const [form] = Form.useForm();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [exp, setExp] = useState("");
  const [ref, setRef] = useState("");
  const [CVFile, setCVFile] = useState(null);
  const [selectedTech, setSelectedTech] = useState([]);

  useEffect(() => {
    if (state) {
      form.setFieldsValue(state);
      setName(state.name || "");
      setEmail(state.email || "");
      setNumber(state.number || "");
      setExp(state.exp || "");
      setRef(state.ref || "");
    }
  }, [state, form]);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const formData = new FormData();
    for (const [key, value] of Object.entries(values)) {
      formData.append(`${key}`, `${value}`);
    }
    formData.append("file", CVFile);
    formData.append("tech", selectedTech);

    state ? updateCV(state.id, formData) : uploadCV(formData);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 90 }}>
        <Select.Option value="977">+977</Select.Option>
        <Select.Option value="86">+86</Select.Option>
        <Select.Option value="87">+87</Select.Option>
      </Select>
    </Form.Item>
  );

  const handleTechChange = (value) => {
    setSelectedTech(value);
  };

  const handleFileChange = (info) => {
    if (info.file.status !== "uploading") {
      setCVFile(info.file.originFileObj);
    }
  };

  return (
    <div className="register-form">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{ prefix: "977" }}
        style={{ maxWidth: 600 }}
        scrollToFirstError
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            { type: "string", message: "The input is not valid name!" },
            { required: true, message: "Please input your name!" },
          ]}
        >
          <Input
            placeholder="Enter the name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Technology"
          rules={[{ required: false, message: "Please input technology!" }]}
        >
          <Cascader
            style={{ width: "100%" }}
            options={options}
            onChange={handleTechChange}
            multiple
            maxTagCount="responsive"
            showCheckedStrategy={SHOW_CHILD}
          />
        </Form.Item>

        <Form.Item
          name="level"
          label="Level"
          rules={[{ required: true, message: "Please select an option" }]}
        >
          <Select placeholder="select the level">
            <Select.Option
              value="beginner"
              defaultValue={state ? state.level : null}
            >
              Beginner
            </Select.Option>
            <Select.Option value="intermediate">Intermediate</Select.Option>
            <Select.Option value="advanced">Advanced</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="salaryexp"
          label="SalaryExp"
          rules={[{ required: true, message: "Please input your salary!" }]}
        >
          <Input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="exp"
          label="Experience"
          rules={[{ required: true, message: "Experience in years" }]}
        >
          <Input
            type="number"
            value={exp}
            onChange={(e) => setExp(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="number"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{ width: "100%" }}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            { type: "email", message: "The input is not valid E-mail!" },
            { required: true, message: "Please input your E-mail!" },
          ]}
        >
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
          name="ref"
          label="References"
          rules={[
            { type: "string", message: "The input is not valid reference!" },
            { required: true, message: "Please input your reference!" },
          ]}
        >
          <Input value={ref} onChange={(e) => setRef(e.target.value)} />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Please select gender!" }]}
        >
          <Select placeholder="select your gender">
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Upload Cv">
          <Upload onChange={handleFileChange}>
            <Button>Choose file</Button>
          </Upload>
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
            {state ? "Update" : "Register"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UploadProfile;
