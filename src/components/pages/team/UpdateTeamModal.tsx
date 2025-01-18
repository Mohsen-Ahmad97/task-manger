import { Button, Form, Input, Modal, Space } from "antd";
import { UpdateTeam } from "../../../Redux/ActionCreator/ActionsCreator";
import { useDispatch } from "react-redux";
import { FormProps, useForm } from "antd/es/form/Form";
import { useState } from "react";

const UpdateTeamModal = ({ data }: any) => {
  const dispatch = useDispatch();
  const [form] = useForm();
  const onFinish: FormProps<any>["onFinish"] = async (values: any) => {
    await form.validateFields();
    dispatch(
      UpdateTeam({
        ...values,
        Name: values.Name,
        Id: data.Id,
      })
    );

    setopen(false);
    form.resetFields();
  };
  const [open, setopen] = useState(false);
  return (
    <Space>
      <Button
        onClick={() => {
          setopen(true);
        }}
      >
        updtae
      </Button>
      <Modal
        open={open}
        title="update team "
        onCancel={() => {
          form.resetFields();
          setopen(false);
        }}
        footer={[
          <Form
            form={form}
            name="updtaeTeam"
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
            autoComplete="off"
            initialValues={{...data,
              Name:data.Name
            }}
          >
            <Form.Item
              label="TeamName"
              name="Name"
              style={{ width: "100%" }}
              rules={[
                { required: true, message: "Please input your TeamName" },
              ]}
              hasFeedback
            >
              <Input placeholder="Please input your TeamName" />
            </Form.Item>
            <Form.Item style={{ textAlign: "center" }}>
              <Button type="primary" htmlType="submit" style={{ width: "70%" }}>
                Update Team
              </Button>
            </Form.Item>
          </Form>,
        ]}
      />
    </Space>
  );
};

export default UpdateTeamModal;
