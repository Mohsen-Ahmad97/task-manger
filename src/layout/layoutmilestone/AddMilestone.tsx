import { Button, DatePicker, Form, Input } from "antd";
import { FormProps, useForm } from "antd/es/form/Form";

import { useDispatch } from "react-redux";
import { milistone } from "../../models/General";
import { takeAddmilestone, takeGetMilistone } from "../../Redux/ActionCreator/ActionsCreator";


const AddMilestone = (props: any) => {
  console.log("p id is ",props.id)
  const dispatch = useDispatch();
  const [form] = useForm();
  const onFinish: FormProps<milistone>["onFinish"] = async (
    values: milistone
  ) => {
    // console.log("v", values);

    await form.validateFields();
    dispatch(
      takeAddmilestone({values:{
        ...values,
        EndTime: values.EndTime,
        StartTime: values.StartTime,
        taskId:props.id,
      },Id:props.id})
    );
   dispatch(takeGetMilistone(props.id))

    props.setopen(false);
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
      name="addMission"
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="description"
        name="description"
        style={{ width: "100%" }}
        rules={[{ required: true, message: "Please input your  description" }]}
        hasFeedback
      >
        <Input placeholder="Please input your  description" />
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
        />
      </Form.Item>

      <Form.Item style={{ textAlign: "center" }}>
        <Button type="primary" htmlType="submit" style={{ width: "70%" }}>
          create milestone
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddMilestone;
