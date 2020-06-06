import Vue from '@src/utils/enhanceVue';
import VueI18n from 'vue-i18n';
import zh from '@src/i18n/zh';
import en from '@src/i18n/en';
import {getLang,setLang} from '@src/utils/common';

import '@assets/css/common.scss';
import '@assets/font/iconfont.css';

import App from "./Test.vue";
import createRouter from "./router";
import createStore from "./store";
import profileMixin from "@utils/mixin";

const router = createRouter();
const store = createStore();

const i18n = new VueI18n({ 
  locale: getLang(), // 定义默认语言为中文 
  fallbackLocale: 'zh-CN',//没有英文的时候默认中文语言
  silentFallbackWarn: true,//抑制警告
  messages: {   
    'zh-CN':{
        common:zh.common,
        home:zh.home
    },   
    'en-US': {
        common:en.common,
        home:en.home
    }
  }
});





export function createApp(context) {
    const app = new Vue({
      mixins:[profileMixin],
        i18n,
      router,
      store,
      render: h => h(App),
      mounted(){
        console.log('index mounted');
      }
    })

    return {app, router, store};
}