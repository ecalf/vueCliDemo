import axios from "axios";
import { getToken } from "@utils/common";


import ElementUI from 'element-ui';
import '@assets/theme/index.css';


const clientInfo = {
  device_id: '',//  设备ID    
  platform: 'pcweb',// 平台，目前有：iOS、Android、pcweb、h5   
  imei: '',//设备imei    
  version: (navigator.userAgent.match(/Windows NT [\d\.]+/) || [''])[0],// 系统版本    
  channel: 'pc',// 分发渠道号   
  timestamp: Date.now(),// 请求时间戳   
  lang: navigator.language.indexOf('zh') > -1 ? 'zh' : 'en'//
}


//只用于本站接口请求的实例
const instance = axios.create({
  baseURL: 'https://wapi.wanheglobal.com/api.php',
  timeout: 10000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
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
    console.log('request error>>>', error);
    return Promise.reject(error);
  }
);

//响应拦截器
instance.interceptors.response.use(
  function (config) {
    //console.log('after request');
    // debugger
    //console.log(config)
    //location.href = "/ucenter/login"
    //  console.log(ElementUI.MessageBox);
    if(config.data.code==10001){
    ElementUI.MessageBox('您还没有登录，请登录', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      location.href = "/ucenter/login"
    }).catch(() => {
      // ElementUI.Message({
      //   type: 'info',
      //   message: '已取消'
      // });          
    });
    }
    return config;


  },
  function (error) {
    console.log('response error>>>', error);
    return Promise.reject(error);
  }
);



const requestCtrl = {
  time: 1 * 1000,//5秒内不重复提交
  isUploadApi(method, path, params) {
    return !!((method.toLowerCase() == 'post') && path.indexOf('/upload') > -1 && params && params.get && params.get('image'));
  },
  isAfoot(method, path, params) {//判断相同请求是否在短时间内被执行
    let str = method + ':' + path + ':' + encodeURIComponent(JSON.stringify(params));

    if (this.isUploadApi(method, path, params)) {
      let file = params.get('image');
      let fileInfo = {
        lastModified: file.lastModified,
        name: file.name,
        size: file.size,
        type: file.type
      }

      str += ':' + encodeURIComponent(JSON.stringify(fileInfo));
    }

    let key = btoa(str);
    if (this[key] && Date.now() - this[key] <= this.time) {
      return true; //请求在短时间内被执行
    } else {
      this[key] = Date.now();
      return false;
    }
  }
};



export async function get(path, params) {
  if (params && !params.data) {
    //按照后端约定，业务传参放在 data 字段内
    console.warn('params format error,[data] must included ');
    params = { data: params }
  }

  // if(requestCtrl.isAfoot('get',path,params)){
  //   console.log('请求过于频繁，已被终止,path:',path);
  //   return {
  //     code:500,
  //     data:{},
  //     message:"表单正在提交，请勿重复提交"
  //   }
  // }

  let res;
  try {
    //params = {...clientInfo,data:params.data};
    res = await instance.get(path, params);
  } catch (error) {
    res = { code: 500, data: {}, message: '请求失败' }
  }

  return res.data;
}

export async function post(path, params) {
  if (params && !params.data && !requestCtrl.isUploadApi('post', path, params)) {
    //按照后端约定，业务传参放在 data 字段内
    console.log('warn: params format error,[data] must included ');
    params = { data: params }
  }

  // if(requestCtrl.isAfoot('post',path,params)){
  //   console.log('请求过于频繁，已被终止,path:',path);
  //   return {
  //     code:500,
  //     data:{},
  //     message:"请求过于频繁，请勿重复提交"
  //   }
  // }


  let res;
  try {
    //params = {...clientInfo,data:params.data};
    res = await instance.post(path, params);
  } catch (error) {
    res = { code: 500, data: {}, message: '请求失败' }
  }

  return res.data;
}


export default instance;