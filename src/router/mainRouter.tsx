import { Route, Routes } from "react-router-dom";
import Main from "../layout/layoutregisterandlogin/Main";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import ConfirmEmail from "../components/Register/ConfirmEmail";
import CompleteRegister from "../components/Register/completeRegister";
import Login from "../components/Login/Login";
import ResetPassword from "../components/Login/ResetPassword";
import PrivateRoutes from "./PrivateRoutes";
import Employees from "../layout/layoutemployees/Employees";
import Admin from "../layout/layoutadmin/Admin";
import Mission from "../layout/layoutmission/Mission";
import Milestone from "../layout/layoutmilestone/Milestone";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Hader from "../components/Header/Hader";
import Team from "../layout/layoutteam/Team";

const MainRouter = () => {
  return (
        
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="Register" element={<Register />} />
            <Route path="confirmEmail" element={<ConfirmEmail />} />
            <Route path="completeRegister" element={<CompleteRegister />} />
            <Route path="Login" element={<Login />} />
            <Route path="Login/resetPassword" element={<ResetPassword />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="Admin" element={<Admin />}>
              <Route path="employees" element={<Employees />} />
              <Route path="team" element={<Team />} />
            
              <Route index element={<Mission />} />
              <Route path=":templateId" element={<Milestone />} />
            </Route>
          </Route>
        </Routes>
         
    
  );
};

export default MainRouter;
