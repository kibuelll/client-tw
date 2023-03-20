import { ALL_PRODUCTS, ONE_PRODUCT } from "../actionTypes/productActionType";
const baseUrl = "http://localhost:3000";

export const successFetchProducts = (payload) => {
  return {
    type: ALL_PRODUCTS,
    payload,
  };
};

export const successFetchOneProduct = (payload) => {
  return {
    type:ONE_PRODUCT,
    payload,
  };
};

export const deleteProduct = (id) => {
  return async () => {
    try {
      const response =  await fetch(baseUrl + `/${id}`, {
        method: "DELETE",
      })
      if(!response.ok) {
        throw await response.json();
      }

      const data = await response.json();
      return data
    } catch (error) {
      throw error
    }
  }
}

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw await response.json();
      }

      const data = await response.json();
      dispatch(successFetchProducts(data));
      return data;
    } catch (error) {
      throw error;
    }
  };
};

export const fetchOneProduct = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + `/${id}`);
      if(!response.ok) {
        throw await response.json();
      }

      const data = await response.json()
      dispatch(successFetchOneProduct())
      return data;
    } catch (error) {
      throw error;
    }
  };

};

export const updateProduct = (id,payload) => {
 return async () => {
  try {
    const response = await fetch(baseUrl + `/${+id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        access_token : localStorage.access_token
      },
      body: JSON.stringify(payload)
    })

    if(!response.ok) {
      throw await response.json();
    }

    const data = await response.json();
    return data
  } catch (error) {
    throw error;
  }
 } 
}