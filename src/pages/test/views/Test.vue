<template>
  <div class="home">
    <img alt="Vue logo" src="@assets/logo.png" />
    <HelloWorld msg="Welcome to home page" @child-msg="showChildMsg"/>

    <div>component:home</div>
    <p>msg from component HelloWorld: {{childMsg}}</p>

    <Common p="used in home page " />

    <button @click="modifyNameAction('bighone')">test vuex,set name: bighone</button>
    <button @click="modifyNameAction('Lucy')">test vuex,set name: Lucy</button>
    <div> name: {{ name }} </div>
    <div> fullName: {{ fullName }}</div>
    <div>{{ helloWords }}</div>

    <button @click="getNameList()">test ajax in store action</button>
    <div v-for="(item, index) of nameList">
        <div>{{index+1}} {{ item }}</div>
    </div>

    <div>   
        <p>test subModuleName store</p>
        <p>subModuleName: {{subModuleName}}</p>
        <p>subModuleContent: {{subModuleContent}}</p>
        <p>subModuleText: {{subModuleText}}</p>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions,mapGetters,mapMutations} from 'vuex';
import Common from "@components/Common.vue";
import HelloWorld from "../components/HelloWorld.vue";

export default {
    name: "Test",
    components: {//注册子组件
        HelloWorld,
        Common
    },
    data(){
        return {
            childMsg:'test emit childMsg'
        }
    },
    computed: {
        ...mapState(['name','nameList']),
        fullName () {
            return this.$store.getters.fullName;
        },
        helloWords(){
            return 'hello '+ this.$store.getters.fullName;
        },
        subModuleName(){
            return this.$store.state.about.moduleName;
        },
        subModuleContent(){
            return this.$store.state.about.content;
        },
        subModuleText(){
            return this.$store.getters['about/text'];
        }
    },

    methods: {
        //test emit
        showChildMsg(childMsg){
            this.childMsg = childMsg;
        },

        //update 数据的几种方法
        //...mapActions(['modifyName']), 
        modifyNameAction(newName) {
            //1.mapActions(['modifyName']) 使 this.modifyName(newName) 映射为 this.$store.dispatch('modifyName',newName)
            //this.modifyName(newName); 

            //2.this.$store.dispatch('modifyName',newName);//dispatch action

            //3.不涉及异步代码可以直接 commit 定义在 store 中的 mutation
            this.$store.commit('setName', newName);//commit
        },
        getNameList(){//触发异步action
            this.$store.dispatch('getNameList');
        }
        
    }
};






</script>
