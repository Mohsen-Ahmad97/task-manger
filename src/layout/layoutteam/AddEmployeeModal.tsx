import { Button, Modal, Select, Space, Typography } from "antd";
import {
  Deleteemployeeteam,
  addemployeetoteam,
} from "../../Redux/ActionCreator/ActionsCreator";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";


const AddEmployeeModal = (props: any) => {
  const dispatch = useDispatch();
  const [open, setopen] = useState(false);
  const [open1, setopen1] = useState(false);
  const [id, setid] = useState("");
  const { employee } = useSelector((state: any) => state.getempl);
  console.log(employee);

  return (
    <Space direction="horizontal">
      <Button
        type="primary"
        onClick={() => {
          setopen(true);
        }}
      >
        Add Employee
      </Button>
      <Button
        style={{ color: "red", marginLeft: "30px " }}
        onClick={() => {
          setopen1(true);
        }}
      >
        Delete
      </Button>
      <Modal
        open={open1}
        onCancel={() => {
          setopen1(false);
        }}
        footer={[
          <Space>
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
        <Space>
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
        </Space>
      </Modal>
    </Space>
  );
};

export default AddEmployeeModal;
