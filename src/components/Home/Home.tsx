import { Button, Space } from "antd";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Home = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();
  return (
    <div className=" Home">
      <Space
        direction="vertical"
        style={{ width: "80%", borderRadius: "50px" }}
      >
        <Button
          block
          style={{ borderRadius: "50px" }}
          onClick={() => {
            navigate("/Register");
          }}
        >
          {t("Register")}
        </Button>
        <Button
          block
          style={{ borderRadius: "50px" }}
          onClick={() => {
            navigate("/Login");
          }}
        >
          {t("Login")}
        </Button>
      </Space>
    </div>
  );
};

export default Home;
