import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import reducer from './reducer';
import history from './history';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
);

export default store;
