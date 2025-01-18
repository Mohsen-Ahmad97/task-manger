import {
  Button,
  Card,
  Form,
  List,
  Modal,
  Space,
  Spin,
  Table,
  Typography,
} from "antd";
import { TableProps } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { milistone } from "../../../models/General";
import { takeGetMilistone } from "../../../Redux/ActionCreator/ActionsCreator";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AddMilestoneModal from "./AddMilestoneModal";
import UpdateMilestoneModal from "./UpdateMilestoneModal";
import { takeDeletemilestone } from "../../../Redux/ActionCreator/ActionsCreator";

const Milestone = (props: any) => {
  // console.log("Id is ", props.id);
  const [open, setopen] = useState(false);

  const navigate = useNavigate();

  const showModal = () => {
    setopen(true);
  };
  const handelcancel = () => {
    setopen(false);
  };
  // let [searchParams] = useSearchParams();
  // let templateId = Number(searchParams.get("templateId"));

  const dispatch = useDispatch();

  useEffect(() => {
    if (props.Idel) {
      dispatch(takeGetMilistone(props.Idel));
    }
  }, [props.Idel]);
  const { isSuccess } = useSelector((state: any) => state.message);
  const { payload, isloading } = useSelector((state: any) => state.millistone);
  console.log("p", payload);
  console.log("Id", props.Idel);
  return (
    <Spin spinning={isloading}>
      <Button
        type="primary"
        onClick={() => {
          showModal();
        }}
      >
        Add New Milestone
      </Button>
      <AddMilestoneModal
        open={open}
        handelcancel={handelcancel}
        setopen={setopen}
        id={props.Idel}
      />
      <List
        grid={{ column: 3 }}
        dataSource={payload}
        renderItem={(item: any, index: number) => {
          console.log(item);
          return (
            <Card title={item.Name} key={index}>
              <Form
                name="Milestone"
                style={{ maxWidth: 600 }}
                autoComplete="off"
              >
                <Form.Item style={{ textAlign: "center" }}>
                  <Typography>{item.Description}</Typography>
                </Form.Item>
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
                <UpdateMilestoneModal Id={props.Idel} data={item} />
                <Button
                  style={{ color: "red", marginLeft: -100 }}
                  onClick={() => {
                    console.log("d is", item.Id);
                    Modal.confirm({
                      title: "Are You Sure deete",
                      okText: "yes",
                      cancelText: "No",
                      okType: "danger",
                      onOk: () => {
                        dispatch(
                          takeDeletemilestone({ id: item.Id, Id: props.Idel })
                        );
                      },
                    });
                  }}
                >
                  Delete
                </Button>
              </Space>
            </Card>
          );
        }}
      ></List>
    </Spin>
  );
};

export default Milestone;
