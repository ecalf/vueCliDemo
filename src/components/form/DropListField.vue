<template>
    <FieldWrap 
        v-bind:type="'text'" 
        v-bind:label="label"
        v-bind:required="required" 
  
        v-bind:width="width" 
        v-bind:height="height"
        >
            <DropList
                v-bind:prefix="true"
                v-bind:list="list"

            />

    </FieldWrap>

</template>


<style lang="scss" scoped>
    .input-text{
        flex:1;
        padding:0 10px;
    }

</style>


<script>
    import FieldWrap from  "./FieldWrap.vue";
    import DropList from  "./DropList.vue";


    export default {
        components:{
            FieldWrap,
            DropList
        },
        props:{
            required:Boolean, //是否带必填标记
            defaultvalue:String,//默认值
            label:String, //标签名
            width:String,//宽度
            height:String,//高度
            list:Array //下拉列表数据
        },
        data(){
            return {
                value:''
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