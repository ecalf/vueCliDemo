import Vue from "vue";
import VueI18n from 'vue-i18n';
import zh from '@src/lang/zh';
import en from '@src/lang/en';
import {getLang,setLang} from '@src/utils/common';
import EnhanceVue from '@src/utils/enhanceVue';

import App from "./Index.vue";
import router from "./router";
import store from "./store";

Vue.use(EnhanceVue);
//EnhanceVue.install(Vue);
Vue.use(VueI18n);


const i18n = new VueI18n({ 
 locale: getLang(), // 定义默认语言为中文 
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


new Vue({
    i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
