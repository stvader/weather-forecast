import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducerApp } from '../reducers';
import { IAppState, IActions } from '../reducers/types';

const store = createStore<IAppState, IActions, any, null>(
  reducerApp,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
