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
import { WatachGetMission } from "./Watches/WatchGetMission";
import { WatachCreateMission } from "./Watches/WatchCreateMission";
import { WatachUpdateMission } from "./Watches/WatchUpdateMission";
import { WatachDeleteMission } from "./Watches/watchDeleteMission";
import { WatachCreateMilestone } from "./Watches/WatchCreateMilestone";
import { WatachGetMilistone } from "./Watches/WatchGetMilistone";
import { WatachUpdateMilestone } from "./Watches/WatchUpdateMilestone";
import { WatachDeleteMilestone } from "./Watches/watchDeleteMilestone";
import { WatachFiltermission, Watachgetsearch } from "./Watches/WatchSearch";
import { Watachaddemployeetoteam, Watachcreatetaeam, Watachdeleteemployeetoteam, Watachdeleteteam, Watachgettaeam, Watachsearchteam, Watachupdateteam } from "./Watches/Watchteam";




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
    WatachdeleteEmployee(),
    WatachGetMission(),
    WatachCreateMission(),
    WatachUpdateMission(),
    WatachDeleteMission(),
    WatachGetMilistone(),
    WatachCreateMilestone(),
    WatachUpdateMilestone(),
    WatachDeleteMilestone(),
    Watachgetsearch(),
    WatachFiltermission(),
    Watachgettaeam(),
    Watachcreatetaeam(),
    Watachdeleteteam(),
    Watachupdateteam(),
    Watachaddemployeetoteam(),
    Watachdeleteemployeetoteam(),
    Watachsearchteam(),

  
    
  ]);
}
export default Saga;
