import { Button, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const StartLogin = () => {
  const { Title, Text } = Typography;
  const navigate = useNavigate();
  return (
    <div className="startLogin">
      <Space
        direction="vertical"
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          padding: "50px",
        }}
      >
        <Title level={3} style={{ fontStyle: "italic" }}>
          {" "}
          Welcome To Website{" "}
        </Title>

        <Button
          onClick={() => {
            navigate("Login");
          }}
        >
          {" "}
          Sign In
        </Button>
      </Space>
    </div>
  );
};

export default StartLogin;
