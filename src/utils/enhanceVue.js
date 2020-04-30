/*
* 扩展VUE,供全局使用
*/
import CONST from "@utils/const";
import Vue from "vue";
import Vuex from "vuex";
import VueI18n from 'vue-i18n';
import VueRouter from "vue-router";

const plugins =  {
    usePlugin(Vue){
        Vue.use(Vuex);
        Vue.use(VueI18n);
        Vue.use(VueRouter);

    },
    install (Vue,options){
        this.usePlugin(Vue);


        //console.log('EnhanceVue install');
        if(typeof options=='object'){
            for(let key in options){
                if(typeof options[key]=='function'){
                    //function(Vue){ }
                    options[key](Vue);
                }else{
                    Vue.prototype[key] = options[key];    
                }
            }
        }
        
        Vue.config.productionTip = false;
        Vue.prototype.GLOBAL = Object.assign(CONST,{
            debug:process.env.NODE_ENV !== "production"
        });

        return Vue;
    }
}


Vue.use(plugins);

export default Vue;