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
    return post('/v1/user/myprofiles');
}

//我发布的需求
export async function getMyNeeds(params){
    return post('/v1/user/get-my-needs-list',params); 
}

//用户认证
export async function identify(params){
    return post('/v1/user/identification',params)
}

//公司信息编辑
export async function editCompany(params){
    return post('/v1/user/company_info_edit',params);
}


//认证
export async function identification(params){
    return post('/v1/user/identification',params);
}