import { setAuthData } from "./authReducer"

const initialState = {
  initial: false
}

const TOGGLE_INITIAL = 'TOGGLE_INITIAL'

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_INITIAL :
      return ({
        ...state,
        initial: action.initial
      })
    default :
      return ({
        ...state
      })
  }
}

const toggleInitial = (initial) => ({
  type: TOGGLE_INITIAL,
  initial
})

export const initializeApp = (user) => (dispatch) => {
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
}