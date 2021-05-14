import { setAuthData } from "./authReducer"

const initialState = {
  loading: true
}

const TOGGLE_INITIAL = 'TOGGLE_INITIAL'

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_INITIAL :
      return ({
        ...state,
        loading: action.loading
      })
    default :
      return ({
        ...state
      })
  }
}

const toggleLoading = (loading) => ({
  type: TOGGLE_INITIAL,
  loading
})

export const initializeApp = (user, loading) => (dispatch) => {
  if(user) {
    dispatch(setAuthData({
      isAuth: true,
      userName: user.displayName,
      userEmail: user.email,
      photoUrl: user.photoURL
    }))
  }
  else {
    dispatch(setAuthData({
      isAuth: false,
      userName: null,
      userEmail: null,
      photoUrl: null
    }))
  }
  dispatch(toggleLoading(loading))
}