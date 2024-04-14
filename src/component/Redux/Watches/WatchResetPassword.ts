import { put, takeEvery } from "redux-saga/effects"
import { DATA_RESET_PASSWORD, ERRO_RESET_PASSWORD, GET_DATA_RESET_PASSWORD } from "../Actions/Actions"
import { Auth } from './../../services/Auth';

export function* WatachResetPassword(){





    
    yield takeEvery(GET_DATA_RESET_PASSWORD,informationResetPassword)
   
     function* informationResetPassword(action:any){
      
       try{
           
           const data:string =yield Auth.resetPassword(action.payload)
           
           yield put({type:DATA_RESET_PASSWORD,data})
           console.log("d",data)
       }
      catch(err){
       yield put({type:ERRO_RESET_PASSWORD,err})
       console.log("errorss",err)
    }
           } 
       }  