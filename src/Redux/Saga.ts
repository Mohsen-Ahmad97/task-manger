import { all } from "redux-saga/effects";
import { WatachRegister } from "./Watches/WatchRegister";
import { WatachConfirmEmail } from "./Watches/WatchConfirmEmail";
import { WatchResendCode } from "./Watches/WatcHResendCode";
import { WatachCompleteRegister } from "./Watches/WatchCompleteRegister";
import { WatachLogin } from "./Watches/WatchLogin";
import { WatachForgetPassword } from "./Watches/WatchForgetPassword";
import { WatachResetPassword } from "./Watches/WatchResetPassword";
import { WatachgetEmployee } from "./Watches/WatchGetEmployees";
import { WatachaddEmployee } from "./Watches/WatchAddEmployees";
import { WatachupdateEmployee } from "./Watches/WatchUpdateEmployee";
import { WatachdeleteEmployee } from "./Watches/WatchDeleteEmployees";



function* Saga() {
  yield all([
    WatachRegister(),
    WatachConfirmEmail(),
    WatchResendCode(),
    WatachCompleteRegister(),
    WatachLogin(),
    WatachForgetPassword(),
    WatachResetPassword(),
    WatachgetEmployee(),
    WatachaddEmployee(),
    WatachupdateEmployee(),
    WatachdeleteEmployee()
    
  ]);
}
export default Saga;
