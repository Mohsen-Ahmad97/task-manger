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
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LoginType } from "../../models/Modules";
import { takeInformationFrogetPassword, takeInformationLogin } from './../../Redux/ActionCreator/ActionsCreator';



const Login = () => {
  const { t } = useTranslation();
  const [form] = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isSuccess} = useSelector(
    (state: any) => state.log
  );

const {Title}=Typography
  useEffect(() => {
    if (isSuccess) {
      navigate("/Admin");
      form.resetFields();
    }
  }, [isSuccess]);
  const onFinish: FormProps<LoginType>["onFinish"] = async (
    values: LoginType
  ) => {
    await form.validateFields();
    dispatch(takeInformationLogin(values));
    form.resetFields();
  };
  const onFinishFailed: FormProps<LoginType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Spin spinning={isLoading}>
      <Space direction="vertical" style={{width:"100%",height:"100%" }}>
    
  <Card>

 
        <Title
          style={{
            marginBottom: "50px",
            textAlign: "center",
            color: "blue",
            fontSize: "50px",
          }}
        >
          {t("Login")}
        </Title>
        <Form
          form={form}
          name="login"

          style={{ maxWidth: 600 ,display:"flex",flexDirection:"column"}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label={t("Email")}
            name="email"
            style={{ width: "100%",display:"flex",flexDirection:"column"}}
            
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
        </Card>
      </Space>
    </Spin>
  );
};

export default Login;
