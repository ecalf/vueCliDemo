import axios,{post} from "@utils/enhanceAxios";

//发送短信验证码
export async function bindPhoneCode  (params){
    return post('/v1/msg/send',params); //国内疫情数据
} 
