import { createStore as _createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import combinedReducers from './modules/reducers';
const logger = createLogger();

const middlewares = [thunk, logger];

const enhancers = compose(applyMiddleware(...middlewares));

const createStore = initialState =>
  _createStore(combinedReducers, initialState, enhancers);

export default createStore;
