import { DATA_REGISTER, GET_DATA_REGISTER } from "../Actions/Actions";
import { ERRO_DATA_REGISTER } from "./../Actions/Actions";

interface state {
  payload: string;
  isSuccess: Boolean;
  isLoading: boolean;
}

const initialState: state = {
  payload: "",
  isSuccess: false,
  isLoading: false,
};

const registerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_DATA_REGISTER:
      return {
        ...state,
        isLoading: true,
      };

    case DATA_REGISTER:
      return {
        ...state,
        isSuccess: action.data.Code === 200,
        isLoading: false,
      };
    case ERRO_DATA_REGISTER:
      return { ...state, err: action.err };
    default:
      return state;
  }
};
export default registerReducer;
