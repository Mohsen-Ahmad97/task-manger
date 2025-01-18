import { Button, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;
const StartRegister = () => {
  const navigate = useNavigate();
  return (
    <div className="startregister">
      <Space
        direction="vertical"
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Title
          level={2}
          style={{
            textAlign: "center",
            color: "blue",
          }}
        >
          Create New Account
        </Title>
        <Text> To Create Please Enter On Create Account </Text>
        <Button
          style={{ color: "blue" }}
          onClick={() => {
            navigate("Register");
          }}
        >
          create account
        </Button>
      </Space>
    </div>
  );
};

export default StartRegister;
