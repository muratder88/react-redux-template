import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import store, { history } from './store'
import App from './containers/App';


import 'sanitize.css/sanitize.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div class='container'>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
