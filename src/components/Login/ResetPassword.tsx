import {
  Alert,
  Button,
  Card,
  Form,
  FormProps,
  Input,
  Space,
  Spin,
  Typography,
} from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "antd/es/form/Form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ResetType } from "../../models/Modules";
import { takeInformationResetPassword } from "../../Redux/ActionCreator/ActionsCreator";

const ResetPassword = () => {
  const [form] = useForm();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: any) => state.reset);
  // console.log("Success:", messageresetpassword);
  const navigate = useNavigate();
  const onFinish: FormProps<ResetType>["onFinish"] = async (
    values: ResetType
  ) => {
    // console.log("Success:", values);
    await form.validateFields();
    dispatch(takeInformationResetPassword(values));
    form.resetFields();
  };
  const onFinishFailed: FormProps<ResetType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  const { Title } = Typography;
  return (
    <Spin spinning={isLoading}>
      <Card>
        <Space direction="vertical" style={{ width: "90%" }}>
          <Title
            style={{
              textAlign: "center",
              color: "blue",
            }}
          >
            {t("Reset Password")}
          </Title>

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
                  pattern: new RegExp(
                    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{8,16}$/
                  ),
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
                  pattern: new RegExp(
                    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{8,16}$/
                  ),
                  message: t("passord should contain characters such A 9 A @"),
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
                {
                  required: true,
                  message: t("Please input your verficationCode"),
                },
                { min: 6, message: t("at least 6 characters ") },
              ]}
              hasFeedback
            >
              <Input.Password
                placeholder={t("Please input your verficationCode")}
              />
            </Form.Item>
            <Form.Item style={{ textAlign: "center" }}>
              <Button type="primary" htmlType="submit" style={{ width: "70%" }}>
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
      </Card>
    </Spin>
  );
};

export default ResetPassword;
