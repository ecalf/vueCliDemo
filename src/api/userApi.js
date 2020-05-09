import axios,{post} from "./http";


//发送短信验证码
export async function bindPhoneCode (params){
    return post('/v1/msg/send',params);
}
//注册
export async function submitRegister (params){
    return post('/v1/user/register',params);
}
//登录
export async function submitLogin(params){
    return post('/v1/user/login',params);
}

