import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Components
import Router from './components/router/router.component';

// Styles
require('./index.sass')

// Store
const store = createStore(
  combineReducers({
    //sidebar: sidebarReducer
    // projects: projectsReducer,
    // frameworks: infoReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Index = () => pug`
  Provider(store=store)
    Router
`;

ReactDOM.render(<Index />, document.getElementById('app'));