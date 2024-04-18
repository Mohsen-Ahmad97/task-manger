import { Alert, Button, Modal, Space, Spin, Table, TableProps } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  takeDeleteEmployees,
  takegetEmployee,
} from "../Redux/ActionCreator/ActionsCreator";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddEmployees from "./AddEmployees";
import UpdateEmployee from "./UpdateEmployee";
import { useTranslation } from "react-i18next";
import { employees } from "../Models/Modules";

const Employees = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [id, setid] = useState("");
  useEffect(() => {
    dispatch(takegetEmployee());
  }, [dispatch]);

  const { messageaddemployee, messagupdateemployee, isLoading, employee } =
    useSelector((state: any) => state.getempl);
  console.log("isloading", isLoading);
  console.log("em", employee);
  const showModal = () => {
    setOpen(true);
  };
  const showModal1 = () => {
    setOpen1(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  const handleCancel1 = () => {
    setOpen1(false);
  };
  const columns: TableProps<employees>["columns"] = [
    {
      title: t("ID"),
      dataIndex: "Id",
      key: "1",
    },
    {
      title: t("FirstName"),
      dataIndex: "FirstName",
      key: "2",
    },
    {
      title: t("LastName"),
      dataIndex: "LastName",
      key: "3",
    },
    {
      title: t("Email"),
      dataIndex: "Email",
      key: "4",
    },
    {
      title: t("Action"),
      key: "5",
      render: (record) => {
        return (
          <Space>
            <Button
              onClick={() => {
                showModal1();
                setid(record.Id);
              }}
            >
              {t("Update")}
            </Button>
            <Modal
              open={open1}
              title={t("Update Employee")}
              onCancel={handleCancel1}
              footer={[<UpdateEmployee id={id} />]}
            />

            <Button
              onClick={() => {
                console.log(record.Id);
                Modal.confirm({
                  title: t("Are You Sure deete"),
                  okText: t("yes"),
                  cancelText: t("No"),
                  okType: "danger",
                  onOk: () => {
                    dispatch(takeDeleteEmployees(record.Id));
                  },
                });
              }}
              type="primary"
            >
              {t("Delete")}
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <Spin spinning={isLoading}>
      <Space
        direction="vertical"
        style={{
          width: "100vw",
          margin: "20px auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        {messageaddemployee && (
          <Alert message={t("messageaddemployee")} type="success" />
        )}
        {messagupdateemployee && (
          <Alert message={t("messagupdateemployee")} type="success" />
        )}
        <Button onClick={showModal}>{t("Add new Employee")}</Button>
        <Modal
          open={open}
          title={t("Add new Employee")}
          onCancel={handleCancel}
          footer={[<AddEmployees />]}
        />
        <Table
          dataSource={employee}
          columns={columns}
          style={{ width: "80vw", margin: "20px auto," }}
        />
        <Button
          type="primary"
          style={{ width: "100%" }}
          onClick={() => {
            navigate("/");
          }}
        >
          {t("Back To Main Page")}
        </Button>
      </Space>
    </Spin>
  );
};

export default Employees;
