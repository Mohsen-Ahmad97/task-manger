import { Modal, Space } from "antd";
import UpdateMilestone from "./UpdateMilestone";

const UpdateMilestoneModal = ({
  open1,
  handelcancel1,
  setopen1,
  data,
  Id,
}: any) => {
  return (
    <Space>
      <Modal
        open={open1}
        title="update mislestone "
        onCancel={handelcancel1}
        footer={[<UpdateMilestone setopen1={setopen1} data={data} Id={Id} />]}
      />
    </Space>
  );
};

export default UpdateMilestoneModal;
