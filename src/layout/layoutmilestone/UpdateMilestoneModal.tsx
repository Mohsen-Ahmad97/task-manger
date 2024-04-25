import { Modal, Space } from "antd";
import UpdateMilestone from "./UpdateMilestone";

const UpdateMilestoneModal = ({
  id,
  open1,
  handelcancel1,
  setopen1,
  StartTime,
  EndTime,
  Description,
}: any) => {
  return (
    <Space>
      <Modal
        open={open1}
        title="update mission "
        onCancel={handelcancel1}
        footer={[
          <UpdateMilestone
            setopen1={setopen1}
            id={id}
            StartTime={StartTime}
            EndTime={EndTime}
            Description={Description}
          />,
        ]}
      />
    </Space>
  );
};

export default UpdateMilestoneModal;
