<template>
    <FieldWrap 
        type="dropList" 
        v-bind:data-value="$attrs.value"
        v-bind:error="errorMsg"
        v-bind:label="label"
        v-bind:required="required" 
        v-bind:width="width" 
        v-bind:height="height"
        v-bind:labelwidth="labelwidth"
        v-bind:border="0"
        >
            <DropList
                v-bind:name="name"
                v-bind:prefix="prefix"
                v-bind:list="list"
                v-bind:defaultselected="defaultselected"
                v-bind:defaulttext="defaulttext"
                v-bind:width="width" 
                v-model="value"
                @update-value="onselect"
            />

    </FieldWrap>

</template>


<style lang="scss" scoped>
   
</style>


<script>
    import FieldWrap from  "./FieldWrap.vue";
    import DropList from  "./DropList.vue";

    //todo: update 时未、设置 defaulttext 默认选中第一项
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
            error:String,
            label:String, //标签名
            name:String, //名称，用于表单field
            width:String,//宽度
            height:String,//高度
            labelwidth:String,//label宽度
            list:Array //下拉列表数据
        },
        data(){
            return {
                errorMsg:this.error||'',
                value:''
            }
        },
        

        methods:{
            showError(msg){
                this.errorMsg = msg;
            },
            clearError(){
                this.errorMsg = '';
            },
            onselect(name,value){
                this.value = value;
                this.$emit('update-value',name,value);
                this.$emit('input',value);
            },

        },
        created(){
            //$attrs.value ,v-model surport
            let defaultvalue = (this.$attrs.value!==undefined&&this.$attrs.value)||'';
            this.value = defaultvalue;
        },
        updated(){
            //console.log('updated',this.value,this.$attrs.value);
            if(this.$attrs.value!==undefined&&this.value!=this.$attrs.value){
                this.value = this.$attrs.value||'';
            }

            console.log('droplist value:',this.name,this.value);
        }


    }


</script>