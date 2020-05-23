import axios,{post} from './http';

//发布需求
export async function publish (params){
    return post('/v1/needs/publish',params);
}

//需求详情
export async function getNeedInfo(params){
    return post('/v1/needs/get-info',params);
}

//需求列表
export async function getNeedList(params){
    return post('/v1/needs/get-list',params);
}

//报价
export async function quotation(params){
    return post('/v1/needs/quotation',params);
}


