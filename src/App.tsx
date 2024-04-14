import { Route, Routes } from "react-router-dom";
import Home from "./component/2-Home/Home";
import Main from "./component/1-Main/Main";
import Register from "./component/3-Register/Register";
import ConfirmEmail from "./component/3-Register/ConfirmEmail";
import CompleteRegister from "./component/3-Register/completeRegister";
import Login from "./component/4-Login/Login";
import ResetPassword from "./component/4-Login/ResetPassword";
import Employees from "./component/5-Employees/Employees";
import Header from "./component/Header";



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<Home/>} />
          <Route path="Register" element={<Register/>}/>
          <Route path="confirmPassword" element={<ConfirmEmail/>}/>
          <Route path="completeRegister" element={<CompleteRegister/>}/>
          <Route path="Login" element={<Login/>}/>
          <Route path="Login/resetPassword" element={<ResetPassword/>}/>
        </Route>
        <Route path="employees" element={<Employees/>}/>
      </Routes>
    </div>
  );
}

export default App;
