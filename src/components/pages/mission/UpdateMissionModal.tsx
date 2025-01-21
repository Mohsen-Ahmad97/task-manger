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
import { useTranslation } from "react-i18next";

const UpdateMissionModal = ({ record }: any) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const {t} =useTranslation();
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
    <Space className="mission-update">
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
           className="btn-update"
      >
         <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 200"
                    width="200"
                    height="200"
                  
                  >
                    <circle
                      cx="100"
                      cy="100"
                      r="95"
                      fill="#000"
                      stroke="#388E3C"
                      stroke-width="10"
                    />

                    <rect
                      x="50"
                      y="60"
                      width="100"
                      height="10"
                      rx="5"
                      fill="#ffffff"
                    />
                    <rect
                      x="50"
                      y="90"
                      width="80"
                      height="10"
                      rx="5"
                      fill="#ffffff"
                    />
                    <rect
                      x="50"
                      y="120"
                      width="60"
                      height="10"
                      rx="5"
                      fill="#ffffff"
                    />

                    <path
                      d="M70 140 L90 160 L130 120"
                      stroke="#ffffff"
                      stroke-width="10"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
      </Button>
      <Modal
        open={open}
        title={t("UpdateMission")}
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
              label={t("Name")}
              name="Name"
              style={{ width: "100%" }}
              rules={[
                { required: true, message: t("Please input your Name") },
              ]}
              hasFeedback
            >
              <Input placeholder={t("Please input your Name")} />
            </Form.Item>
            <Form.Item
              label={t("StartTime")}
              name="StartTime"
              style={{ width: "100%" }}
              rules={[
                { required: true, message: t("Please input  your StartTime") },
              ]}
              hasFeedback
            >
              <DatePicker
                showTime={{ format: "HH:mm A" }}
                format="YYYY-MM-DD HH:mm A"
              />
            </Form.Item>
            <Form.Item
              label={t("EndTime")}
              name="EndTime"
              style={{ width: "100%" }}
              rules={[
                { required: true, message: t("Please input your  EndTime") },
              ]}
              hasFeedback
            >
              <DatePicker
                showTime={{ format: "HH:mm A" }}
                format="YYYY-MM-DD HH:mm A"
              />
            </Form.Item>
            <Form.Item
              label={t("Employees")}
              name="EmployeeIds"
              style={{ width: "100%" }}
              rules={[
                { required: true, message: t("Please input your Employees") },
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
                {t("Update")} 
              </Button>
            </Form.Item>
          </Form>,
        ]}
      />
    </Space>
  );
};

export default UpdateMissionModal;
