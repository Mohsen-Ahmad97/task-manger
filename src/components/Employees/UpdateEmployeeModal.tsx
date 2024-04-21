import { Modal, Space } from "antd";
import UpdateEmployee from "./UpdateEmployee";
import { useTranslation } from "react-i18next";

const UpdateEmployeeModal = ({
  open,
  handelcancel1,
  id,
  setopen1,
  FirstName,
  LastName,
}: any) => {
  const { t } = useTranslation();
  return (
    <Space>
      <Modal
        open={open}
        title={t("Update Employee")}
        onCancel={handelcancel1}
        footer={[
          <UpdateEmployee
            id={id}
            setopen1={setopen1}
            FirstName={FirstName}
            LastName={LastName}
          />,
        ]}
      />
    </Space>
  );
};

export default UpdateEmployeeModal;
