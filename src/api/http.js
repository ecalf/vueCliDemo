import axios from "axios";
import {getToken} from "@utils/common";


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
      config.headers.Authorization = getToken();
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



const requestCtrl = {
  time:10*1000,//10秒内不重复提交
  isAfoot(method,path,params){//判断相同请求是否正在进行中
    let key = btoa(method+':'+path+':'+JSON.stringify(params));
    if(this[key]&&Date.now()-this[key]<=this.time){
      return true;
    }else{
      this[key]=Date.now();
      return false;
    }
  }
};



export async function get(path,params){
  if(params&&!params.data){
      //按照后端约定，业务传参放在 data 字段内
      console.warn('params format error,[data] must included ');
      params = { data:params }
  }

  if(requestCtrl.isAfoot('get',path,params)){
      return {
        code:500,
        data:{},
        message:"表单正在提交，请勿重复提交"
      }
    }

    let res; 
    try{
      res = await instance.get(path,params);
    }catch(error){
      res = {code:500,data:{},message:'请求失败'}
    }
  
    return res.data;
}

export async function post(path,params){
    if(params&&!params.data){
        //按照后端约定，业务传参放在 data 字段内
        console.log('warn: params format error,[data] must included ');
        params = { data:params }
    }

    if(requestCtrl.isAfoot('post',path,params)){
      return {
        code:500,
        data:{},
        message:"表单正在提交，请勿重复提交"
      }
    }
    

    let res;
    try{
      res = await instance.post(path,params);
      //console.log('res>>>',res);
    }catch(error){
      //console.log('error>>>',error);
      res = {code:500,data:{},message:'请求失败'}
    }

    return res.data;
}


export default instance;