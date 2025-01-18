import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Layout, Menu, Typography, notification, theme } from "antd";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

import { toast } from "react-toastify";
import Content from "./content";




const Admin = () => {
  const [select,setSelect]=useState('false');
  const { message, isSuccess }: any = useSelector(
    (state: any) => state.message
  );
  useEffect(() => {
    if (!message) {
      toast.dismiss();
    } else if (isSuccess && message) {
      toast.success(message);
    } else toast.error(message);
  }, [isSuccess, message]);
  const [language, setLanguage] = useState<string>("true");
  return (

    <div className={language==="true" ? "app-content" :"app-content-rtl"}>
      <Sidebar  select={select}/>
      <div className="app-content-items">
        <Navbar language={language} setLanguage={setLanguage} select={select} setSelect={setSelect} />
        <Content/>
      </div>
    </div>
  );
};

export default Admin;
