import { Button, DatePicker, Form, Input } from "antd";
import { FormProps, useForm } from "antd/es/form/Form";
import { milistone } from "../../models/General";
import { useDispatch } from "react-redux";
import {  takeUpdatemilestone } from "../../Redux/ActionCreator/ActionsCreator";

const UpdateMilestone = (props: any) => {
  const dispatch = useDispatch();
  const [form] = useForm();

  const onFinish: FormProps<milistone>["onFinish"] = async (
    values: milistone
  ) => {
    console.log("values", values);
    // console.log("id", props.id);

    await form.validateFields();
    dispatch(
      takeUpdatemilestone({
        ...values,
        EndTime: values.EndTime,
        StartTime: values.StartTime,
        Id: props.id,
      
      })
      
    );
  
    props.setopen1(false);
    form.resetFields();
  };
  const onFinishFailed: FormProps<milistone>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      form={form}
      name="updateMilestone"
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Description"
        name="description"
        style={{ width: "100%" }}
        rules={[{ required: true, message: "Please input your MissionName" }]}
        hasFeedback
      >
        <Input placeholder={props.Description} />
      </Form.Item>
      <Form.Item
        label="StartTime"
        name="StartTime"
        style={{ width: "100%" }}
        rules={[{ required: true, message: "Please input  your StartTime" }]}
        hasFeedback
      >
        <DatePicker
          showTime={{ format: "HH:mm A" }}
          format="YYYY-MM-DD HH:mm A"
        placeholder={props.StartTime}
        />
      </Form.Item>
      <Form.Item
        label="EndTime"
        name="EndTime"
        style={{ width: "100%" }}
        rules={[{ required: true, message: "Please input your  EndTime" }]}
        hasFeedback
      >
        <DatePicker
          showTime={{ format: "HH:mm A" }}
          format="YYYY-MM-DD HH:mm A"
          placeholder={props.EndTime}
        />
      </Form.Item>
      <Button type="primary" htmlType="submit" style={{ width: "70%" }}>
        Update milestone
      </Button>
    </Form>
  );
};

export default UpdateMilestone;
