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
import { LoginType } from "../../../models/Modules";
import { takeInformationFrogetPassword, takeInformationLogin } from '../../../Redux/ActionCreator/ActionsCreator';



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
      navigate("/admin");
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
      <div className="login">
    
  <Card>

 
        <h1
         
        >
          {t("Welcome Back!")}
        </h1>
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
            <div className="create-account">
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
            <Button
                type="link"
                onClick={() => {
                  navigate("/register");
                }}
              >
                {t("Create Account")}
              </Button>
     
            
            </div>
        
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
       
        </Form>
        </Card>
      </div>
    </Spin>
  );
};

export default Login;
