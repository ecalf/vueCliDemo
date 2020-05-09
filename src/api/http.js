import axios from "axios";

//只用于本站接口请求的实例
const instance = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type' : 'application/json',
    'Token':''
  }
});


//请求拦截器
instance.interceptors.request.use(
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
instance.interceptors.response.use(
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
  const res = await instance.get(path,params);
  return res.data;
}

export async function post(path,params){
  const res = await instance.post(path,params);
  return res.data;
}


export default instance;