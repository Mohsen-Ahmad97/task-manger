import { Button, DatePicker, Form, Input, Select } from "antd";
import { FormProps, useForm } from "antd/es/form/Form";
import { useDispatch } from "react-redux";
import { takeUpdatemission } from "../../Redux/ActionCreator/ActionsCreator";
import { useSelector } from "react-redux";
import { mission } from "../../models/General";

const UpdateMission = (props: any) => {
  const dispatch = useDispatch();
  const [form] = useForm();
  const { employee } = useSelector((state: any) => state.getempl);

  const onFinish: FormProps<mission>["onFinish"] = async (values: mission) => {
    // console.log("values", values);
    // console.log("id", props.id);

    await form.validateFields();
    dispatch(
      takeUpdatemission({
        ...values,
        EndTime: values.EndTime,
        StartTime: values.StartTime,
        Id: props.id,
        
      })
    );
     props.setopen1(false);
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
        label="MissionName"
        name="Name"
        style={{ width: "100%" }}
        rules={[{ required: true, message: "Please input your MissionName" }]}
        hasFeedback
      >
        <Input placeholder={props.Name} />
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
      <Form.Item
        label="EmployeeIds"
        name="EmployeeIds"
        style={{ width: "100%" }}
        rules={[{ required: true, message: "Please input your EmployeeIds" }]}
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
          Update mission
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateMission;
