import {
  DATA_RESET_PASSWORD,
  ERRO_RESET_PASSWORD,
  GET_DATA_RESET_PASSWORD,
} from "../Actions/Actions";

interface init {

  isLoading: boolean;
}

const initial: init = {
 
  isLoading: false,
};

const ResetPassordReducer = (state = initial, action: any) => {
  switch (action.type) {
    case GET_DATA_RESET_PASSWORD:
      return { ...state, isLoading: true };
    case DATA_RESET_PASSWORD:
      return {
        ...state,
        isLoading: false,
      };
    case ERRO_RESET_PASSWORD:
      return { ...state, err: action.err, isLoading: false };
    default:
      return state;
  }
};
export default ResetPassordReducer;
