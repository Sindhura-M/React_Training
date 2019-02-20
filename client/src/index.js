import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Routes from './routes.js'
import Child2 from './child2';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';

import {createStore, applyMiddleware} from 'redux';

import reducers from './reducers/index';
import logger from 'redux-logger';

import thunk from 'redux-thunk';

const rootElement = document.getElementById('root');


const middleware = applyMiddleware(logger, thunk);

const createStoreWithMiddleware = (createStore(reducers, middleware))

ReactDOM.render(
<Provider store={createStoreWithMiddleware}>
<App />
</Provider>
, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
