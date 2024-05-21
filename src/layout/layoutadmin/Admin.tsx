import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Layout, Menu, Typography, notification, theme } from "antd";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import "./Admin.css";
const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    <NavLink to={"/Admin/employees"}>employee</NavLink>,
    "1",
    <UserOutlined />
  ),
  getItem(<NavLink to={"/Admin"}>mission</NavLink>, "2", <UserOutlined />),
  getItem(<NavLink to={"/Admin/team"}>team</NavLink>, "3", <UserOutlined />),
];

const Admin = () => {
  const [selectmenue] = useState("");
  const [collapsed, setCollapsed] = useState(false);
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
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ background: "none" }}
        className="sidebar"
      >
        <Menu defaultSelectedKeys={[selectmenue]} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Content>
          <div
            style={{
              minHeight: 360,
            }}
            className="layoutadmin"
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
      <ToastContainer />
    </Layout>
  );
};

export default Admin;
