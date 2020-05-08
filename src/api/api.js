import {post} from './http';

//首页
export const epidemicList = p => post('/txapi/ncov/index?key=38e1c194ac8a375278a6cc447a7933e5', p); //疫情数据