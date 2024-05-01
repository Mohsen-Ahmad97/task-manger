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
import { useForm } from "antd/es/form/Form";
import { useDispatch } from "react-redux";
import { takeInformationRegister } from "../../Redux/ActionCreator/ActionsCreator";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RegisterType } from "../../models/Modules";

const Register = () => {
  const [form] = useForm();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isLoading, isSuccess } = useSelector((state: any) => state.re);

  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      navigate("/confirmEmail");
      form.resetFields();
    }
  });

  const onFinish: FormProps<RegisterType>["onFinish"] = async (
    values: RegisterType
  ) => {
    // console.log("Success:", values);
    await form.validateFields();
    localStorage.setItem("email", values.email);
    dispatch(takeInformationRegister(values));
    form.resetFields();
  };
  const onFinishFailed: FormProps<RegisterType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  const { Title } = Typography;
  return (
    <Space
      direction="vertical"
      style={{
        display: "flex",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Spin spinning={isLoading}>
        <Title
          level={1}
          style={{
            marginBottom: "50px",
            textAlign: "center",
            color: "blue",
          
          }}
        >
          Create Account
        </Title>

        <Form
          form={form}
          name="register"
          style={{
            maxWidth: 600,
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            style={{ width: "70%" }}
            rules={[
              { required: true, message: t("Please input your email") },
              { type: "email", message: t("input valaid email ") },
            ]}
            hasFeedback
          >
            <Input placeholder={t("Email")} />
          </Form.Item>
          <Form.Item
            name="password"
            style={{ width: "70%" }}
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
            <Input.Password placeholder={t("Password")} />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            dependencies={["password"]}
            style={{ width: "70%" }}
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
            <Input.Password placeholder={t("ConfirmPassword")} />
          </Form.Item>
          <Form.Item style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Create Account
            </Button>
          </Form.Item>
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            Back To Mian page
          </Button>
        </Form>
      </Spin>
    </Space>
  );
};

export default Register;
