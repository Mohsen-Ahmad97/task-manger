import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Layout, Menu, Typography, notification, theme as antdTheme } from "antd"; // Renamed Ant Design theme import
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

import { toast } from "react-toastify";
import Content from "./content";

const Admin = () => {
  const [select, setSelect] = useState("false");
  const [appTheme, setTheme] = useState("light"); // Renamed state variable to appTheme
  const { message, isSuccess }: any = useSelector((state: any) => state.message);

  useEffect(() => {
    if (!message) {
      toast.dismiss();
    } else if (isSuccess && message) {
      toast.success(message);
    } else {
      toast.error(message);
    }

    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.setAttribute("data-theme", savedTheme);
  }, [isSuccess, message]);

  const [language, setLanguage] = useState<string>("true");


  
  return (
    <div className={language === "true" ? "app-content" : "app-content-rtl"}>
      <Sidebar select={select} />
      <div className="app-content-items">
        <Navbar
          language={language}
          setLanguage={setLanguage}
          select={select}
          setSelect={setSelect}
          theme={appTheme} // Updated to use appTheme
          setTheme={setTheme} // Updated to use setAppTheme
        />
        <Content />
      </div>
    </div>
  );
};

export default Admin;
