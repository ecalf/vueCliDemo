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
//按token获取用户信息,token已经自动附带在请求header
export async function getProfile(){
    console.log('api getProfile');
    return {a:123,b:456}
    //return post('/v1/user/profile',params);
}

//我发布的需求
export async function getNeeds(params){
    return post('/v1/needs/get-list',params); 
}

