
import { Auth } from "../../services/Auth";

import {put, takeEvery} from "redux-saga/effects"
import { DATA_REGISTER, GET_DATA_REGISTER, ERRO_DATA_REGISTER } from './../Actions/Actions';




export function* WatachRegister(){

    
 yield takeEvery(GET_DATA_REGISTER,informationRegister)

  function* informationRegister(action:any){
    console.log(action)
    try{
        
        const data:string =yield Auth.register(action.payload);
        
        yield put({type:DATA_REGISTER,data})
        console.log("d",data)
    }
   catch(err){
    yield put({type:ERRO_DATA_REGISTER,err})
    console.log("error",err)
 }
        } 
    }    

