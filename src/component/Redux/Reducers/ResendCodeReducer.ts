import { DATA_RESENDCODE, ERRO_RESENDCODE } from "../Actions/Actions";

interface init {
  message: string;
}

const initial: init = {
  message: "",
};

const ResendCodeReducer = (state = initial, action: any) => {
  switch (action.type) {
    case DATA_RESENDCODE:
      return { ...state, message: action.data.Message };
    case ERRO_RESENDCODE:
      return { ...state, err: action.err };
    default:
      return state;
  }
};
export default ResendCodeReducer;
