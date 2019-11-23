import http from './';

const registerAPI = '/register';
const loginAPI = '/login';

export function registerUserApi(username: string, password: string, repassword: string) {
  return http.post(registerAPI , {username , password , repassword});
}

export function loginUserApi(username: string, password: string) {
 return http.post(loginAPI , {username ,password});
}
