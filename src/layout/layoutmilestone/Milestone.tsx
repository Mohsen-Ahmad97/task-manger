import { Button, Modal, Space, Table } from "antd";
import { TableProps } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { milistone } from "../../models/General";
import { takeGetMilistone } from "../../Redux/ActionCreator/ActionsCreator";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
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
  const navigate = useNavigate();

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

  let [searchParams] = useSearchParams();
  let templateId = Number(searchParams.get("templateId"));
  console.log("id is ", templateId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (templateId) {
      dispatch(takeGetMilistone(templateId));
    }
  }, [templateId]);
  const { isSuccess } = useSelector((state: any) => state.message);
  const { payload, isloading } = useSelector((state: any) => state.millistone);

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
              style={{ color: "green" }}
              onClick={() => {
                // console.log("id is :", record.Id);
                showModal1();
              }}
            >
              Update
            </Button>
            <UpdateMilestoneModal
              open1={open1}
              handelcancel1={handelcancel1}
              setopen1={setopen1}
              data={record}
              Id={templateId}
            />
            <Button
              style={{ color: "red" }}
              onClick={() => {
                // console.log(record.Id);
                Modal.confirm({
                  title: "Are You Sure deete",
                  okText: "yes",
                  cancelText: "No",
                  okType: "danger",
                  onOk: () => {
                    dispatch(
                      takeDeletemilestone(
                         { id: record.Id, Id: templateId },
                      )
                    );
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
        id={templateId}
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
      >
        {" "}
        Back to Mission Page
      </Button>
    </Space>
  );
};

export default Milestone;
