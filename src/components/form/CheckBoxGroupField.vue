<template>
    <FieldWrap
        type="checkGroup" 
        v-bind:label="label"
        v-bind:required="required" 
        v-bind:error="error"
        v-bind:width="width" 
        v-bind:height="height"
        >

        <CheckBoxRadio v-for="(item,i) in list" 
            type="checkbox"
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
            error:String,
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
                console.log('checkGroup oncheck ',item,item.checked);
                if(item.checked){
                    this.value.push(item);
                }else{
                    this.value = this.value.filter((obj)=>{
                        return (obj.id!=obj.id)||(obj.text!=item.text);
                    });
                }

                console.log('checkGroup value ',this.value);
                this.$emit('update-value',this.name,this.value);
            }
        }
    }


</script>