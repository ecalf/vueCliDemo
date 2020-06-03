<template>
    <FieldWrap 
        v-bind:data-value="$attrs.value"
        type="dropListGroup" 
        v-bind:label="label"
        v-bind:error="errorMsg"
        v-bind:required="required" 
        v-bind:width="width" 
        v-bind:height="height"
        v-bind:labelwidth="labelwidth"
        v-bind:border="0"
        >
            <div v-for="(item,index) of list" v-bind:key="index" class="drop-list-wrap">
                <DropList
                    v-bind:key="index"
                    v-bind:name="name+'_'+index"
                    v-bind:prefix="prefix"
                    v-bind:defaulttext="item.text"
                    v-bind:list="item.child||[]"
                    @update-value="onselect"
                />
            </div>
    </FieldWrap>  
</template>

<style lang="scss" scoped>
    .drop-list-wrap{
        display:inline-block;
    }

</style>

<script>
    import FieldWrap from  "./FieldWrap.vue";
    import DropList from './DropList.vue';


    export default {
        components:{
            FieldWrap,
            DropList
        },
        props:{
            prefix:Boolean,//是否带有前缀icon
            required:Boolean, //是否带必填标记
            error:String, //表单错误
            label:String, //标签名
            name:String, //名称，用于表单field
            width:String,//宽度
            height:String,//高度
            labelwidth:String,//label宽度
            list:Array //数据
        },
        data(){
            let obj = {};
            for(let i=0;i<this.list;i++){
                obj[this.name+'_'+i] = '';
            }

            return {
                errorMsg:this.error||'',
                selected:obj,
                value:[]
                
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
                this.selected[name] = value;
                this.value = Object.values(this.selected);

                this.$emit('update-value',this.name,this.value);
                this.$emit('input',this.value);
            }
        },
        created(){
            //$attrs.value ,v-model surport
            let defaultvalue = (this.$attrs.value!==undefined&&this.$attrs.value)||[];
            this.value = defaultvalue;
        },
        updated(){
            //console.log('updated',this.value,this.$attrs.value);
            if(this.$attrs.value!==undefined&&this.value!=this.$attrs.value){
                this.value = this.$attrs.value||[];
            }
        }

    }

</script>
