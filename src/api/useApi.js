import {post} from './http';

//发送短信验证码
export const bindPhoneCode = (p) =>{
    console.log('bindPhoneCode: ',p);
    return post('/v1/msg/send',p); //国内疫情数据
} 
