import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Deleteteam,
  addteam,
  getteam,
  searchByname,
} from "../../../Redux/ActionCreator/ActionsCreator";
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
} from "antd";
import { useForm } from "antd/es/form/Form";
import UpdateTeamModal from "./UpdateTeamModal";
import AddEmployeeModal from "./AddEmployeeModal";
import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

const Team = () => {
  const dispatch = useDispatch();
  const [form] = useForm();
  const [open, setOpen] = useState(false);
  const [asc, setAsc] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState("");

  const handleCancel = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getteam());
  }, [dispatch]);

  const { isLoading, payload } = useSelector((state: any) => state.team);

  return (
    <div className="team">
       <Spin spinning={isLoading}>

      <div className="items">
        <Input.Search
          placeholder="Search"
          onChange={(value: any) => {
            dispatch(searchByname(value.target.value));
          }}
        />
         
        <Button
          type="primary"
          onClick={() => {
            setOpen(true);
          }}
        >
          <PlusOutlined />
        </Button>

        <Modal
          title="Add New Team"
          open={open}
          onCancel={handleCancel}
          footer={[
            <Form
              form={form}
              onFinish={(values: any) => {
                form.validateFields();
                dispatch(addteam(values.Name));
                form.resetFields();
                setOpen(false);
              }}
            >
              <Form.Item
                label="Name Team"
                name="Name"
                rules={[
                  {
                    required: true,
                    message: "Please input team name",
                  },
                ]}
              >
                <Input placeholder="Input Team Name" />
              </Form.Item>
              <Button htmlType="submit">Add</Button>
            </Form>,
          ]}
        />
      </div>

      {/* Responsive List */}
      <List
        grid={{
          gutter: 16, // Space between items
          xs: 1, // 1 column on extra-small screens (e.g., phones)
          sm: 2, // 2 columns on small screens (e.g., tablets)
          md: 3, // 3 columns on medium screens (e.g., laptops)
          lg: 4, // 4 columns on large screens (e.g., desktops)
          xl: 4, // 4 columns on extra-large screens
        }}
        dataSource={payload}
        renderItem={(item: any) => {
          const { EmployeeTeam } = item;
          return (
            <List.Item>
              <Card
                title={` ${item.Name}`}
                actions={[
                  <Button
                    style={{ color: "red" }}
                    onClick={() => {
                      Modal.confirm({
                        title: "Are you sure you want to delete?",
                        okText: "Yes",
                        cancelText: "No",
                        okType: "danger",
                        onOk: () => {
                          dispatch(Deleteteam(item.Id));
                        },
                      });
                    }}
                  >
                    Delete
                  </Button>,
                  <UpdateTeamModal data={item} />,
                ]}
              >
                <Space direction="vertical">
                  <AddEmployeeModal item={item} />
                  <div className="employees-items">
                    <span>Employee Name:</span>
                    <Select
                      value={selectedEmployee}
                      onChange={(value) => setSelectedEmployee(value)}
                    >
                      {EmployeeTeam.map((ele: any, index: any) => (
                        <Option key={index} value={ele.FirstName}>
                          {`${ele.FirstName} ${ele.LastName}`}
                        </Option>
                      ))}
                    </Select>
                  </div>
                </Space>
              </Card>
            </List.Item>
          );
        }}
      />
      </Spin>
    </div>
  );
};

export default Team;
