import Vue from '@src/utils/enhanceVue';
import VueI18n from 'vue-i18n';

import zh from '@src/i18n/zh';
import en from '@src/i18n/en';
import {getLang,setLang} from '@src/utils/common';

import App from "./Account.vue";
import router from "./router";
import store from "./store";



const i18n = new VueI18n({ 
 locale: getLang(), // 定义默认语言为中文 
 messages: {   
    'zh-CN':{account:zh.account},   
    'en-US': {account:en.account}
  }
});


new Vue({
    i18n,
  router,
  store,
  render: h => h(App),
  mounted(){
    console.log('account mounted');
  }
}).$mount("#app");
