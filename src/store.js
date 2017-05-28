import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

import rootReducers from './reducers/index'

export default(initialState) => {
  return createStore(rootReducers, applyMiddleware(logger))
}
