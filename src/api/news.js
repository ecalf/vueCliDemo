import axios from "axios";

const configBase = {
  baseURL: 'https://admin.scm.wanheglobal.com/index.php',
}

function getConfig(path,params,option){
  return Object.assign(configBase,option,{
      url: path,
      data: params
    });
}



export async function get(path,params,option={}){
  const config = getConfig(path,params,option);
  config.method = 'get';

  const res = await axios(config);
  return res.data;
}

export async function post(path,params,option={}){
  const config = getConfig(path,params,option);
  config.method = 'post';

  const res = await axios(config);
  return res.data;
}



//首页
// export const epidemicList = p => post('/txapi/ncov/index?key=38e1c194ac8a375278a6cc447a7933e5', p); //国内疫情数据
// export const abroadList = p => post('/txapi/ncovabroad/index?key=38e1c194ac8a375278a6cc447a7933e5', p); //国外疫情数据

//新闻
export async function getNewsList(params){
    return post('/api/article/getlist',params); 
} 

//新闻详情
export async function getNewsDetails(params){
    return post('/api/article/getInfo',params); 
} 


//banner 列表
export async function getBannerList(params){
    return post('/api/banner/getlist',params);
}

