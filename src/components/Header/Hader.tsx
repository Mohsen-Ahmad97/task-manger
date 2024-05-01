import { Button, Layout, Select, Space } from "antd";
import i18n from "../../Local/I18N";
import { useTranslation } from "react-i18next";
import { Header } from "antd/es/layout/layout";
import "./Hader.css"
const Hader = (props: any) => {
  const { t } = useTranslation();
  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };
  const handdelMode = () => {
    props.setDarkMode(!props.DarkMode);
  };
  return (
    <Layout style={{ background: "none",marginBottom:20}} >
      <Header style={{ background: "none" }}    >
        <Space
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
          }}
          className="header"
        
        >
          <Select
            defaultValue={t("language")}
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Select.Option value="ar">{t("Arabic")}</Select.Option>
            <Select.Option value="en">{t("English")}</Select.Option>
          </Select>
          <Button onClick={handdelMode}>change mode color</Button>
        </Space>
      </Header>
    </Layout>
  );
};

export default Hader;
