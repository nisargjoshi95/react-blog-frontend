import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Redux store
const store = createStore(
  combineReducers({
    //some reducers
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Base app
const jsx = pug`
  Provider(store=${store})
    Router
`;

console.log(store.getState());

ReactDOM.render(jsx, document.getElementById('app'));