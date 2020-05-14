import axios,{post} from './http';

export async function payService (params){
    return post('/v1/needs/publish',params);
}