import { requestsApi } from '../utils/api'

const SET_REQUESTS = 'SET_REQUESTS'

const initialState = {
  requestsData: []
}

export const requestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REQUESTS : 
      return ({
        ...state,
        requestsData: [
          ...state.requestsData,
          action.requestsData
        ]
      })
    default :
      return state
  }
}

const setRequest = (requestsData) => ({
  type: SET_REQUESTS,
  requestsData
})

export const getRequests = () => (dispatch) => {
  requestsApi.get().then( (response) => {
    debugger
  } )
}