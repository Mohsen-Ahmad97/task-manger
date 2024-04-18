import {
  Alert,
  Button,
  Form,
  FormProps,
  Input,
  Space,
  Spin,
  Typography,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { useDispatch } from "react-redux";
import { takeInformationRegister } from "../Redux/ActionCreator/ActionsCreator";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RegisterType } from "../Models/Modules";



const Register = () => {
  const [form] = useForm();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { message, isSuccess, isLoading } = useSelector(
    (state: any) => state.re
  );

  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      navigate("/confirmPassword");
      form.resetFields();
    }
  });

  const onFinish: FormProps<RegisterType>["onFinish"] = async (values: RegisterType) => {
    // console.log("Success:", values);
    await form.validateFields();
    localStorage.setItem("email", values.email);
    dispatch(takeInformationRegister(values));
  };
  const onFinishFailed: FormProps<RegisterType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Space direction="vertical">
      <Spin spinning={isLoading}>
        {message && <Alert message={t("message")} type="success" />}
        <Typography
          style={{
            marginBottom: "50px",
            textAlign: "center",
            color: "blue",
            fontSize: "50px",
          }}
        >
          {t("Register")}
        </Typography>
        <Form
          form={form}
          name="register"
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
            label={t("Password")}
            name="password"
            style={{ width: "100%" }}
            rules={[
              { required: true, message: t("Please input your password") },
              { min: 6 },
              {
                pattern: new RegExp(
                  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{8,16}$/
                ),
                message: t(
                  "passord should contain at least 8 characters such A 9 A @"
                ),
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder={t("Please input your password")} />
          </Form.Item>
          <Form.Item
            label={t("ConfirmPassword")}
            name="confirmPassword"
            dependencies={["password"]}
            style={{ width: "100%" }}
            rules={[
              { required: true, message: t("Please confirm your password") },
              { min: 6 },
              {
                pattern: new RegExp(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]/),
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
          <Form.Item style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit" style={{ width: "70%" }}>
              {t("Register")}
            </Button>
          </Form.Item>
          <Form.Item style={{ textAlign: "center" }}>
            <Button
              type="primary"
              style={{ width: "70%" }}
              onClick={() => {
                navigate("/");
              }}
            >
              {t("Back To Main Page")}
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </Space>
  );
};

export default Register;
