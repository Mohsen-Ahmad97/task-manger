import { Button, Modal, Space } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import AddEmployees from "./AddEmployees";

const AddEmployeeModal = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <Space>
      <Button onClick={showModal}>{t("Add new Employee")}</Button>
      <Modal
        open={open}
        title={t("Add new Employee")}
        onCancel={handleCancel}
        footer={[<AddEmployees setopen={setOpen} />]}
      />
    </Space>
  );
};

export default AddEmployeeModal;
