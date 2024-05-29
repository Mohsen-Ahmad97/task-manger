import { Button, DatePicker, Form, Input, Modal, Space } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FormProps, useForm } from "antd/es/form/Form";
import { milistone } from "../../models/General";
import { takeUpdatemilestone } from "../../Redux/ActionCreator/ActionsCreator";
import dayjs from "dayjs";

const UpdateMilestoneModal = ({ Id, data }: any) => {
  const [open, setopen] = useState(false);
  const dispatch = useDispatch();
  const [form] = useForm();
  const dataFormat = "YYYY-MM-DD HH:mm A";
  const onFinish: FormProps<milistone>["onFinish"] = async (
    values: milistone
  ) => {
    // console.log("values", values);
    console.log("id", Id);

    await form.validateFields();
    dispatch(
      takeUpdatemilestone({
        values: {
          ...values,
          EndTime: values.EndTime,
          StartTime: values.StartTime,
          Id: data.Id,
        },
        Id: Id,
      })
    );

    form.resetFields();
    setopen(false);
  };
  return (
    <Space>
      <Button
        onClick={() => {
          form.setFieldsValue({
            ...data,
            description: data?.Description,
            StartTime: dayjs(data?.StartTime, dataFormat),
            EndTime: dayjs(data?.EndTime, dataFormat),
          });
          setopen(true);
        }}
      >
        update
      </Button>

      <Modal
        open={open}
        title="update mislestone "
        onCancel={() => {
          setopen(false);
        }}
        footer={[
          <Form
            form={form}
            name="updateMilestone"
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
            autoComplete="off"
            initialValues={{
              ...data,
              description: data?.Description,
              StartTime: dayjs(data?.StartTime, dataFormat),
              EndTime: dayjs(data?.EndTime, dataFormat),
            }}
          >
            <Form.Item
              label="Description"
              name="description"
              style={{ width: "100%" }}
              rules={[
                { required: true, message: "Please input your Description" },
              ]}
              hasFeedback
            >
              <Input placeholder="Please input your Description" />
            </Form.Item>
            <Form.Item
              label="StartTime"
              name="StartTime"
              style={{ width: "100%" }}
              rules={[
                { required: true, message: "Please input  your StartTime" },
              ]}
              hasFeedback
            >
              <DatePicker
                showTime={{ format: "HH:mm A" }}
                format={dataFormat}
              />
            </Form.Item>
            <Form.Item
              label="EndTime"
              name="EndTime"
              style={{ width: "100%" }}
              rules={[
                { required: true, message: "Please input your  EndTime" },
              ]}
              hasFeedback
            >
              <DatePicker
                showTime={{ format: "HH:mm A" }}
                format={dataFormat}
              />
            </Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "70%" }}>
              Update milestone
            </Button>
          </Form>,
        ]}
      />
    </Space>
  );
};

export default UpdateMilestoneModal;
