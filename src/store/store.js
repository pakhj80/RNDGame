import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(modules, composeWithDevTools(applyMiddleware(promise,logger)));

export default store;