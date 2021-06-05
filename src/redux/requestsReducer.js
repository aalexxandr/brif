import { requestsApi } from '../utils/api'

const SET_REQUESTS = 'SET_REQUESTS'
const SET_LOADING = 'SET_LOADING'
const CHANGE_REQUEST_DATA = 'CHANGE_REQUEST_DATA'
const DELETE_REQUEST = 'DELETE_REQUEST'

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
        case DELETE_REQUEST:
          return ({
            ...state,
            requestsData: state.requestsData.filter( request => request.id !== action.requestId )
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
const changeRequestData = (requestId, requestData) => ({
  type: CHANGE_REQUEST_DATA,
  requestId,
  requestData
})
const deleteRequestData = (requestId) => ({
  type: DELETE_REQUEST,
  requestId
})

export const getRequests = () => (dispatch) => {
  dispatch(setLoading(true))
  requestsApi.get().then( (response) => {
    response.status === 200 && dispatch(setRequest(response.data))
  } ).then( () => {
    dispatch(setLoading(false))
  } )
}

export const changeRequestStatus = (requestId, status) => (dispatch) => {
  dispatch(setLoading(true))
  requestsApi.put(requestId, {status}).then( response => {
    if (response.status === 200) {
      dispatch(changeRequestData(requestId, {status}))
      dispatch(setLoading(false))
    }
  } )
}

export const deleteRequest = (requestId) => (dispatch) => {
  dispatch(setLoading(true))
  requestsApi.delete(requestId).then( response => {
    dispatch(deleteRequestData(requestId))
    dispatch(setLoading(false))
  })
}

export const addRequest = (requestData) => {
  requestsApi.post({...requestData, status: 'open'})
}