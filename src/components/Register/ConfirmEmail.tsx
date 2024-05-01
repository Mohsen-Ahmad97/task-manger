import { Alert, Button, Card, Form, Input, Space, Spin } from "antd";
import { FormProps, useForm } from "antd/es/form/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ConfirmType } from "../../models/Modules";
import {
  takeInformationConfirmEmail,
  takeInformationResendCode,
} from "./../../Redux/ActionCreator/ActionsCreator";

const ConfirmEmail = () => {
  const { t } = useTranslation();
  const [form] = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isSuccess } = useSelector((state: any) => state.conf);

  // console.log(resendMessage)
  useEffect(() => {
    if (isSuccess) {
      navigate("/completeRegister");
    }
    form.resetFields();
  }, [isSuccess]);
  const onFinish: FormProps<ConfirmType>["onFinish"] = async (
    values: ConfirmType
  ) => {
    // console.log("Success:", values);
    await form.validateFields();
    dispatch(takeInformationConfirmEmail(values));
    form.resetFields();
  };
  const onFinishFailed: FormProps<ConfirmType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Space
      direction="vertical"
      style={{ display: "flex", alignItems: "center", alignContent: "center",marginTop:"100px" }}
    >
      <Spin spinning={isLoading}>
        <Card>

      
        <Form
          form={form}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label={t("VerficationCode")}
            name="verficationCode"
            style={{ width: "100%" }}
            rules={[
              {
                required: true,
                message: t("Please input your verficationCode"),
              },
              { min: 6, message: t("at least 6 characters") },
            ]}
            hasFeedback
          >
            <Input placeholder={t("Please input your verficationCode")} />
          </Form.Item>
          <Form.Item style={{ textAlign: "center" }}>
            <Button
              type="primary"
              onClick={() => {
                dispatch(takeInformationResendCode());
              }}
            >
              {t("resend verficationCode")}
            </Button>
          </Form.Item>
          <Form.Item style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit" style={{ width: "70%" }}>
            Conirm Email 
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
      </Spin>
     
    </Space>
  );
};

export default ConfirmEmail;
