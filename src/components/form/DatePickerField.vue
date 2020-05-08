<template>
      <FieldWrap
        type="checkGroup" 
        v-bind:label="label"
        v-bind:required="required" 
  
        v-bind:width="width" 
        v-bind:height="height"
        >

      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期"
       />
        

    </FieldWrap>

</template>


<style lang="scss" scoped>
  

</style>

<script>
import Vue from '@utils/enhanceVue';
import VueI18n from 'vue-i18n';
import {getLang,setLang} from '@utils/common';

import enLocale from 'element-ui/lib/locale/lang/en';
import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import ElementLocale from 'element-ui/lib/locale';
import 'element-ui/lib/theme-chalk/index.css';

import FieldWrap from  "./FieldWrap.vue";
import DatePicker from 'element-ui';

Vue.use(DatePicker);


// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: getLang(), // 定义默认语言为中文 
  fallbackLocale: 'zh-CN',//没有英文的时候默认中文语言
  silentFallbackWarn: true,//抑制警告
  messages: {
    'zh-CN':{
        ...zhLocale
    },   
      'en-US': {
        ...enLocale
    }
  }
});

ElementLocale.i18n((key, value) => i18n.t(key, value));


export default {
  components:{
          FieldWrap
      },
      props:{
          required:Boolean,
          label:String,
          width:String,
          height:String,
          list:Array
      },
      data() {
        return {
          pickerOptions: {
            disabledDate(time) {
            return time.getTime() > Date.now();
            },
            shortcuts: [{
              text: '今天',
              onClick(picker) {
                picker.$emit('pick', new Date());
              }
            }, {
              text: '昨天',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                picker.$emit('pick', date);
              }
            }, {
              text: '一周前',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', date);
              }
            }]
          },
          value1: '',
          value2: '',
        };
    },
    methods:{

    }

};


</script>