import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reseller from './reseller';
import user from './user';

export default combineReducers({
  router: routerReducer,
  reseller,
  user,
});
