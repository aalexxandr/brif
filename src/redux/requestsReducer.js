import { requestsApi } from '../utils/api'

const SET_REQUESTS = 'SET_REQUESTS'
const SET_LOADING = 'SET_LOADING'

const initialState = {
  requestsData: [],
  loading: false
}

export const requestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REQUESTS :
      return ({
        ...state,
        requestsData: [
          ...action.requestsData
        ]
      })
      case SET_LOADING : 
        return ({
          ...state,
          loading: action.status
        })
    default :
      return state
  }
}

const setRequest = (requestsData) => ({
  type: SET_REQUESTS,
  requestsData
})
const setLoading = (status) => ({
  type: SET_LOADING,
  status
})

export const getRequests = () => (dispatch) => {
  dispatch(setLoading(true))
  requestsApi.get().then( (response) => {
    response.status === 200 && dispatch(setRequest(response.data))
  } ).then( () => {
    dispatch(setLoading(false))
  } )
}