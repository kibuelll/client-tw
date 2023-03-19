import { USER_LOGIN ,USER_PROFILE,USER_REGISTER} from "../../actionTypes/userActionType";

export default function userReducer(
  state = { logged: {}, registered: {},profile : {} },
  action
) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, logged: action.payload };
    case USER_REGISTER:
      return { ...state, registered: action.payload };
    case USER_PROFILE : 
    return {...state,profile : action.payload}
    default:
      return state;
  }
}
