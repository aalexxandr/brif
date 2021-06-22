import { requestsApi } from '../utils/api'

const SET_REQUESTS = 'requests/SET_REQUESTS'
const SET_LOADING = 'requests/SET_LOADING'
const CHANGE_REQUEST_DATA = 'requests/CHANGE_REQUEST_DATA'
const DELETE_REQUEST = 'requests/DELETE_REQUEST'

const initialState = {
  requestsData: [],
  loading: true
}

export const requestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REQUESTS:
      return ({
        ...state,
        requestsData: [
          ...action.requestsData
        ]
      })
    case SET_LOADING:
      return ({
        ...state,
        loading: action.status
      })
    case CHANGE_REQUEST_DATA:
      return ({
        ...state,
        requestsData: state.requestsData.map(request => {
          if (request.id === action.requestId) {
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
        requestsData: state.requestsData.filter(request => request.id !== action.requestId)
      })
    default:
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
export const deleteRequestData = (requestId) => ({
  type: DELETE_REQUEST,
  requestId
})

export const getRequests = () => async (dispatch) => {
  const response = await requestsApi.get()
  response.status === 200 && dispatch(setRequest(response.data))
  dispatch(setLoading(false))
}

export const changeRequestStatus = (requestId, status) => async (dispatch) => {
  dispatch(setLoading(true))
  const response = await requestsApi.put(requestId, { status })
  if (response.status === 200) {
    dispatch(changeRequestData(requestId, { status }))
    dispatch(setLoading(false))
  }
}

export const deleteRequest = (requestId) => async (dispatch) => {
  await dispatch(setLoading(true))
  await requestsApi.delete(requestId)
  await dispatch(deleteRequestData(requestId))
  await dispatch(setLoading(false))
}

export const addRequest = (requestData) => {
  requestsApi.post({ ...requestData, status: 'open' })
}