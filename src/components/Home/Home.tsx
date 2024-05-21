import "./Home.css"
import StartLogin from "../Login/StartLogin";
import StartRegister from "./../Register/StartRegister";
import { Divider } from "antd";


const Home = () => {
  return (
    <div
      className=" home "
      
    >
      <StartRegister />
      {/* <Divider type="vertical" style={{background:"white",height:"100%"}} /> */}
      <StartLogin />
    </div>
  );
};

export default Home;
