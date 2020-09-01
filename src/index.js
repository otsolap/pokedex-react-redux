import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

const store = createStore (
  compose(
    applyMiddleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

