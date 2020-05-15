import Vue from '@src/utils/enhanceVue';
import VueI18n from 'vue-i18n';

import zh from '@src/i18n/zh';
import en from '@src/i18n/en';
import {getLang,setLang} from '@src/utils/common';

import ElementUI from 'element-ui';
import '@assets/theme/index.css';

import '@assets/css/common.scss';
import '@assets/font/iconfont.css';
import 'swiper/css/swiper.css'

import App from "./product.vue";
import router from "./router";
import store from "./store";
import profileMixin from "@utils/mixin";

// global swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);

Vue.use(ElementUI);

const i18n = new VueI18n({ 
 locale: getLang(), // 定义默认语言为中文 
 messages: {   
    'zh-CN':{account:zh.account},   
    'en-US': {aaccount:en.aaccount}
  }
});


new Vue({
    mixins:[profileMixin],
    i18n,
  router,
  store,
  render: h => h(App),
}).$mount("#app");
