import { LOCALE_CHANGE } from 'constants';
import resellerInfo from 'resellerInfo';
import { getUserLang } from 'utils';

let userLang = getUserLang();

const initialState = resellerInfo[userLang];

export default function reseller(state = initialState, action) {
  switch(action.type) {
  case LOCALE_CHANGE:
    return resellerInfo[action.payload];
  default:
    return state;
  }
}
