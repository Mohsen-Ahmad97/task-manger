import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  changelist,
  filtermission,
  takeDeleteMission,
  takeMission,
} from "../../Redux/ActionCreator/ActionsCreator";
import { useSelector } from "react-redux";
import {
  Button,
  Card,
  Form,
  Input,
  List,
  Modal,
  Select,
  Space,
  Spin,
  Switch,
  Typography,
} from "antd";
import UpdateMissionModal from "./UpdateMissionModal";
import AddMissionModal from "./AddMissionModal";
import Milestone from "../layoutmilestone/Milestone";


const Mission = () => {

  const [open1, setopen1] = useState(false);
  const [open2, setopen2] = useState(false);
  const [id, setid] = useState("");
  const dispatch = useDispatch();

 
  const showModal1 = () => {
    setopen1(true);
  };
  const handelcancel1 = () => {
    setopen1(false);
  };
  const showModal2 = () => {
    setopen2(true);
  };
  const handelcancel2 = () => {
    setopen2(false);
  };
  useEffect(() => {
    dispatch(takeMission());
  }, [dispatch]);
  const { payload, isloading } = useSelector((state: any) => state.miss);
  const [Ascing, setAscing] = useState(true);
  // console.log("dar", data);
  const handelSearch = (e: any) => {
    dispatch(changelist(e.target.value));
  };
  const handelFilter = (e: any) => {
    dispatch(filtermission(e));
  };
  const updatedatasource= Ascing ?[...payload]:[...payload].reverse();
  return (
    <Spin spinning={isloading}>
      <Button
        type="primary"
        style={{ position: "absolute", right: "0", margin: "30px" }}
        onClick={() => {
          showModal1();
        }}
      >
        Add New Mission
      </Button>
      <AddMissionModal
        open1={open1}
        handelcancel1={handelcancel1}
        setopen1={setopen1}
      />

      <List
        grid={{ column: 3 }}
        dataSource={updatedatasource}
        className="list"
        style={{ margin: "20px auto", width: "90%" }}
        header={
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginRight: "10px",
            }}
          >
            <Input.Search
              placeholder="Search By Name"
              style={{ width: 200 }}
              onChange={handelSearch}
            />
            <Space>
              <Select onChange={handelFilter} placeholder="Sort By Name">
                <Select.Option value="name">Name</Select.Option>
                <Select.Option value="date">Date</Select.Option>
              </Select>
              <Switch
                checkedChildren="Asc"
                unCheckedChildren="Desc"
                defaultChecked={Ascing}
                onChange={setAscing}
              ></Switch>
            </Space>
          </div>
        }
        renderItem={(item: any, index: number) => {
          // console.log(item);
          return (
            <Card title={item.Name} key={index}>
              <Form name="Mission" style={{ maxWidth: 600 }} autoComplete="off">
                <Form.Item
                  label="StartTime"
                  style={{ width: "100%" }}
                  rules={[
                    { required: true, message: "Please input  your StartTime" },
                  ]}
                  hasFeedback
                >
                  <Typography>{item.StartTime}</Typography>
                </Form.Item>
                <Form.Item
                  label="EndTime"
                  style={{ width: "100%" }}
                  rules={[
                    { required: true, message: "Please input your  EndTime" },
                  ]}
                  hasFeedback
                >
                  <Typography>{item.EndTime}</Typography>
                </Form.Item>
              </Form>
              <Space
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <UpdateMissionModal
                  record={item}
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
                        dispatch(takeDeleteMission(item.Id));
                      },
                    });
                  }}
                >
                  Delete
                </Button>

                <Button
                  onClick={() => {
                    showModal2();
                    setid(item.Id);
                  }}
                >
                  Show Milestone
                </Button>
                <Modal
                  open={open2}
                  title=" milestone "
                  onCancel={handelcancel2}
                  footer={[<Milestone Idel={id} />]}
                />
              </Space>
            </Card>
          );
        }}
      ></List>
    </Spin>
  );
};
export default Mission;
