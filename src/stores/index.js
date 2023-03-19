import { legacy_createStore as createStore , combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";

const combine = combineReducers({
  productReducer,
  userReducer
})

const store = createStore(combine,applyMiddleware(thunk))

export default store