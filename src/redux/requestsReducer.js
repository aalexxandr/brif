import { requestsApi } from '../utils/api'

const SET_REQUESTS = 'SET_REQUESTS'
const SET_LOADING = 'SET_LOADING'
const CHANGE_REQUEST_DATA = 'CHANGE_REQUEST_DATA'

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
      case CHANGE_REQUEST_DATA :
        return ({
          ...state,
          requestsData: state.requestsData.map( request => {
            if  (request.id === action.requestId) {
              return ({
                ...request,
                ...action.requestData
              })
            }
            return request
          })
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
const changeRequestData = (requestId, requestsData) => ({
  type: CHANGE_REQUEST_DATA,
  requestId,
  requestsData
})

export const getRequests = () => (dispatch) => {
  dispatch(setLoading(true))
  requestsApi.get().then( (response) => {
    response.status === 200 && dispatch(setRequest(response.data))
  } ).then( () => {
    dispatch(setLoading(false))
  } )
}

export const changeRequest = (requestId, requestData = {status: 'closed'}) => (dispatch) => {
  // setLoading(true)
  requestsApi.put(requestId, requestData).then( response => {
    debugger
    dispatch(changeRequestData(requestId, requestData))
    return response
  } )
}