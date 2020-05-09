
import axios,{post} from "./http";

// //发送短信验证码
// export const bindPhoneCode = p => post('/v1/msg/send', p); 
// //注册
// export const submitRegister = p => post('/v1/user/register', p); 

//发送短信验证码
export async function bindPhoneCode (params){
    return post('/v1/msg/send',params);
}
//注册
export async function submitRegister (params){
    return post('/v1/user/register',params);
}

