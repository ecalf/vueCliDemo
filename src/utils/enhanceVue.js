/*
* 扩展VUE,供全局使用
*/
import CONST from "@utils/const";
import Vue from "vue";
import Vuex from "vuex";
import VueI18n from 'vue-i18n';
import VueRouter from "vue-router";
import NotFoundComponent from "@components/NotFoundComponent";


const plugins =  {
    globalComponents(){
        Vue.component('NotFoundComponent', NotFoundComponent);
    },
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


        return Vue;
    }
}


Vue.use(plugins);

export default Vue;