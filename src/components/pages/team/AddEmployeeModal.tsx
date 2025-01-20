import { Button, Modal, Select, Space, Typography } from "antd";
import {
  Deleteemployeeteam,
  addemployeetoteam,
} from "../../../Redux/ActionCreator/ActionsCreator";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";


const AddEmployeeModal = (props: any) => {
  const dispatch = useDispatch();
  const [open, setopen] = useState(false);
  const [open1, setopen1] = useState(false);
  const [id, setid] = useState("");
  const { employee } = useSelector((state: any) => state.getempl);
  console.log(employee);

  return (
    <Space direction="horizontal" >
      <Button
      
        onClick={() => {
          setopen(true);
        }}
      >
  <PlusOutlined/>
      </Button>
      <Button
        style={{ color: "red", marginLeft: "30px " }}
        onClick={() => {
          setopen1(true);
        }}
      >
        <DeleteOutlined/>
      </Button>
      <Modal
      
        open={open1}
        onCancel={() => {
          setopen1(false);
        }}
        footer={[
          <Space className="team-delete">
            <Typography.Text>Select Employee </Typography.Text>
            <Select
              style={{ width: "100px" }}
              onChange={(value: any) => {
                setid(value);
              }}
            >
              {employee.map((employe: any) => {
                return (
                  <Select.Option value={employe.Id}>
                    {employe.FirstName}
                  </Select.Option>
                );
              })}
            </Select>
            <Button
              onClick={() => {
                dispatch(
                  Deleteemployeeteam({
                    values: { IdTeam: props.item.Id, IdEmploe: id },
                  })
                );
                setopen1(false);
              }}
            >
              delete
            </Button>
          </Space>,
        ]}
      />

      <Modal
     
        open={open}
        onCancel={() => {
          setopen(false);
        }}
        okText="add"
        onOk={() => {
          dispatch(
            addemployeetoteam({ values: { IdEmploe: props.item.Id, id: id } })
          );
          setopen(false);
        }}
      >
        <div className="add-team-employee">
          <Typography.Text>Select Employee </Typography.Text>
          <Select
            style={{ width: "100px" }}
            onChange={(value: any) => {
              setid(value);
            }}
          >
            {employee.map((employe: any) => {
              return (
                <Select.Option value={employe.Id}>
                  {employe.FirstName}
                </Select.Option>
              );
            })}
          </Select>
        </div>
      </Modal>
    </Space>
  );
};

export default AddEmployeeModal;
