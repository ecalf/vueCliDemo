<<<<<<< HEAD

import axios,{post} from "./http";

// //发送短信验证码
// export const bindPhoneCode = p => post('/v1/msg/send', p); 
// //注册
// export const submitRegister = p => post('/v1/user/register', p); 
=======
import axios,{post} from './http';
>>>>>>> 8ae24b99e2b36a60fccac28d088f9c0f69a8199f

//发送短信验证码
export async function bindPhoneCode (params){
    return post('/v1/msg/send',params);
}
//注册
export async function submitRegister (params){
    return post('/v1/user/register',params);
}

