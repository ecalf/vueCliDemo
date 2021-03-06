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

//我的报价 报价管理
export async function getMyQuotation(params){
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
export async function authenticate(params){
    return post('/v1/user/identification',params);
}

//按 user_id 查询用户信息
export async function getUserInfo(params){
    return post('/v1/user/get-other-user-info',params)
}

//收藏
export async function getCollectInfo(params){
    return post('/v1/user/collect',params)
}
//供应商库
export async function getSupplier(params){
    return post('/v1/user/get-collect-list',params)
}

//我的报价
export async function getQuote(params){
    return post('/v1/user/get-my-quotation-list',params)
}

// 报价详情
export async function getofferData(params){
    return post('/v1/user/get-quotation-info',params)
}

// 我的报价详情
export async function getmyofferData(params){
    return post('/v1/user/get-my-quotation-info',params)
}


