import { Button, Form, FormProps, Input, Modal, Space, Spin } from "antd";
import { useTranslation } from "react-i18next";
import { takeUpdateEmployees } from "../../../Redux/ActionCreator/ActionsCreator";
import { UpdateEmployeeType } from "../../../models/Modules";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";

const UpdateEmployeeModal = ({ data }: any) => {
  console.log("Success:", data);
  const [open, setopen] = useState(false);
  const { t } = useTranslation();
  const { isLoading } = useSelector((state: any) => state.getempl);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const onFinish: FormProps<UpdateEmployeeType>["onFinish"] = async (
    values: UpdateEmployeeType
  ) => {
    await form.validateFields();

    dispatch(takeUpdateEmployees({ ...values, id: data.Id }));
    form.resetFields();
    setopen(false);
  };

  return (
    <Space>
      <Button
        style={{ color: "green" }}
        onClick={() => {
          form.setFieldsValue({
            firstName: data.FirstName,
            lastName: data.LastName,
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
        title={t("Update Employee")}
        onCancel={() => {
          setopen(false);
        }}
        footer={[
          <Spin spinning={isLoading}>
            <Form
              form={form}
              name="updateEmployee"
              style={{ maxWidth: 600 }}
              onFinish={onFinish}
              autoComplete="off"
              initialValues={{
                firstName: data.FirstName,
                lastName: data.LastName,
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
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "70%" }}
                >
                  {t("Update Employee")}
                </Button>
              </Form.Item>
            </Form>
          </Spin>,
        ]}
      />
    </Space>
  );
};

export default UpdateEmployeeModal;
