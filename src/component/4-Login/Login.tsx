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
import {
  takeInformationFrogetPassword,
  takeInformationLogin,
} from "../Redux/ActionCreator/ActionsCreator";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export interface FieldValue {
  password: string;
  email: string;
}

const Login = () => {
  const { t } = useTranslation();
  const [form] = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isSuccess, messageLogin, messagefaild} =
    useSelector((state: any) => state.log);
  const { messageForgetPassword } = useSelector((state: any) => state.forg);

  useEffect(() => {
    
    if (isSuccess) {
      navigate("/employees");
      form.resetFields();
    }
  });
  const onFinish: FormProps<FieldValue>["onFinish"] = async (
    values: FieldValue
  ) => {
    await form.validateFields();
    dispatch(takeInformationLogin(values));


    form.resetFields();
  };
  const onFinishFailed: FormProps<FieldValue>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Spin spinning={isLoading}>
      <Space direction="vertical" style={{ width: "80%" }}>
        {messageLogin && <Alert message={messageLogin} type="success" />}
        {messageForgetPassword && (
          <Alert message={t("messageForgetPassword")} type="success" />
          
        )}
{messagefaild && (
          <Alert message={messagefaild} type="success" />
          
        )}

        <Typography
          style={{
            marginBottom: "50px",
            textAlign: "center",
            color: "blue",
            fontSize: "50px",
          }}
        >
          {t("Login")}
        </Typography>
        <Form
          form={form}
          name="login"
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
                message: t("passord should contain characters such A 9 A @"),
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder={t("Please input your password")} />
          </Form.Item>
          <Form.Item style={{ textAlign: "center" }}>
            <Button
              type="link"
              onClick={() => {
                dispatch(takeInformationFrogetPassword());
              }}
            >
              {t("Forget Password ?")}
              <Button
                type="link"
                onClick={() => {
                  navigate("/Login/resetPassword");
                }}
              >
                {t("Click Here")}
              </Button>
            </Button>
          </Form.Item>
          <Form.Item style={{ textAlign: "center" }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "70%" }}
              onClick={() => {}}
            >
              {t("Login")}
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
      </Space>
    </Spin>
  );
};

export default Login;
