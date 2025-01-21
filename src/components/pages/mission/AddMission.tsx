import { Button, DatePicker, Form, FormProps, Input, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { useDispatch } from "react-redux";
import { takeAddmission } from "../../../Redux/ActionCreator/ActionsCreator";
import { useSelector } from "react-redux";
import { mission } from "../../../models/General";
import { t } from "i18next";

const AddMission = (props: any) => {
  const { employee } = useSelector((state: any) => state.getempl);
  // console.log("employee", employee);

  const dispatch = useDispatch();
  const [form] = useForm();
  // console.log(props.Id)
  const onFinish: FormProps<mission>["onFinish"] = async (values: mission) => {
    // console.log("time:", values.EndTime?.format("YYYY-MM-DD HH:mm A"));
    // console.log("time1:", values.StartTime?.format("YYYY-MM-DD HH:mm A"));
    await form.validateFields();
    dispatch(
      takeAddmission({
        ...values,
        EndTime: values.EndTime,
        StartTime: values.StartTime,
        EmployeeIds: values.EmployeeIds,
      })
    );

    props.setopen(false);
    form.resetFields();
  };
  const onFinishFailed: FormProps<mission>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="addMission"
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label={t("Name")}
        name="Name"
        style={{ width: "100%" }}
        rules={[{ required: true, message:t ("Please input your Name") }]}
        hasFeedback
      >
        <Input placeholder={t("Please input your Name")} />
      </Form.Item>
      <Form.Item
        label={t("StartTime")}
        name="StartTime"
        style={{ width: "100%" }}
        rules={[{ required: true, message:t("Please input  your StartTime") }]}
        hasFeedback
      >
        <DatePicker
          style={{ width: "100%" }}
          showTime={{ format: "HH:mm A" }}
          format="YYYY-MM-DD HH:mm A"
        />
      </Form.Item>
      <Form.Item
        label={t("EndTime")}
        name="EndTime"
        style={{ width: "100%" }}
        rules={[{ required: true, message: t("Please input your  EndTime") }]}
        hasFeedback
      >
        <DatePicker
          style={{ width: "100%" }}
          showTime={{ format: "HH:mm A" }}
          format="YYYY-MM-DD HH:mm A"
        />
      </Form.Item>
      <Form.Item
        label={t("Employees")}
        name="EmployeeIds"
        style={{ width: "100%" }}
        rules={[{ required: true, message: t("Please input your Employees") }]}
        hasFeedback
      >
        <Select>
          {employee.map((em: any) => {
            return <Select.Option value={em.Id}>{em.FirstName}</Select.Option>;
          })}
        </Select>
      </Form.Item>
      <Form.Item style={{ textAlign: "center" }}>
        <Button type="primary" htmlType="submit" style={{ width: "70%" }}>
          {t("create")}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddMission;
