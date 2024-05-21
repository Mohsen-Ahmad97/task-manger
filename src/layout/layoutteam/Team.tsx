import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Team.css";
import {
  Deleteteam,
  addteam,
  getteam,
  searchByname,
} from "../../Redux/ActionCreator/ActionsCreator";
import {
  Button,
  Card,
  Divider,
  Form,
  Input,
  List,
  Modal,
  Space,
  Spin,
  Switch,
  Typography,
} from "antd";
import { useForm } from "antd/es/form/Form";
import UpdateTeamModal from "./UpdateTeamModal";
import AddEmployeeModal from "./AddEmployeeModal";

const Team = () => {
  const dispatch = useDispatch();
  const [form] = useForm();
  const [open, setopen] = useState(false);
  const [asc, setascing] = useState(false);

  const handelcancel = () => {
    setopen(false);
  };

  
  useEffect(() => {
    dispatch(getteam());
  }, [dispatch]);
  const { isLoading, payload } = useSelector((state: any) => state.team);
const updateteam= asc ? [...payload] :[...payload].reverse()
  return (
    <div className="team">
      <Spin spinning={isLoading}>
        <Space direction="vertical">
          <Space style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              type="primary"
              style={{ width: "200px " }}
              onClick={() => {
                setopen(true);
              }}
            >
              Add Team
            </Button>
            <Input
              placeholder="serch by name"
              onChange={(value: any) => {
                dispatch(searchByname(value.target.value));
              }}
            />
            <Switch
              checkedChildren="Asc"
              defaultChecked
              unCheckedChildren="Desc"
              onChange={setascing}
            ></Switch>
          </Space>
          <Modal
            title="Add New Team"
            open={open}
            onCancel={handelcancel}
            footer={[
              <Form
                form={form}
                onFinish={(values: any) => {
                  form.validateFields();
                  dispatch(addteam(values.Name));
                  form.resetFields();
                  setopen(false);
                }}
              >
                <Form.Item
                  label="Name Team"
                  name="Name"
                  rules={[
                    {
                      required: true,
                      message: "please input teame name ",
                    },
                  ]}
                >
                  <Input placeholder="Input Team Name "></Input>
                </Form.Item>
                <Button htmlType="submit"> Add </Button>
              </Form>,
            ]}
          ></Modal>

          <List
            grid={{ column: 3}}
            dataSource={updateteam}
            renderItem={(item: any, key: any) => {
              const { EmployeeTeam } = item;
              console.log("item is ", EmployeeTeam);
              return (
                <Card
                  key={key}
                  style={{ margin: "5px " }}
                  title={` Name Team :   ${item.Name}`}
                  className="card"
                  actions={[
                    <Button
                      style={{ color: "red" }}
                      onClick={() => {
                        // console.log(record.Id);
                        Modal.confirm({
                          title: "Are You Sure delete",
                          okText: "yes",
                          cancelText: "No",
                          okType: "danger",
                          onOk: () => {
                            dispatch(Deleteteam(item.Id));
                          },
                        });
                      }}
                    >
                      delete{" "}
                    </Button>,

                    <UpdateTeamModal data={item} />,
                  ]}
                >
                  <Space direction="vertical">
                    <AddEmployeeModal item={item} />
                    <Typography.Title level={4}>
                      Employee Name :
                    </Typography.Title>
                    {EmployeeTeam.map((ele: any) => {
                      return (
                        <>
                          <Typography>FirstName: {ele.FirstName}</Typography>
                          <Typography>LastName: {ele.LastName}</Typography>

                          <Divider />
                        </>
                      );
                    })}
                  </Space>
                </Card>
              );
            }}
          ></List>
        </Space>
      </Spin>
    </div>
  );
};

export default Team;
