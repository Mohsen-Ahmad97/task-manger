import { DATA_LOGIN, ERRO_LOGIN, FAILD_LOGIN } from "../Actions/Actions";
import { GET_DATA_LOGIN } from "./../Actions/Actions";

interface state {
  messageLogin ?: string;
  isSuccess ?: Boolean;
  isLoading: boolean;
}

const initial: state = {
  messageLogin : "",
  isSuccess: false,
  isLoading: false,
};

const loginReducer = (state = initial, action: any) => {
  switch (action.type) {
    case GET_DATA_LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case DATA_LOGIN:
      return {
        ...state,
        isLoading: true,
        isSuccess: action.response.Code === 200,
      };
    case FAILD_LOGIN:
      return {
        ...state,
        isLoading:false,
        messageLogin : action.response.data.Message,
      };
    case ERRO_LOGIN:
      return { ...state, err: action.err };
    default:
      return state;
  }
};
export default loginReducer;
