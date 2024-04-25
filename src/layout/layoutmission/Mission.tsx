import { Button, Modal, Space, Table, TableProps, notification } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  takeDeleteMission,
  takeMission,
} from "../../Redux/ActionCreator/ActionsCreator";
import { useSelector } from "react-redux";
import AddMissionModal from "./AddMissionModal";
import UpdateMissionModal from "./UpdateMissionModal";
import { mission } from "../../models/General";
import { useNavigate } from "react-router-dom";

const Mission = () => {
  const dispatch = useDispatch();
  const [open, setopen] = useState(false);
  const [open1, setopen1] = useState(false);
  const [open2, setopen2] = useState(false);

  const [StartTime, setStartTime] = useState("");
  const [EndTime, setEndTime] = useState("");
  const [Name, setName] = useState("");
  const navigate = useNavigate();

  const [id, setid] = useState("");
  const showModal = () => {
    setopen(true);
  };
  const handelcancel = () => {
    setopen(false);
  };
  const showModal1 = () => {
    setopen1(true);
  };
  const handelcancel1 = () => {
    setopen1(false);
  };
  const showModal2 = () => {
    setopen2(true);
  };
  
  useEffect(() => {
    dispatch(takeMission());
  }, [dispatch]);
  const { payload, isloading } = useSelector((state: any) => state.miss);

  const columns: TableProps<mission>["columns"] = [
    {
      title: "MissionName",
      dataIndex: "Name",
      key: "1",
    },
    {
      title: "StartTime",
      dataIndex: "StartTime",
      key: "2",
    },
    {
      title: "EndTime",
      dataIndex: "EndTime",
      key: "3",
    },
    {
      title: "Employee Id",
      dataIndex: "Id",
      key: "4",
      hidden: true,
    },
    {
      title: "Action",
      key: "4",
      render: (record) => {
        // console.log(record)
        return (
          <Space>
            <Button
              onClick={() => {
                //  console.log("id is :",record.Id)
                setid(record.Id);
                showModal1();
                setStartTime(record.StartTime);
                setEndTime(record.EndTime);
                setName(record.Name);
              }}
            >
              Update
            </Button>
            <UpdateMissionModal
              id={id}
              open1={open1}
              handelcancel1={handelcancel1}
              setopen1={setopen1}
              StartTime={StartTime}
              EndTime={EndTime}
              Name={Name}
            />
            <Button
              type="primary"
              onClick={() => {
                console.log(record.Id);
                Modal.confirm({
                  title: "Are You Sure deete",
                  okText: "yes",
                  cancelText: "No",
                  okType: "danger",
                  onOk: () => {
                    dispatch(takeDeleteMission(record.Id));
                  },
                });
              }}
            >
              Delete
            </Button>
            <Button
              type="default"
              onClick={() => {
                navigate(`/Admin/${record.Id}`);
                showModal2();
              }}
            >
              Milestones
            </Button>
          </Space>
        );
      },
    },
  ];
  return (
    <Space
      direction="vertical"
      style={{ alignItems: "center", display: "flex", width: "100%" }}
    >
      <Button onClick={showModal}> Create Mission</Button>
      <AddMissionModal
        open={open}
        handelcancel={handelcancel}
        setopen={setopen}
      />
      <Table
        style={{ width: "80vw", margin: "20px auto," }}
        loading={isloading}
        dataSource={payload}
        columns={columns}
      />
      <Button
        type="primary"
        style={{ width: "100%" }}
        onClick={() => {
          navigate("/");
        }}
      >
        Back To Main Page
      </Button>
    </Space>
  );
};

export default Mission;
