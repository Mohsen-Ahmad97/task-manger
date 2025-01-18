import {
  Button,
  DatePicker,
  Form,
  FormProps,
  Input,
  Modal,
  Select,
  Space,
} from "antd";

import { useState } from "react";
import { takeUpdatemission } from "../../../Redux/ActionCreator/ActionsCreator";
import { useDispatch, useSelector } from "react-redux";
import { mission } from "../../../models/General";
import dayjs from "dayjs";

const UpdateMissionModal = ({ record }: any) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataFormat = "YYYY-MM-DD HH:mm A";
  const { employee } = useSelector((state: any) => state.getempl);
  const onFinish: FormProps<mission>["onFinish"] = async (values: mission) => {
    await form.validateFields();
    dispatch(
      takeUpdatemission({
        ...values,
        EndTime: values.EndTime,
        StartTime: values.StartTime,
        Id: record.Id,
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
          form.setFieldsValue({
            ...record,
            Name: record.Name,
            StartTime: dayjs(record?.StartTime, dataFormat),
            EndTime: dayjs(record?.EndTime, dataFormat),

          });
          setopen(true);
        }}
      >
        update
      </Button>
      <Modal
        open={open}
        title="update mission "
        onCancel={() => {
          form.resetFields();
          setopen(false);
        }}
        footer={[
          <Form
            form={form}
            name="uppdate-Mission"
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
            autoComplete="off"
            initialValues={{
              ...record,
              Name: record.Name,
              StartTime: dayjs(record?.StartTime, dataFormat),
              EndTime: dayjs(record?.EndTime, dataFormat),
              
            }}
          >
            <Form.Item
              label="MissionName"
              name="Name"
              style={{ width: "100%" }}
              rules={[
                { required: true, message: "Please input your MissionName" },
              ]}
              hasFeedback
            >
              <Input placeholder="Please input your MissionName" />
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
                format="YYYY-MM-DD HH:mm A"
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
                format="YYYY-MM-DD HH:mm A"
              />
            </Form.Item>
            <Form.Item
              label="EmployeeIds"
              name="EmployeeIds"
              style={{ width: "100%" }}
              rules={[
                { required: true, message: "Please input your EmployeeIds" },
              ]}
              hasFeedback
            >
              <Select>
                {employee.map((employe: any) => {
                  return (
                    <Select.Option value={employe.Id}>{employe.FirstName}</Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item style={{ textAlign: "center" }}>
              <Button type="primary" htmlType="submit" style={{ width: "70%" }}>
                Update mission
              </Button>
            </Form.Item>
          </Form>,
        ]}
      />
    </Space>
  );
};

export default UpdateMissionModal;
