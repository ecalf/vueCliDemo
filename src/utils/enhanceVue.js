/*
* 扩展VUE,供全局使用
*/
import CONST from "@utils/const";
import Vue from "vue";
import Vuex from "vuex";
import VueI18n from 'vue-i18n';
import VueRouter from "vue-router";

function routeTo(toPath){
    toPath = toPath||'/';
    let fromModule = location.pathname.split('/')[1]||'';
    let toModule = toPath.split('/')[1]||'';

    if(fromModule==toModule){
        this.$router.push(toPath);
    }else{
        location.href = toPath;
    }
}


const plugins =  {
    usePlugin(Vue){
        Vue.use(Vuex);
        Vue.use(VueI18n);
        Vue.use(VueRouter);

    },
    install (Vue,options){
        this.usePlugin(Vue);

        Vue.config.productionTip = false;
        Vue.prototype.GLOBAL = Object.assign(CONST,{
            debug:process.env.NODE_ENV !== "production"
        });

        Vue.prototype.$routeTo = routeTo;

        return Vue;
    }
}


Vue.use(plugins);

export default Vue;