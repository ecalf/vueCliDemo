import Vuex from "vuex";
import profile from "./profile";


export default new Vuex.Store({
    modules:{
        profile
    },
    state: {
        company:{
            companyFormGroup:[
                {text:'工厂',id:1,checked:true},
                {text:'代理',id:2}

            ]
        }
    },
    getters:{},
    mutations: {},
    actions: {}
});
