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

        <CheckBoxRadio 
            v-for="(item,i) in list" 
            type="checkbox"
            v-bind:key="i"
            v-bind:name="name+'_'+i"
            v-bind:config="item"
            v-model="checked[name+'_'+i]"
            @update-value="oncheck"
            />

    </FieldWrap>
</template>


<style lang="scss" scoped>
    

</style>


<script>
    import Vue from "vue";
    import FieldWrap from  "./FieldWrap.vue";
    import CheckBoxRadio from  "./CheckBoxRadio.vue";

    export default {
        components:{
            FieldWrap,
            CheckBoxRadio
        },
        props:{
            error:String,
            required:Boolean,
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
            initValue(value){
                console.log(this.name,'initValue');
                if(value&&value.length){
                    this.list.forEach((item)=>{
                        item.checked = false;
                    });

                    value.forEach((item)=>{
                        item.checked = true;
                    });

                    this.value = value;

                }else{
                    value = this.list.filter((item)=>{
                        return item.checked === true;
                    });
                    this.value = value;

                    if(value.length){//初始化上报一次值
                        this.$emit('update-value',this.name,this.value);
                        this.$emit("input", this.value);//支持 v-model 指令
                    }
                }


                //console.log('checkGroup value ',this.value);
               
                
                return value;
            },
            oncheck(name,item){
                console.log('checkGroup oncheck ',item,item.checked);
                
                this.checked[name] = item;
                if(item.checked){
                    this.value = [].concat(this.value,item);
                }else{
                    this.value = this.value.filter((obj)=>{
                        return obj.id!=item.id;
                    });
                }

                //console.log('checkGroup value ',this.value);
                this.$emit('update-value',this.name,this.value);
                this.$emit("input", this.value);//支持 v-model 指令
            }
        },
       
        beforeUpdate(){
            //console.log(this.name,'beforeUpdate  list>>>',this.list,this.value);
            this.value = this.initValue(this.$attrs.value||[]);
        },
        updated(){
            //console.log(this.name,'updated  list>>>',this.list,this.value);
        },
        created(){
            this.value = this.initValue(this.$attrs.value||[]);
        }
    }


</script>