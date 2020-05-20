<template>
      <FieldWrap
        type="dateTimePicker" 
        v-bind:label="label"
        v-bind:required="required" 
        v-bind:error="error"
        v-bind:width="width" 
        v-bind:height="height"
        v-bind:labelwidth="labelwidth"
        >

      <el-date-picker
        v-bind:editable="false"
        v-bind:value-format="valueFormat"
        v-bind:picker-options="pickerOptions"
        v-model="value"
        type="date"
        placeholder="选择日期"
        @change="pickDate"
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
          error:String,
          required:Boolean,
          name:String,
          label:String,
          width:String,
          height:String,
          labelwidth:String,
          valueFormat:String
      },
      data() {
        return {
          value:'',
          pickerOptions: {
            disabledDate(time) {
                return time.getTime() < Date.now();
            },

/*            shortcuts: [{
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
            }]*/
          }
  
        };
    },
    methods:{
      pickDate(date){
        this.value = date;
        this.$emit('update-value',this.name,date);
        this.$emit("input", this.value);
      }
    },
    created(){
        //$attrs.value ,v-model surport
        let defaultvalue = (this.$attrs.value!==undefined&&this.$attrs.value)||this.defaultvalue||'';
        this.value = defaultvalue;
    },
    updated(){
        //console.log('updated',this.value,this.$attrs.value);
        if(this.$attrs.value!==undefined&&this.value!=this.$attrs.value){
            this.value = this.$attrs.value||'';
        }
    }

};


</script>