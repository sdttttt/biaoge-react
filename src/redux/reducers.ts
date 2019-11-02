import { LOGIN, LOGOUT } from './action-type';
import { UserState } from './state';
import { loginAction, logoutAction } from './action';

export function userChange( state: UserState = { isLogin: false , username: null } , action ): UserState {

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
