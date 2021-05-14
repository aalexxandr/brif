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

const setRequests = (requestsData) => ({
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

export const getRequests = (status) => (dispatch) => {
  dispatch(setLoading(true))
  requestsApi.get().then( (response) => {
  if(response.status === 200) {
      dispatch(setRequests(response.data.filter( request => request.status === status)))
      dispatch(setLoading(false))
    }
  })
}

export const changeRequest = (requestId, requestData = {status: 'closed'}) => (dispatch) => {
  // dispatch(setLoading(true))
  // requestsApi.put(requestId, requestData).then( response => {
  //   if (response.status === 200) {
      dispatch(changeRequestData(requestId, requestData))
  //     dispatch(setLoading(false))
  //   }
  // } )
}