import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import { Provider } from 'react-redux'
import Store from './store'

const initialState = {
  cart: [],
  shelfItems: []
}
const storeInstance = Store(initialState)

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
)
