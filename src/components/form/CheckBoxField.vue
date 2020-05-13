<template>
    <FieldWrap
        type="checkGroup" 
        v-bind:label="label"
        v-bind:required="required" 
  
        v-bind:width="width" 
        v-bind:height="height"
        >

        <CheckBox v-for="(item,i) in list" 
            v-bind:name="name"
            v-bind:value="item.id+''" 
            v-bind:text="item.text"  
            v-bind:defaultchecked="!!item.checked"
            v-bind:addition="item.addition"
            @update-value="oncheck"
            />

    </FieldWrap>
</template>


<style lang="scss" scoped>
    

</style>


<script>
    import FieldWrap from  "./FieldWrap.vue";
    import CheckBox from  "./CheckBox.vue";

    export default {
        components:{
            FieldWrap,
            CheckBox
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
                value:[]
            }
        },
        methods:{
            oncheck(name,item){
                if(item.checked){
                    this.value.push(item);
                }else{
                    this.value = this.value.filter((obj)=>{
                        return obj.text!=item.text;
                    });
                }

                this.$emit('update-value',this.name,this.value);
            }
        }
    }


</script>