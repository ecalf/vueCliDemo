import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/css/A-reset-pc.scss';
import './assets/css/member.scss';
import VueI18n from 'vue-i18n'//语言包
Vue.use(VueI18n) // 通过插件的形式挂载

const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  fallbackLocale: 'zh-CN',//没有英文的时候默认中文语言
  silentFallbackWarn: true,//抑制警告
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('./assets/i18n/zh'),   // 中文语言包
    'en-US': require('./assets/i18n/en')    // 英文语言包
  }
})
Vue.config.productionTip = false


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
