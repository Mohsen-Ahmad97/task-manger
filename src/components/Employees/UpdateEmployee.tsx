import { Button, Form, FormProps, Input, Spin } from "antd";
import { useForm } from "antd/es/form/Form";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { UpdateEmployeeType } from "../../models/Modules";
import { useSelector } from "react-redux";
import { takeUpdateEmployees } from "../../Redux/ActionCreator/ActionsCreator";

const UpdateEmployee = ({data,setopen1}: any) => {
  console.log(data)
  const { isLoading } = useSelector((state: any) => state.getempl);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [form] = useForm();
  const onFinish: FormProps<UpdateEmployeeType>["onFinish"] = async (
    values: UpdateEmployeeType
  ) => {
    // console.log("Success:", values);
    await form.validateFields();
    form.setFieldsValue({...data,firstName:data.record.FirstName,
      lastName:data.record.LastName
    })
    dispatch(takeUpdateEmployees({ ...values, id:data.record.Id }));
    form.resetFields();
    setopen1(false);
  
  };
  const onFinishFailed: FormProps<UpdateEmployeeType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Spin spinning={isLoading}>
      <Form
        form={form}
        name="updateEmployee"
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{...data,firstName:data.record.FirstName,
          lastName:data.record.LastName
        }}
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
            {t("Update Employee")}
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default UpdateEmployee;
