<template>
    <InputFieldWrap 
        v-bind:type="'text'" 
        v-bind:label="label"
        v-bind:required="required" 
        v-bind:suffix="suffix"
        v-bind:count="value.length"
        v-bind:max-length="maxLength"
        v-bind:width="width" 
        v-bind:height="height"
        >
            <input 
                class="input-text"
                v-bind:name="filedName" 
                v-bind:placeholder="placeholder"
                v-bind:defaultvalue="defaultvalue" 


                @input="onInput()"
                @change="onChange()"
                v-model="value"
             />
    </InputFieldWrap>

</template>


<style lang="scss" scoped>
    .input-text{
        flex:1;
        padding:0 10px;
    }

</style>


<script>
    import InputFieldWrap from  "./FieldWrap.vue";


    export default {
        components:{
            InputFieldWrap
        },
        props:{
            required:Boolean, //是否带必填标记
            suffix:Boolean, //是否末尾统计数字
            maxLength:Number, //最大允许字数
            placeholder:String, //占位文字
            defaultvalue:String,//默认值

            label:String, //标签名
            type:String, //类型,主要用于区分 textarea 的 label排版
            filedName:String,//表单项名
            width:String,//宽度
            height:String//高度
        },
        data(){
            return {
                value:''
            }
        },
        watch:{
            value(newValue,oldValue){
                if(newValue.length>this.maxLength){
                    this.value = newValue.slice(0,this.maxLength);
                }
            }
        },

        methods:{
            onInput(){

            },
            onChange(){},

        },
        created(){
            this.value = this.defaultvalue;
        }


    }


</script>