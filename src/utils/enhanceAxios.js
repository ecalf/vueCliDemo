import axios from "axios";


const instance = axios.create({
  timeout: 5000,
  headers: {'X-Requested-With': 'XMLHttpRequest','Token':''}
});


//请求拦截器
instance.interceptors.request.use(
  function (config) {
      console.log('before request');
      config.headers.TOKEN = 'KUHLIKKG65MHGK77KLN';
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
      console.log('after request');
      return config;
  },
  function (error) {
      console.log('response error>>>',error);
      return Promise.reject(error);
  }
);




export default instance;