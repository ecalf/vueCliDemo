/*
* 扩展VUE,供全局使用
*/
export default {
    install (Vue,options){
        console.log('EnhanceVue install');
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
        Vue.prototype.GLOBAL = {
            debug:process.env.NODE_ENV !== "production"
        }

        return Vue;
    }
}