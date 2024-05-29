import { IcomonResponse } from "../../models/General";
import {
  CREATE_DATA_TEAM,
  DELETE_TEAM,
  DELETE_TEAM_DATA,
  ERRO_TAEM,
  GET_DATA_TEAM,
  SEARCH_DATA_TEAM,
  TAEM_CREATE,
  TAEM_DATA,
} from "../Actions/Actions";

interface State {
  payload: IcomonResponse[];
  isloading: boolean;
  message: string;
  isSuccess: boolean;
}
const intialstate: State = {
  payload: [],
  isloading: false,
  message: "",
  isSuccess: false,
};

const Team = (state = intialstate, action: any) => {
  switch (action.type) {
    case TAEM_DATA:
      return { ...state, isLoading: true };
    case GET_DATA_TEAM:
      return { ...state, isLoading: false, payload: action.response.Data };
    case TAEM_CREATE:
      return { ...state, isLoading: true };
    case CREATE_DATA_TEAM:
      return { ...state, isLoading: false };
    case DELETE_TEAM:
      return { ...state, isLoading: true };
    case DELETE_TEAM_DATA:
      return { ...state, isLoading: false };
    case SEARCH_DATA_TEAM:
      return { ...state, payload: action.search };
      // case SWITCH_DATA_TEAM:
      //   return { ...state, payload: action.search };
    case ERRO_TAEM:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
export default Team;
