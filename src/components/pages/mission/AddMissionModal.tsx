import { Modal, Space } from 'antd'

import AddMission from './AddMission'





const AddMissionModal = ({open1,setopen1,handelcancel1}:any) => {
  return (
    <Space>
    <Modal
      open={open1}
      title="create mission "
      onCancel={handelcancel1}
      footer={[
        <AddMission setopen={setopen1}   />,
      ]}
    />
  </Space>
  )
}

export default AddMissionModal
