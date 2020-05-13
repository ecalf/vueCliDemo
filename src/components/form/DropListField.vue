<template>
    <FieldWrap 
        type="text" 
        v-bind:label="label"
        v-bind:required="required" 
        v-bind:width="width" 
        v-bind:height="height"
        >
            <DropList
                v-bind:name="name"
                v-bind:prefix="prefix"
                v-bind:list="list"
                v-bind:defaultselected="defaultselected"
                v-bind:defaulttext="defaulttext"
                @update-value="onselect"
            />

    </FieldWrap>

</template>


<style lang="scss" scoped>
   
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
            prefix:Boolean,//是否带有前缀icon
            required:Boolean, //是否带必填标记
            defaulttext:String,//默认显示文字
            defaultselected:Number,//默认选中第几项
            label:String, //标签名
            name:String,
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
            onselect(name,value){
                this.$emit('update-value',name,value);
            },

        }


    }


</script>