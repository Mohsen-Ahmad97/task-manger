import { DATA_FORGET_PASSWORD, ERRO_FORGET_PASSWORD } from "../Actions/Actions";

interface State {
  messageForgetPassword : string;
  }
  

  const initial: State = {
    messageForgetPassword : "",
  };
  
  const forgetPasswordReducer = (state = initial, action: any) => {
    switch (action.type) {
      case DATA_FORGET_PASSWORD:
        return { ...state, messageForgetPassword : action.data.Message };
      case ERRO_FORGET_PASSWORD:
        return { ...state, err: action.err };
      default:
        return state;
    }
  };
  export default forgetPasswordReducer ;