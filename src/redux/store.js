import { combineReducers, createStore, applyMiddleware } from 'redux'
import { authReducer } from './authReducer'
import { appReducer } from './appReducer'
import { requestsReducer } from './requestsReducer'
import { adminsReduser } from './adminsReduser'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  auth: authReducer,
  app: appReducer,
  requests: requestsReducer,
  admins: adminsReduser
})

export const store = createStore(reducers, applyMiddleware(thunk))