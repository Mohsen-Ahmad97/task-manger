import { Select} from "antd";
import i18n from "../Local/I18N";
import { useTranslation } from "react-i18next";


const Header = () => {
  const {t}=useTranslation();
    const handleChange=(value:string)=>{
      
    i18n.changeLanguage(value)
    }
  return (
    <div style={{ textAlign: "center", margin: "20px auto" }}>
      <Select
        defaultValue="language"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Select.Option value="ar">{t("Arabic")}</Select.Option>
        <Select.Option value="en">{t("English")}</Select.Option>
      </Select>
    </div>
  );
};

export default Header;
