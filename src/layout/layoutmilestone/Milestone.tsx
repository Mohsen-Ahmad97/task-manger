import { Button, Modal, Space, Table } from "antd";
import { TableProps } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { milistone } from "../../models/General";
import { takeGetMilistone } from "../../Redux/ActionCreator/ActionsCreator";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AddMilestoneModal from "./AddMilestoneModal";
import UpdateMilestoneModal from "./UpdateMilestoneModal";
import { takeDeletemilestone } from "./../../Redux/ActionCreator/ActionsCreator";


const Milestone = () => {
  const [open, setopen] = useState(false);
  const [open1, setopen1] = useState(false);
  const [StartTime, setStartTime] = useState("");
  const [EndTime, setEndTime] = useState("");
  const [Description, setDescription] = useState("");
  const [id, setid] = useState("");
  const  navigate=useNavigate()

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
const { IdMilestone }: any = useParams();
  // console.log("id is ",Id)
  const dispatch = useDispatch();
  const { isSuccess } = useSelector((state: any) => state.message);

  useEffect(() => {
    
    dispatch(takeGetMilistone(IdMilestone));

  
  }, [isSuccess]);
  const { payload, isloading } = useSelector(
    (state: any) => state.millistone
    
  );

  
  console.log(payload);
  const columns: TableProps<milistone>["columns"] = [
    {
      title: "Description",
      dataIndex: "Description",
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
      title: "Id",
      dataIndex: "Id",
      key: "4",
      // hidden: true,
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
                setDescription(record.Description)
              }}
            >
              Update
            </Button>
            <UpdateMilestoneModal
              id={id}
              open1={open1}
              handelcancel1={handelcancel1}
              setopen1={setopen1}
              StartTime={StartTime}
              EndTime={EndTime}
              Description={Description}
            />
            <Button
              onClick={() => {
                // console.log(record.Id);
                Modal.confirm({
                  title: "Are You Sure deete",
                  okText: "yes",
                  cancelText: "No",
                  okType: "danger",
                  onOk: () => {
                    dispatch(takeDeletemilestone(record.Id));
                  },
                });
              }}
            >
              Delete
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
      <Button onClick={showModal}> Create Milestone</Button>
      <AddMilestoneModal
        open={open}
        handelcancel={handelcancel}
        setopen={setopen}
        id={IdMilestone}
      />
      <Table
        style={{ width: "80vw", margin: "20px auto," }}
        loading={isloading}
        dataSource={payload}
        columns={columns}
      />
       <Button
          type="primary"
          style={{ textAlign: "center", marginTop: "20px" }}
          onClick={() => {
            navigate("/Admin");
          }}
        > Back to Mission Page</Button>
   
    </Space>
  );
};

export default Milestone;
