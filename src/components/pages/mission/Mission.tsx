import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  changelist,
  filtermission,
  takeMission,
} from "../../../Redux/ActionCreator/ActionsCreator";
import { useSelector } from "react-redux";
import { Button, Input, Spin } from "antd";

import AddMissionModal from "./AddMissionModal";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

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
  console.log(payload);
  const [Ascing, setAscing] = useState(true);
  // console.log("dar", data);
  const handelSearch = (e: any) => {
    dispatch(changelist(e.target.value));
  };
  const handelFilter = (e: any) => {
    dispatch(filtermission(e));
  };
  const [SearchByFirstName, setSearchByFirstName] = useState("");
  // const updatedatasource= Ascing ?[...payload]:[...payload].reverse();
  return (
    <Spin spinning={isloading}>
      <div className="mission">
        <div className="items">
          <Input.Search
            placeholder="Search By Name"
            style={{ width: 200 }}
            onChange={handelSearch}
          />
          <Button
            style={{ position: "absolute", right: "0", margin: "30px" }}
            onClick={() => {
              showModal1();
            }}
          >
            <PlusOutlined />
          </Button>
          <AddMissionModal
            open1={open1}
            handelcancel1={handelcancel1}
            setopen1={setopen1}
          />
        </div>
        <div className="mission-content">
          <div className="card">
            <div>Name</div>
            <div>StartTime</div>
            <div>EndTime</div>
            <div>Actions</div>
            <div>Milestones</div>
          </div>
          {payload.map((item: any) => {
            return (
              <div className="card">
                <div>{item.Name}</div>
                <div>{item.StartTime}</div>
                <div>{item.EndTime}</div>
                <div className="actions-icons">
                  <DeleteOutlined />
                  <DeleteOutlined />
               
                </div>
                <div>button</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* <List
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
      ></List> */}
    </Spin>
  );
};
export default Mission;
