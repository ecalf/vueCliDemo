import axios from "axios";


const instance = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
<<<<<<< HEAD
    'Content-Type' : 'application/x-www-form-urlencoded',
=======
    'Content-Type' : 'application/json',
>>>>>>> 8ae24b99e2b36a60fccac28d088f9c0f69a8199f
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