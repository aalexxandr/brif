import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))