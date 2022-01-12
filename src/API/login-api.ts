import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
   // baseURL: 'http://localhost:7542/2.0/',
});

export const loginAPI = {
    login:(email:string,password:string,rememberMe:boolean)=>instance.post('auth/login',{email,password,rememberMe})
}