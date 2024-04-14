import {
  DATA_COMPLETE_REGISTER,
  ERRO_COMPLETE_REGISTER,
  GET_DATA_COMPLETE_REGISTER,
} from "../Actions/Actions";

interface State {
  completemessage: string;
  isLoading: boolean;
}

const initial: State = {
  completemessage: "",
  isLoading: false,
};

const completeRegisterReducer = (state = initial, action: any) => {
  switch (action.type) {
    case GET_DATA_COMPLETE_REGISTER:
      return { ...state, isLoading: true };
    case DATA_COMPLETE_REGISTER:
      return { ...state, completemessage: action.data.Message, isLoading: false };
    case ERRO_COMPLETE_REGISTER:
      return { ...state, err: action.err };
    default:
      return state;
  }
};
export default completeRegisterReducer;
