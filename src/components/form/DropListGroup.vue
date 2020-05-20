<template>
    <FieldWrap 
        type="dropListGroup" 
        v-bind:label="label"
        v-bind:error="error"
        v-bind:required="required" 
        v-bind:width="width" 
        v-bind:height="height"
        >
            <div v-for="(item,index) of list" v-bind:key="index" class="drop-list-wrap">
                <DropList
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
            error:String,
            label:String, //标签名
            name:String, //名称，用于表单field
            width:String,//宽度
            height:String,//高度
            list:Array //数据
        },
        data(){
            let obj = {};
            for(let i=0;i<this.list;i++){
                obj[this.name+'_'+i] = '';
            }

            return {
                selected:obj,
                value:[]
                
            }
        },
        methods:{
            onselect(name,value){
                this.selected[name] = value;
                this.value = Object.values(this.selected);

                this.$emit('update-value',this.name,this.value);
            }
        }

    }

</script>
