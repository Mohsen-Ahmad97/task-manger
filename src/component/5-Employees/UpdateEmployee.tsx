import { Button, Form, FormProps, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useDispatch } from "react-redux";
import { takeUpdateEmployees, takegetEmployee } from "../Redux/ActionCreator/ActionsCreator";
import { useTranslation } from "react-i18next";

export interface FieldType1 {
  firstName: string;
  lastName: string;
  id:number
}

const UpdateEmployee = (props:any) => {
  const {t}=useTranslation();
  const dispatch = useDispatch();
  const [form] = useForm();
  const onFinish: FormProps<FieldType1>["onFinish"] = async (
    values: FieldType1
  ) => {
    // console.log("Success:", values);
    await form.validateFields();
    dispatch(takeUpdateEmployees({...values,id:props.id}));
    dispatch(takegetEmployee());
  };
  const onFinishFailed: FormProps<FieldType1>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      form={form}
      name="updateEmployee"
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label={t("FirstName")}
        name="firstName"
        style={{ width: "100%" }}
        rules={[{ required: true, message:  t("Please input your firstName") }]}
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
        <Input placeholder= {t("Please input  your lastName")} />
      </Form.Item>
      <Form.Item style={{ textAlign: "center" }}>
        <Button type="primary" htmlType="submit" style={{ width: "70%" }}>
          {t("Update Employee")}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateEmployee;
