import { Button, Input, Modal, Space, Table, TableProps } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { employees } from "../../../models/Modules";

import {
  takeDeleteEmployees,
  takegetEmployee,
} from "../../../Redux/ActionCreator/ActionsCreator";
import UpdateEmployeeModal from "./UpdateEmployeeModal";
import AddEmployeeModal from "./AddEmployeeModal";
import { DeleteOutlined } from "@ant-design/icons";

const Employees = () => {
  // console.log("s",isSuccess)

  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [SearchByFirstName, setSearchByFirstName] = useState("");

  const { isLoading, employee } = useSelector((state: any) => state.getempl);
  useEffect(() => {
    dispatch(takegetEmployee());
  }, [dispatch]);

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
        console.log(record);
        return (
          <div className="actions">
            <UpdateEmployeeModal data={record} />

            <Button
              style={{ color: "red" }}
              onClick={() => {
            
                Modal.confirm({
                  title: t("Are You Sure delete this employee ?"),
                  okText: t("yes"),
                  cancelText: t("No"),
                  className:'modal-delete',
                  okType: "danger",
                  onOk: () => {
                    dispatch(takeDeleteEmployees(record.Id));
                  },
                });
              }}
 
            >
            <DeleteOutlined/>
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="content employee">
      <div className="items">
        <Input
          placeholder="search"
          onChange={(e) => {
            setSearchByFirstName(e.target.value);
          }}
        />
        <AddEmployeeModal />
      </div>
      <div className="table">
        <Table dataSource={employee} columns={columns} loading={isLoading} />
 
      </div>
    </div>
  );
};

export default Employees;
