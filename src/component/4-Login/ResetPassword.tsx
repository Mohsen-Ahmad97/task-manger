import { Alert, Button, Form, FormProps, Input, Space, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "antd/es/form/Form";
import { useDispatch } from "react-redux";
import { takeInformationResetPassword } from "../Redux/ActionCreator/ActionsCreator";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export interface FieldT {
  email: string;
  verficationCode: string;
  password: string;
  confirmPassword: string;
}

const ResetPassword = () => {
  const [form] = useForm();
const {t}=useTranslation();
  const dispatch = useDispatch();
  const messageresetpassword = useSelector((state: any) => state.reset.payload);
  // console.log("Success:", messageresetpassword);
  const navigate = useNavigate();
  const onFinish: FormProps<FieldT>["onFinish"] = async (values: FieldT) => {
    // console.log("Success:", values);
    await form.validateFields();
    dispatch(takeInformationResetPassword(values));
    form.resetFields();
  };
  const onFinishFailed: FormProps<FieldT>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Space direction="vertical" style={{ width: "90%" }}>
      {messageresetpassword && <Alert message={t("messageresetpassword")} type="success" />}
      <Typography
        style={{
          marginBottom: "50px",
          textAlign: "center",
          color: "blue",
          fontSize: "50px",
        }}
      >
        {t("Reset Password")}
      </Typography>

      <Form
        form={form}
        name="resetpassword"
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
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
        <Form.Item
          label={t("NewPassword")}
          name="password"
          style={{ width: "100%" }}
          rules={[
            { required: true, message: t("Please input your password") },
            { min: 6 },
            {
              pattern: new RegExp(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]/),
              message: t("passord should contain characters such A 9 A @"),
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder={t("Please input your password")} />
        </Form.Item>
        <Form.Item
          label={t("ConfirmNewPassword")}
          name="confirmPassword"
          dependencies={["password"]}
          style={{ width: "100%" }}
          rules={[
            { required: true, message: t("Please confirm your password") },
            { min: 6 },
            {
              pattern: new RegExp(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]/),
              message:t("passord should contain characters such A 9 A @"),
            },
            () => ({
              validator(_, value: string) {
                if (form.getFieldValue("password") !== value) {
                  return Promise.reject(
                    t("the two password thats your entered dose not match ")
                  );
                }
                return Promise.resolve();
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password placeholder={t("Please confirm your password")} />
        </Form.Item>
        <Form.Item
          label={t("VerficationCode")}
          name="verficationCode"
          style={{ width: "100%" }}
          rules={[
            { required: true, message: t("Please input your verficationCode") },
            { min: 6, message: t("at least 6 characters ") },
          ]}
          hasFeedback
        >
          <Input.Password placeholder={t("Please input your verficationCode")} />
        </Form.Item>
        <Form.Item style={{ textAlign: "center" }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "70%" }}
          >
            {t("Reset Password")}
          </Button>
        </Form.Item>
        <Form.Item style={{ textAlign: "center" }}>
          <Button
            type="primary"
            style={{ width: "70%" }}
            onClick={() => {
              navigate("/Login");
            }}
          >
            {t("Back To Login Page")}
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
};

export default ResetPassword;
