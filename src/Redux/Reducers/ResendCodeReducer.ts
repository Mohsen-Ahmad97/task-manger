import { DATA_RESENDCODE, ERRO_RESENDCODE } from "../Actions/Actions";

interface init {
  resendMessage: string;
}

const initial: init = {
  resendMessage: "",
};

const ResendCodeReducer = (state = initial, action: any) => {
  switch (action.type) {
    case DATA_RESENDCODE:
      return {
        ...state,
        resendMessage: action.data.Message,
        isSuccess: action.data.Code === 200,
      };
    case ERRO_RESENDCODE:
      return { ...state, err: action.err };
    default:
      return state;
  }
};
export default ResendCodeReducer;
