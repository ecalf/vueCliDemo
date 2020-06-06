import Vue from "vue";
import {getProfile} from "@api/user";
import {delToken} from "@utils/common";

export default {
    namespaced: true,//必须通过命名空间访问子模块的 action、mutation 和 getter
    //strict模式：任何 state 的变更如果不是通过 mutation commit 的都将被阻止,存在性能损失,只在开发环境使用
    strict: process.env.NODE_ENV !== 'production',
    state: {
        user_info:{},
        user_company:{},
        user_bank:{},
        user_organization:{}
    },
    getters: {
        //模块外使用：getters['moduleName/getterName']
       
    },
    mutations: {
        //模块外使用:commit('moduleName/mutationName',data)
        //模块内使用:commit('mutationName',data)
        updateProfile(state,profile){
            console.log('mutation updateProfile', profile);
            for(let key in profile){
                //为state新增key需要使用Vue.set方法,使该属性成为响应式
                Vue.set(state,key,profile[key]||'');
            }
        }
    },
    actions: {
        //actionMethod(context,data) 根节点状态则为 context.rootState
        //模块外使用： dispatch('moduleName/actionName',data)
        //模块内使用: dispatch('actionName',data)
        async getProfile({state,commit, rootState}){
            console.log('dispatch profile/getProfile');
            const res =  await getProfile();
            //console.log('getProfile res',res);

            if(res.code==200){
                commit('updateProfile',res.data.profiles);
            }else{
                commit('updateProfile',{});
                delToken();
            }            

        }

    }

}