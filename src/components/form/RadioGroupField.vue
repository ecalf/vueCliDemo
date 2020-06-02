<template>
    <FieldWrap
        v-bind:data.value="$attrs.value"
        v-bind:data-count="list.length"
        type="checkGroup" 
        v-bind:label="label"
        v-bind:required="required" 
        v-bind:error="errorMsg"
        v-bind:width="width" 
        v-bind:height="height"
        v-bind:labelwidth="labelwidth"
        v-bind:border="0"
        >

        <CheckBoxRadio v-for="(item,i) in list" 
            ref="childItem"
            type="radio"
            v-bind:key="i"
            v-bind:name="name+'_'+i"
            v-bind:config="item"
            v-bind:addition="item.addition"
            v-model="checked[name+'_'+i]"
            @update-value="oncheck"
            />

    </FieldWrap>
</template>


<style lang="scss" scoped>
    

</style>


<script>
    import FieldWrap from  "./FieldWrap.vue";
    import CheckBoxRadio from  "./CheckBoxRadio.vue";

    export default {
        components:{
            FieldWrap,
            CheckBoxRadio
        },
        props:{
            required:Boolean,
            error:String,
            label:String,
            name:String,
            width:String,
            height:String,
            labelwidth:String,
            list:Array
        },
        data(){
            return {
                errorMsg:this.error||'',
                checked:{},
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
            initValue(value){
                if(value){
                    this.list.forEach((item)=>{
                        item.checked = false;
                    });
                    value.checked = true;
                    this.value = value;

                }else{
                    //list 初始化更新
                    value = this.list.filter((item)=>{
                        return item.checked === true;
                    })[0];

                    this.value = value||'';

                    if(value){
                        this.$emit('update-value',this.name,this.value);
                        this.$emit('input',this.value);//v-model surport
                    }
                }
                
                
            },
            updateCheckStatus(item){//取消其他选项的选中状态
                console.log('this.$refs.childItem>>>',this.$refs.childItem);

                if(this.$refs.childItem&&this.$refs.childItem.length){
                    this.$refs.childItem.forEach((com)=>{
                        if(com.value.id!=item.id){
                            com.triggerCheckStatus(false);
                        }
                        
                    });
                }
            },
            oncheck(name,item){
                if(this.value.id==item.id){//已经选中，无效操作
                    return false;
                }


                this.checked[name] = item;
                this.value = item;
                this.updateCheckStatus(item);
                
                console.log('radioGroup oncheck ',item,item.checked,', value:',this.value);
                this.$emit('update-value',this.name,this.value);
                this.$emit('input',this.value);//v-model surport
            }
        },
        beforeUpdate(){
            //console.log(this.name,' beforeUpdate >>>',this.list,this.value);
            this.initValue(this.$attrs.value);
        },
        updated(){
            //console.log(this.name,' updated >>>',this.list,this.value);
        },
        created(){
            this.initValue(this.$attrs.value);
             //console.log(this.name,' created >>>',this.list,this.value);
        }
    }


</script>