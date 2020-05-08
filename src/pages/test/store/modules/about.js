export default {
    namespaced: true,//必须通过命名空间访问子模块的 action、mutation 和 getter
    //strict模式：任何 state 的变更如果不是通过 mutation commit 的都将被阻止,存在性能损失,只在开发环境使用
    strict: process.env.NODE_ENV !== 'production',
    state: {
        //模块外使用： store.state.moduleName.content
        content:"content of about",
        moduleName:'aboutStore' 
    },
    
    getters: {
        //模块外使用：getters['moduleName/text']
        text: (state, getters, rootState,rootGetters) => {
          return 'test about.getters.text>>>'+state.moduleName+' content: '+state.content;
        }
    },
    mutations: {
        //模块外使用：commit('moduleName/setModuleName')
       setModuleName(state, newName){
            state.moduleName = newName;
       }
    },
    actions: {
        //action.method(context,data) 根节点状态则为 context.rootState

        //模块外使用： dispatch('moduleName/modifyNameOfAbout',newName)
        //模块内使用: dispatch('modifyNameOfAbout',newName)
        modifyNameOfAbout({state,commit, rootState}, newName) {
            console.log('action modifyName, commit setModuleName: ',newName);
            commit('setModuleName', newName);
        },
        modifyNameOfAboutTest: {
            root: true, //使该action暴露到全局
            handler (context, newName) {
                console.log('modifyNameOfAboutTest');
                context.dispatch('modifyNameOfAbout',newName)
            } // -> 'someAction'
        }
    }

}