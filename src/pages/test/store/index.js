//import Vue from "vue";
import Vuex from "vuex";
import home from "@src/api/home";
import about from "./modules/about";
import profile from "@pages/ucenter/store/profile";

//Vue.use(Vuex);


export default function createStore(){
    return new Vuex.Store({
        modules:{
            about,
            profile
        },
        state: {
            txt: "hello world",
            name: 'Lucy',
            secondName:'bush',
            nameList:[]
        },

        //store 的计算属性,通常多组件公用属性可定义为 getter ,通过 store.getters.fullName 可以访问
        getters: {
            fullName (state, getters ) {
                console.log("getters['about/text']>>>",getters['about/text']);

                return state.name+' '+state.secondName;
            }
        },
        mutations: {//update state
            setName(state, newName) {
                console.log('mutations setName: ',newName);
                state.name = newName;
            },
            setNameList(state, nameList){
                state.nameList = nameList;
            }
        },
        actions: {
            //action.method(context,data) //context 具备与 store 对象相同的属性和方法，但不等同于 store
            async getNameList({commit}){
                //commit mutation,asycn codes allowed in action
                let nameList = await home.getNames({id:123456});
                console.log('async action getNameList>>>',nameList);

                commit('setNameList', nameList);
            },
            modifyName({commit}, newName) {
                console.log('action modifyName: ',newName);
                commit('setName', newName);
            }
        }

    });
} 


