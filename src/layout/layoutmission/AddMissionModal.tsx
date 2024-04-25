import { Modal, Space } from 'antd'

import AddMission from './AddMission'





const AddMissionModal = ({open,setopen,handelcancel}:any) => {
  return (
    <Space>
    <Modal
      open={open}
      title="create mission "
      onCancel={handelcancel}
      footer={[
        <AddMission setopen={setopen}   />,
      ]}
    />
  </Space>
  )
}

export default AddMissionModal
