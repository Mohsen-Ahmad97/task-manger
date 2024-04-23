
import { GET_DATA_FORGET_PASSWORD, ERRO_FORGET_PASSWORD } from './../Actions/Actions';

interface State {
  messageForgetPassword : string;
  }
  

  const initial: State = {
    messageForgetPassword : "",
  };

  const forgetPasswordReducer = (state = initial, action: any) => {
    switch (action.type) {
      case GET_DATA_FORGET_PASSWORD:
        return { ...state };
      case ERRO_FORGET_PASSWORD:
        return { ...state, err: action.err };
      default:
        return state;
    }
  };
  export default forgetPasswordReducer ;