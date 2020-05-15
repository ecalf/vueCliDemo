import Vue from '@src/utils/enhanceVue';
import VueI18n from 'vue-i18n';

import zh from '@src/i18n/zh';
import en from '@src/i18n/en';
import {getLang} from '@src/utils/common';

import '@assets/css/common.scss';
import '@assets/font/iconfont.css';

import App from "./Publish.vue";
import router from "./router";
import store from "./store";
import profileMixin from "@utils/mixin";


const i18n = new VueI18n({
  locale: getLang(), // 定义默认语言为中文 
  fallbackLocale: 'zh-CN',//没有英文的时候默认中文语言
  silentFallbackWarn: true,//抑制警告
  messages: {
    'zh-CN':{
        code:zh.code,
        time:zh.time,
    },   
    'en-US': {
        code:zh.code,
        time:en.time,
    }
  }
})



new Vue({
  mixins:[profileMixin],
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");