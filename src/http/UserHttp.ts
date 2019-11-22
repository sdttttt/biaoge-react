import http from './';

const registerAPI = '/register';
const loginAPI = '/login';

export function RegisterUserApi( username: string , password: string, repassword: string) {
  return http.post(registerAPI , {username , password , repassword});
}

export function LoginUserApi(username: string , password: string) {
 return http.post(loginAPI , {username ,password});
}
