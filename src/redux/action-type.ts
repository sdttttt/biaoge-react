/*
  user aoth action
*/
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const GET_USER = 'GET_USER'


export function todoLogin(username: string) {
  return {
    type: LOGIN,
    username: username,
  };
}
