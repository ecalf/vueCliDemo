import axios,{post} from './http';

//获取可用的支付方式
export async function getPayWayList(){
    return post('/v1/pay/get-pay-way-list');
} 


//支付服务费
export async function payService (params){
    return post('/v1/pay/pay-service',params);
}