import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import rootReducer from './Reducers/rootReducer';
import { composeWithDevTools} from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

const store = createStore (
  compose(
    rootReducer,
    applyMiddleware(thunk),
    composeWithDevTools()
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

