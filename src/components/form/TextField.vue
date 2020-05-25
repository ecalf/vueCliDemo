<template>
    <FieldWrap 
        type="readonly"
        v-bind:label="label"
        v-bind:width="width" 
        v-bind:height="height"
        v-bind:labelwidth="labelwidth"
        v-bind:border="border||0"
        >
            <span class="text" v-bind="$attrs">{{value}}</span>
    </FieldWrap>

</template>


<style lang="scss" scoped>
.text{
    flex:1;
    padding:0 10px;
}
</style>


<script>
    /************************************************
        一般用于表单内带标签的只读项数据
        也可以设置 InputField 为readonly 替代该组件
        <InputField 
            label="微信"
            width="220"
            height="25"
            v-bind:border="0"
            value="微信12123"
            readonly
            />
    **************************************************/

    import FieldWrap from  "./FieldWrap.vue";


    export default {
        components:{
            FieldWrap
        },
        props:{
            label:String,
            text:String,
            width:String,
            height:String,
            labelwidth:String,
            border:Number
        },
        inheritAttrs:false,
        data(){
            return {
                value:''
            }
        },
        methods:{

        },
        created(){
            this.value = this.$attrs.value||this.text||'';
        },
        updated(){
            let newValue = this.$attrs.value||this.text;
            if(this.value!=newValue){
                this.value = newValue;
            }
        }
    }


</script>