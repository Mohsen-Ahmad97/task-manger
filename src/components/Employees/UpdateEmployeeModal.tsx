import { Modal, Space } from "antd";
import UpdateEmployee from "./UpdateEmployee";
import { useTranslation } from "react-i18next";

const UpdateEmployeeModal = ({ open, handelcancel1, setopen1, data }: any) => {
  const { t } = useTranslation();
  return (
    <Space>
      <Modal
        open={open}
        title={t("Update Employee")}
        onCancel={handelcancel1}
        footer={[<UpdateEmployee setopen1={setopen1} data={data} />]}
      />
    </Space>
  );
};

export default UpdateEmployeeModal;
