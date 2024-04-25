import { Modal, Space } from 'antd'
import React from 'react'
import UpdateMission from './UpdateMision'
import Milestone from '../layoutmilestone/Milestone'

const UpdateMissionModal = ({handelcancel1,open1,id,setopen1,StartTime,EndTime,Name}:any) => {
  return (
 
  <Space>
  <Modal
    open={open1}
    title="update mission "
    onCancel={handelcancel1}
    footer={[
      <UpdateMission setopen1={setopen1} id={id}  StartTime={StartTime}
       EndTime={EndTime}
       Name={Name}
       />,
  
    ]}
  />
</Space>
  )
}

export default UpdateMissionModal
