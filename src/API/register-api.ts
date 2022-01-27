import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    // baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
});

export const registerAPI = {
    register:(email:string,password:string)=>instance.post('auth/register',{email,password})
}