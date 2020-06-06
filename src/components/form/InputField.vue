<template>
    <FieldWrap 
        type="text"
        v-bind:error="errorMsg"
        v-bind:label="label"
        v-bind:required="required" 
        v-bind:suffix="suffix"
        v-bind:count="value.length"
        v-bind:max-length="maxLength"
        v-bind:width="width" 
        v-bind:height="height"
        v-bind:labelwidth="labelwidth"
        v-bind:border="border"
        >
            <input 
                class="input-text"
                v-bind="$attrs"
                v-bind:placeholder="placeholder"
                v-bind:defaultvalue="defaultvalue" 


                @input="onInput()"
                v-model="value"
             />
    </FieldWrap>

</template>


<style lang="scss" scoped>
    .input-text{
        width:100%;
        padding:0 10px;
    }

</style>


<script>
    import FieldWrap from  "./FieldWrap.vue";


    export default {
        components:{
            FieldWrap
        },
        props:{
            required:Boolean, //是否带必填标记
            suffix:Boolean, //是否末尾统计数字
            maxLength:Number, //最大允许字数
            placeholder:String, //占位文字
            defaultvalue:String,//默认值
            error:String,
            label:String, //标签名
            name:String,//表单项名
            width:String,//宽度
            height:String,//高度
            labelwidth:String,//label宽度
            border:Number //设置边框大小，默认1
        },
        data(){
            return {
                errorMsg:this.error||'',
                value:''
            }
        },
        
        watch:{
            value(newValue,oldValue){
                if(this.maxLength>0&&newValue.length>this.maxLength){
                    this.value = newValue.slice(0,this.maxLength);
                }
            }
        },

        methods:{
            showError(msg){
                this.errorMsg = msg;
            },
            clearError(){
                this.errorMsg = '';
            },
            onInput(){
                this.$emit('update-value',this.name,this.value);

                /***********************************************************
                支持 v-model 指令，该指令默认父组件把数据项绑定在本组件的 value 属性上,
                并给本组件 自动注册一个 input 事件来更新父组件的数据项,
                给了给父组件更新数据,本组件需要触发 input 事件并传递数据.
                *************************************************************/
                this.$emit("input", this.value);
                //console.log(this.$props,this.$attrs,this.$data);
            }

        },
        created(){
            //$attrs.value ,v-model surport
            let defaultvalue = (this.$attrs.value!==undefined&&this.$attrs.value)||this.defaultvalue||'';
            this.value = defaultvalue;
        },
        updated(){
            if(this.$attrs.value!==undefined&&this.value!=this.$attrs.value){
                this.value = this.$attrs.value||'';
            }
        }


    }


</script>