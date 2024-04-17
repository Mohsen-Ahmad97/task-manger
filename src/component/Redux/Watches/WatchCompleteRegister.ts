import { put, takeEvery } from "redux-saga/effects";
import { DATA_COMPLETE_REGISTER, ERRO_COMPLETE_REGISTER, GET_DATA_COMPLETE_REGISTER} from "../Actions/Actions";
import { Auth } from "../../services/Auth";

function* informationCompleteRegister(action:any){
      
    try{
        
        const data:string =yield Auth.completRegister(action.payload)
        
        yield put({type:DATA_COMPLETE_REGISTER,data})
        console.log("d",data)
    }
   catch(err){
    yield put({type:ERRO_COMPLETE_REGISTER,err})
    console.log("errorss",err)
 }
        } 
export function* WatachCompleteRegister(){



    
    yield takeEvery(GET_DATA_COMPLETE_REGISTER,informationCompleteRegister)
   
 
       }    