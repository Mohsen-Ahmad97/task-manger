import { Drawer, Select, Switch } from "antd";
import i18n from "../../Local/I18N";
import { useTranslation } from "react-i18next";

const DrawerHeade = (props: any) => {
  const { t } = useTranslation();
  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };
  const handelMode = () => {
    props.prop.props.setDarkMode(!props.prop.props.DarkMode);
  };
  return (
    <div>
      <Drawer
        open={props.prop.open}
        onClose={() => {
          props.prop.setopen(false);
        }}
        bodyStyle={{ background: "white", height: "100px" }}
        placement="left"
      >
        <Select
          placeholder="Language "
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
      </Drawer>
    </div>
  );
};

export default DrawerHeade;
