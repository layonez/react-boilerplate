import { LOGIN_AUTH_SUCCESS, LOGIN_AUTH_FAIL, LOGOUT_AUTH_SUCCESS } from '../constants';

const initialState = null;

export default function user(state = initialState, action) {
  switch (action.type) {
  case LOGIN_AUTH_SUCCESS:
    return action.payload.user;
  case LOGIN_AUTH_FAIL:
    return null;
  case LOGOUT_AUTH_SUCCESS:
    return null;
  default:
    return state;
  }
}