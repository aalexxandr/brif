import { firebaseAuth, firebaseLogout } from '../utils/firebaseFunctions'

const TOGGLE_LOADING = 'TOGGLE_LOADING'
const SET_AUTH_DATA = 'SET_AUTH_DATA'

const initialState = {
  isLoading: false,
  isAuth: false,
  userName: null,
  userEmail: null,
  photoUrl: null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING :
      return {
        ...state,
        isLoading: action.loading
      }
    case SET_AUTH_DATA :
      return {
        ...state,
        ...action.authData
      }
    default :
      return state
  }
}

const toggleLoading = (loading) => ({
  type: TOGGLE_LOADING,
  loading
})

export const setAuthData = (authData) => ({
  type: SET_AUTH_DATA,
  authData
})

export const logout = () => (dispatch) => {
  firebaseLogout()
  dispatch(setAuthData( {
    isAuth: false,
    userName: null,
    userEmail: null,
    photoUrl: null
  } ))
}

export const authorization = () => (dispatch) => {
  dispatch(toggleLoading(true))
  firebaseAuth().then((res) => {
    dispatch(setAuthData( {...res} ))
    dispatch(toggleLoading(false))
  })
}

