import {
  ALL_PRODUCTS,
  ONE_PRODUCT,
  NEW_PRODUCT,
} from "../../actionTypes/productActionType";

export default function productReducer(
  state = { products: [], oneProduct: {} },
  action
) {
  switch (action.type) {
    case ALL_PRODUCTS:
      return { ...state, products: action.payload };
    case ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
    case NEW_PRODUCT : 
    return {...state, products : [...state.products,action.payload]}
    default:
      return state
  }
}
