import { UserState } from './state';

function copyObject(object){
    return JSON.parse(JSON.stringify(object))
}

export function loginAction (state: UserState , username: string): UserState {
  let newState: UserState = copyObject(state);
  newState.username = username;
  newState.isLogin = true;
  return newState;
}

export function logoutAction (state: UserState): UserState {
  let newState: UserState = copyObject(state);
  newState.username = null;
  newState.isLogin = false;
  return newState;
}
