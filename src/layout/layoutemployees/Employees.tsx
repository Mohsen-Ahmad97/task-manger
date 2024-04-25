import { Button, Input, Modal, Space, Table, TableProps } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { employees } from "../../models/Modules";

import {
  takeDeleteEmployees,
  takegetEmployee,
} from "../../Redux/ActionCreator/ActionsCreator";
import UpdateEmployeeModal from "../../components/Employees/UpdateEmployeeModal";
import AddEmployeeModal from "../../components/Employees/AddEmployeeModal";
import { ToastContainer, toast } from "react-toastify";

const Employees = () => {
  

  // console.log("s",isSuccess)
  useEffect(() => {
    dispatch(takegetEmployee());
   
  }, []);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open1, setOpen1] = useState(false);
  const [id, setid] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [SearchByFirstName, setSearchByFirstName] = useState("");

  const { isLoading, employee } = useSelector((state: any) => state.getempl);
 
  const showModal1 = () => {
    setOpen1(true);
  };

  const handleCancel1 = () => {
    setOpen1(false);
  };
  const columns: TableProps<employees>["columns"] = [
    {
      title: t("ID"),
      dataIndex: "Id",
      key: "1",
      hidden: true,
    },
    {
      title: t("FirstName"),
      dataIndex: "FirstName",
      key: "2",
      filteredValue: [SearchByFirstName],
      onFilter: (value: any, record) => {
        return (
          String(record.FirstName)
            .toLocaleLowerCase()
            .includes(value.toLocaleLowerCase()) ||
          String(record.LastName)
            .toLocaleLowerCase()
            .includes(value.toLocaleLowerCase())
        );
      },
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
        // console.log(record)
        return (
          <Space>
            <Button
              onClick={() => {
                showModal1();
                setid(record.Id);
                setFirstName(record.FirstName);
                setLastName(record.LastName);
              }}
            >
              {t("Update")}
            </Button>

            <UpdateEmployeeModal
              open={open1}
              id={id}
              setopen1={setOpen1}
              handelcancel1={handleCancel1}
              FirstName={FirstName}
              LastName={LastName}
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
    <Space
      direction="vertical"
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <AddEmployeeModal />
      <Input.Search
        placeholder="serch by FirstName Or LastName"
        onChange={(e) => {
          setSearchByFirstName(e.target.value);
        }}
      ></Input.Search>
      <Table
        dataSource={employee}
        columns={columns}
        loading={isLoading}
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
  );
};

export default Employees;
