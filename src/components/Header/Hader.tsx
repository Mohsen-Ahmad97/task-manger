import { Layout, Select, Space, Switch } from "antd";
import i18n from "../../Local/I18N";
import { useTranslation } from "react-i18next";
import { Header } from "antd/es/layout/layout";

import { MenuOutlined } from "@ant-design/icons";
import DrawerHeade from "./DrawerHeade";
import { useState } from "react";
const Hader = (props: any) => {
  const[open,setopen]=useState(false)
  const { t } = useTranslation();
  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };
  const handelMode = () => {
    props.setDarkMode(!props.DarkMode);
  };
  return (
    <Layout style={{ background: "none", marginBottom: 20 }}>
      <Header style={{ background: "none" }}>
        <Space
          style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
          }}
          className="header"
        >
          <MenuOutlined className="menuIcon" onClick={
            () => {
         setopen(true)
            }
            
            } />
           <DrawerHeade   prop={{props,open,setopen}} />
          <Space className="selesctswitch">

          <Select
            defaultValue={t("language")}
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Select.Option value="ar">{t("Arabic")}</Select.Option>
            <Select.Option value="en">{t("English")}</Select.Option>
          </Select>
          <Switch
            checkedChildren="dark"
            unCheckedChildren="light"
            onChange={handelMode}
          ></Switch>
          </Space>
        </Space>
      </Header>
    </Layout>
  );
};

export default Hader;
