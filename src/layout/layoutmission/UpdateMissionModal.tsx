import { Modal, Space } from 'antd'
import React from 'react'
import UpdateMission from './UpdateMision'
import Milestone from '../layoutmilestone/Milestone'

const UpdateMissionModal = ({handelcancel1,open1,setopen1,record}:any) => {
  return (
 
  <Space>
  <Modal
    open={open1}
    title="update mission "
    onCancel={handelcancel1}
    footer={[
      <UpdateMission setopen1={setopen1}  record={record}
       />,
  
    ]}
  />
</Space>
  )
}

export default UpdateMissionModal
