import axios from "axios";


const instance2 = axios.create({
  baseURL: '/api2',
  timeout: 10000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type' : 'application/x-www-form-urlencoded',
    'Token':''
  }
});


//请求拦截器
instance2.interceptors.request.use(
  function (config) {
      //console.log('before request');
      //config.headers.TOKEN = 'KUHLIKKG65MHGK77KLN';
      return config;
  },
  function (error) {
      console.log('request error>>>',error);
      return Promise.reject(error);
  }
);

//响应拦截器
instance2.interceptors.response.use(
  function (config) {
      //console.log('after request');
      return config;
  },
  function (error) {
      console.log('response error>>>',error);
      return Promise.reject(error);
  }
);


export async function get(path,params){
  const res = await instance2.get(path,params);
  return res.data;
}

export async function post(path,params){
  const res = await instance2.post(path,params);
  return res.data;
}


export default instance2;

//首页
// export const epidemicList = p => post('/txapi/ncov/index?key=38e1c194ac8a375278a6cc447a7933e5', p); //国内疫情数据
// export const abroadList = p => post('/txapi/ncovabroad/index?key=38e1c194ac8a375278a6cc447a7933e5', p); //国外疫情数据

export async function epidemicList(params){
    return post('txapi/ncov/index?key=38e1c194ac8a375278a6cc447a7933e5',params); 
} 