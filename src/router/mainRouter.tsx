import { Route, Routes } from "react-router-dom";
import Main from "../layout/auth/Main";
import Register from "../components/authentication/Register/Register";
import ConfirmEmail from "../components/authentication/Register/ConfirmEmail";
import CompleteRegister from "../components/authentication/Register/completeRegister";
import Login from "../components/authentication/Login/Login";
import ResetPassword from "../components/authentication/Login/ResetPassword";
import PrivateRoutes from "./PrivateRoutes";
import Employees from "../components/pages/employees/Employees";

import Mission from "../components/pages/mission/Mission";
import Milestone from "../components/pages/milestone/Milestone";
import Team from "../components/pages/team/Team";
import Admin from "../layout/admin/Admin";

const MainRouter = () => {
  return (
        
        <Routes>
          <Route path="/" element={<Main />}>
            {/* <Route index element={<Home />} /> */}
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="confirmEmail" element={<ConfirmEmail />} />
            <Route path="completeRegister" element={<CompleteRegister />} />
        
            <Route path="Login/resetPassword" element={<ResetPassword />} />
          </Route>
          {/* <Route element={<PrivateRoutes />}> */}
            <Route path="admin" element={<Admin />}>
              <Route  index  element={<Employees />} />
              <Route path="team" element={<Team />} />
              <Route path="mission" element={<Mission />} />
              <Route path=":templateId" element={<Milestone />} />
            {/* </Route> */}
          </Route>
        </Routes>
         
    
  );
};

export default MainRouter;
