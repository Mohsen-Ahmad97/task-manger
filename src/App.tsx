import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Main from "./component/Main/Main";
import Register from "./component/Register/Register";
import ConfirmEmail from "./component/Register/ConfirmEmail";
import CompleteRegister from "./component/Register/completeRegister";
import Login from "./component/Login/Login";
import ResetPassword from "./component/Login/ResetPassword";
import Header from "./component/Header/Header";
import PrivateRoutes from "./component/Login/PrivateRoutes";
import Employees from "./component/Employees/Employees";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="Register" element={<Register />} />
          <Route path="confirmPassword" element={<ConfirmEmail />} />
          <Route path="completeRegister" element={<CompleteRegister />} />
          <Route path="Login" element={<Login />} />
          <Route path="Login/resetPassword" element={<ResetPassword />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="employees" element={<Employees />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
