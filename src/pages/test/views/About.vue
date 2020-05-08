<template>
  <div class="about">
    <h1>This is an about page,test i18n</h1>
    <div>    
        <span>{{$t('common.signin')}}</span> |
        <span>{{$t('common.signout')}}</span> |
        <span>{{$t('common.register')}}</span>
    </div>

    <div>
        <a href="javascript:;" @click="setLang('zh-CN')">ch</a> |
        <a href="javascript:;" @click="setLang('en-US')">en</a>
    </div>

    <div>
      <p>test module store action</p>
      <p>moduleName:{{moduleName}}</p>
      <p>content:{{content}}</p>
      <button @click="modifyName('newAboutModuleName')">modifyName</button>
    </div>

    <div>
        <p>moduleName: {{moduleName}}</p>
        <p>content: {{content}}</p>
        <p>text:{{text}}</p>
    </div>
  </div>
</template>


<script>
import {mapState, mapActions,mapGetters,mapMutations,createNamespacedHelpers} from 'vuex';
import {getLang,setLang} from '@src/utils/common';
const namedMapMethods = createNamespacedHelpers('about')

export default {
  name: "About",
  computed:{
    //使用store子模块数据的几种方式
    //1.通过rootStore 和 rootState
    ...mapState({
      moduleName: state => state.about.moduleName,
      content: state => state.about.content
    }),
    text(){//常規的computed方法
      console.log('test subModule getters');
      return this.$store.getters['about/text'];
    }


    //2.传入模块名
    //...mapState('about',['moduleName','content']),
    //...mapGetters('about',['text'])


    //3.绑定模块的辅助函数
    //...namedMapMethods.mapState(['moduleName','content']),
    //...namedMapMethods.mapGetters(['text'])

  },
  methods:{
    setLang(lang){
        setLang(this,lang);
    },
    modifyName(newName){
      console.log('modifyName called in views/about');
      //this.$store.dispatch('about/modifyNameOfAbout',newName);
      this.$store.dispatch('modifyNameOfAboutTest',newName);
    }

  }
};
</script>
