<template>
    <FieldWrap
        type="checkGroup" 
        v-bind:label="label"
        v-bind:required="required" 
  
        v-bind:width="width" 
        v-bind:height="height"
        >

        <CheckBoxRadio v-for="(item,i) in list" 
            ref="childItem"
            type="radio"
            v-bind:name="name"
            v-bind:item="item"
            v-bind:addition="item.addition"
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
            label:String,
            name:String,
            width:String,
            height:String,
            list:Array
        },
        data(){
            return {
                value:''
            }
        },

        methods:{
            updateCheckStatus(item){//取消其他选项的选中状态
                console.log(this.$refs);
                if(this.$refs.childItem&&this.$refs.childItem.length){
                    this.$refs.childItem.forEach((com)=>{
                        com.triggerCheckStatus(com.value.id==item.id?item.checked:!item.checked);
                    });
                }
            },
            oncheck(name,item){
                this.updateCheckStatus(item);

                if(item.checked){
                    this.value = item;
                }else if(this.value.id==item.id){
                    this.value = '';
                }

                console.log('radioGroup oncheck ',item,item.checked,', value:',this.value);
                this.$emit('update-value',this.name,this.value);
            }
        }
    }


</script>