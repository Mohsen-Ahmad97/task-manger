import "./AddEmployees.css";
import { Button, Form, Input } from "antd";
import { FormProps, useForm } from "antd/es/form/Form";
import { takeAddEmployees } from "../Redux/ActionCreator/ActionsCreator";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { AddEmployeeType } from "../Models/Modules";

const AddEmployees = () => {
  const [form] = useForm();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onFinish: FormProps<AddEmployeeType>["onFinish"] = async (
    values: AddEmployeeType
  ) => {
    // console.log("Success:", values);
    await form.validateFields();
    dispatch(takeAddEmployees(values));
  };
  const onFinishFailed: FormProps<AddEmployeeType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      form={form}
      name="addemployee"
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label={t("FirstName")}
        name="firstName"
        style={{ width: "100%" }}
        rules={[{ required: true, message: t("Please input your firstName") }]}
        hasFeedback
      >
        <Input placeholder={t("Please input your firstName")} />
      </Form.Item>
      <Form.Item
        label={t("LastName")}
        name="lastName"
        style={{ width: "100%" }}
        rules={[{ required: true, message: t("Please input  your lastName") }]}
        hasFeedback
      >
        <Input placeholder={t("Please input  your lastName")} />
      </Form.Item>
      <Form.Item
        label={t("Email")}
        name="email"
        style={{ width: "100%" }}
        rules={[
          { required: true, message: t("Please input your email") },
          { type: "email", message: t("input valaid email ") },
        ]}
        hasFeedback
      >
        <Input placeholder={t("Please input your email")} />
      </Form.Item>
      <Form.Item style={{ textAlign: "center" }}>
        <Button type="primary" htmlType="submit" style={{ width: "70%" }}>
          {t("Add Employee")}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddEmployees;
