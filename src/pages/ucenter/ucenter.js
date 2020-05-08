import Vue from '@src/utils/enhanceVue';
import VueI18n from 'vue-i18n';
import VCharts from 'v-charts'//图表

import zh from '@src/i18n/zh';
import en from '@src/i18n/en';
import {getLang,setLang} from '@src/utils/common';

import ElementUI from 'element-ui';
import '@assets/theme/index.css';

import '@assets/css/common.scss';
import '@assets/font/iconfont.css';

import App from "./Ucenter.vue";
import router from "./router";
import store from "./store";


// import axios from 'axios'


Vue.use(VCharts)
Vue.use(ElementUI);
// Vue.use(axios);

// Vue.config.productionTip = false
// axios.defaults.baseURL = 'http://api.scm.yiminshijie.com';
// Vue.prototype.$http = axios;

const i18n = new VueI18n({
  locale: getLang(), // 定义默认语言为中文 
  fallbackLocale: 'zh-CN',//没有英文的时候默认中文语言
  silentFallbackWarn: true,//抑制警告
  messages: {
    'zh-CN':{
        time:zh.time,
    },   
    'en-US': {
        time:en.time,
    }
  }
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
