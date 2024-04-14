import { DATA_RESET_PASSWORD, ERRO_RESET_PASSWORD } from "../Actions/Actions";

interface init {
    payload: string;
  
  }
  
  const initial: init = {
    payload: ""
  
  };
  
  const ResetPassordReducer = (state = initial, action: any) => {
    switch (action.type) {
      case DATA_RESET_PASSWORD:
        return { ...state, payload: action.data.Message };
      case ERRO_RESET_PASSWORD:
        return { ...state, err: action.err };
      default:
        return state;
    }
  };
  export default ResetPassordReducer;
  