import { Modal, Space } from 'antd'
import React from 'react'
import AddMilestone from './AddMilestone'

const AddMilestoneModal = ({open,handelcancel,setopen,id}:any) => {
  return (
    <Space>
    <Modal

      open={open}
      title="create milestone "
      onCancel={handelcancel}
      footer={[
        <AddMilestone setopen={setopen}   id={id} />,
      ]}
    />
  </Space>
  )
}

export default AddMilestoneModal
