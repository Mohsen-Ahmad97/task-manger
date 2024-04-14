import { Alert, Button, Form, Input, Space, Spin, Typography } from "antd";
import { FormProps, useForm } from "antd/es/form/Form";
import { useNavigate } from "react-router-dom";
import { takeInformationCompleteRegister } from "../Redux/ActionCreator/ActionsCreator";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export interface FieldTy {
  firstName: string;
  lastName: string;
  dateOfBirth: null;
}

const CompleteRegister = () => {
  const { t } = useTranslation();
  const [form] = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { completemessage, isLoading } = useSelector(
    (state: any) => state.comp
  );

  const onFinish: FormProps<FieldTy>["onFinish"] = async (values: FieldTy) => {
    // console.log("Success:", values);
    await form.validateFields();
    dispatch(takeInformationCompleteRegister(values));
    form.resetFields();
  };

  const onFinishFailed: FormProps<FieldTy>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Spin spinning={isLoading}>
      <Space direction="vertical" style={{ width: "90%" }}>
        {completemessage && (
          <Alert message={t("completemessage")} type="success" />
        )}
        <Typography
          style={{
            marginBottom: "50px",
            textAlign: "center",
            color: "blue",
            fontSize: "50px",
          }}
        >
          {t("Complete Register")}
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
            label={t("FirstName")}
            name="firstName"
            style={{ width: "100%" }}
            rules={[
              { required: true, message: t("Please input your firstName") },
            ]}
            hasFeedback
          >
            <Input placeholder={t("Please input your firstName")} />
          </Form.Item>
          <Form.Item
            label={t("LastName")}
            name="lastName"
            style={{ width: "100%" }}
            rules={[
              { required: true, message: t("Please input  your lastName") },
            ]}
            hasFeedback
          >
            <Input placeholder={t("Please input  your lastName")} />
          </Form.Item>
          <Form.Item style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit" style={{ width: "70%" }}>
              {t("Complete Register")}
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

export default CompleteRegister;
