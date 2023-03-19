import {USER_LOGIN,USER_PROFILE,USER_REGISTER} from '../actionTypes/userActionType'
const baseUrl = 'http://localhost:3001/'
export const successLoginUser = (payload) => {
  return {
    type : USER_LOGIN,
    payload
  }
}

export const successRegisterUser = (payload) => {
  return {
    type : USER_REGISTER,
    payload
  }
}

export const sucessUserProfile = (payload) => {
  return {
    type : USER_PROFILE,
    payload
  }
}

export const loginUser = (input) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(baseUrl +'login',{
        method : 'POST',
        headers: {
          "Content-Type" : 'application/json'
        },
        body : JSON.stringify(input)
      })
      if(!resp.ok) {
        throw await resp.json()
      }
      const data = await resp.json()

      localStorage.setItem('access_token',data.access_token)
      dispatch(successLoginUser(data))
      return data
    } catch (error) {
      throw error
    }
  }
}

export const registerUser = (input) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(baseUrl +'sign-up',{
        method : 'POST',
        headers: {
          "Content-Type" : 'application/json'
        },
        body : JSON.stringify(input)
      })
      
      if(!resp.ok) {
        throw await resp.json()
      }
      const data = await resp.json()

      dispatch(successRegisterUser(data))
      return data
    } catch (error) {
      throw error
    }
  }
}

export const fetchProfile = () => {
  return async (dispatch) => {
    try {
      const resp = await fetch(baseUrl + "my-profile" , {
        headers : {
          "Content-Type" : "application/json",
          access_token : localStorage.getItem('access_token')
        }
      })

      if(!resp.ok) {
        throw await resp.json()
      }
      const data = await resp.json()
      dispatch(sucessUserProfile(data))
      return data
    } catch (error) {
      throw error
    }
  }
}