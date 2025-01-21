import { Modal, Space } from 'antd'

import AddMission from './AddMission'
import { useTranslation } from 'react-i18next'





const AddMissionModal = ({open1,setopen1,handelcancel1}:any) => {
  const {t}=useTranslation();
  return (
    <Space>
    <Modal
      open={open1}
      title={t("createMission")}
      onCancel={handelcancel1}
      footer={[
        <AddMission setopen={setopen1}   />,
      ]}
    />
  </Space>
  )
}

export default AddMissionModal
