import { DATA_LOGIN, ERRO_LOGIN } from "../Actions/Actions";
import { GET_DATA_LOGIN } from "./../Actions/Actions";

interface state {
  messageLogin?: string;
  isSuccess?: Boolean;
  isLoading: boolean;
}

const initial: state = {
  messageLogin: "",
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
        isLoading: false,
        isSuccess: action.response.Code === 200,
        messageLogin: action.response.Message,
       
      };
   
    case ERRO_LOGIN:
      return { ...state, err: action.err, isLoading: false };
    default:
      return state;
  }
};
export default loginReducer;
