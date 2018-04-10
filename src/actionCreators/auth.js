import axios from 'axios';
import {LOGIN_AUTH_SUCCESS,LOGIN_AUTH_FAIL,LOGOUT_AUTH_SUCCESS} from '../constants';
import { push } from 'react-router-redux';
import { DASHBOARD_PAGE_ROUTE } from 'constants';
import qs from 'qs';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let navigateToDashboard = (dispatch)=>{
  dispatch(push(DASHBOARD_PAGE_ROUTE));
};

export const logIn = function(username, password) {
  return function(dispatch) {
    axios({
      method: 'post',
      url: 'api/login/open_session',
      data: qs.stringify({
        ui: 'console',
        login: username,
        password: password,
        otp: '',
      }),
    }).then(function(response) {
      let user = JSON.parse(response.data.slice(12, -14)).result;

      //get old console page html to retrive csrf tocken from its meta
      //in future will be replaced with reading it from cookie
      axios({
        method: 'get',
        url: 'api/console',
      }).then(function(response) {
        let data = response.data;
        
        let parser = new DOMParser();
        let htmlDoc = parser.parseFromString(data, 'text/html');
        let csrfTocken = htmlDoc.querySelector('meta[name=csrf-token]').getAttribute('content');

        axios.defaults.headers.common['X-CSRF-Token'] = csrfTocken;

        dispatch({
          type: LOGIN_AUTH_SUCCESS,
          payload: {
            user: user,
          },
        });
        navigateToDashboard(dispatch);
      }).catch(function(error) {
        navigateToDashboard(dispatch);
        dispatch({
          type: LOGIN_AUTH_FAIL,
          payload: {
            errors: error,
          },
        });
      });

    }).catch(function(error) {
      navigateToDashboard(dispatch);
      dispatch({
        type: LOGIN_AUTH_FAIL,
        payload: {
          errors: error,
        },
      });
    });
  };
};

export const logOut = function() {
  return function(dispatch) {
    axios({
      method: 'get',
      url: 'api/login/close_session',
    }).then(function() {
      dispatch({
        type: LOGOUT_AUTH_SUCCESS,
      });
    }).catch(function(error) {
      dispatch({
        type: LOGIN_AUTH_FAIL,
        payload: {
          errors: error,
        },
      });
    });
  };
};