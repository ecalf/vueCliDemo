import {post} from './http';

//首页
export const epidemicList = p => post('/txapi/ncov/index?key=38e1c194ac8a375278a6cc447a7933e5', p); //国内疫情数据
export const abroadList = p => post('/txapi/ncovabroad/index?key=38e1c194ac8a375278a6cc447a7933e5', p); //国外疫情数据