import { LOGIN, LOGOUT } from './action-type';
import { combineReducers } from 'redux';
import { UserState } from './state';
import { loginAction, logoutAction } from './action';

function userChange( state: UserState = { isLogin: false , username: null } , action ) {

  console.log(state , action);

  switch(action.type){
    case LOGIN:
      return loginAction(state ,action.data);
    case LOGOUT:
      return logoutAction(state);
    default:
      return state;
  }
}



export const finalReducers = combineReducers( {
  userChange
})
