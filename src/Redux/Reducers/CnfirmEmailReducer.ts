import { DATA_CONFIRMEMAIL, ERRO_CONFIRMEMAIL, GET_DATA_CONFIRMEMAIL } from "./../Actions/Actions";
interface state {
  isLoading:boolean,
  isSuccess:boolean,
  Token: string;
  RefreshToken: string;
}

const initialState: state = {
  isLoading:false,
  isSuccess:false,
  Token: "",
  RefreshToken: "",
};

const confirmReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_DATA_CONFIRMEMAIL:
      return{
        ...state,
        isLoading:true
      }
    case DATA_CONFIRMEMAIL:
      return {
        ...state,
        isLoading:false,
        isSuccess:action.data.Code===200,
        Token: action.data.Data.Token,
        RefreshToken: action.data.Data.RefreshToken,
      };
  
    case ERRO_CONFIRMEMAIL:
      return { ...state,  isLoading:false};
    default:
      return state;
  }
};
export default confirmReducer;
