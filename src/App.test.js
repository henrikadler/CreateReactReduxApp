import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Store from './store'

import App from './App';

it('renders without crashing', () => {

  const initialState = {
    cart: [],
    shelfItems: []
  }
  const storeInstance = Store(initialState)
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, div);
});
