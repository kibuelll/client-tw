import { ALL_PRODUCTS } from "../actionTypes/productActionType"
const baseUrl = "http://localhost:3000"

export const successFetchProducts = (payload) => {
  return {
    type: ALL_PRODUCTS,
    payload
  }
}

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl)
      if(!response.ok) {
        throw await response.json()
      }

      const data = await response.json()
      dispatch(successFetchProducts(data))
      return data
    } catch (error) {
      throw error
    }
  }
}