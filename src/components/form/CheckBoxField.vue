<template>
    <FieldWrap
        type="checkGroup" 
        v-bind:label="label"
        v-bind:required="required" 
  
        v-bind:width="width" 
        v-bind:height="height"
        >

        <CheckBox v-for="(item,i) in list" 
            v-bind:value="item.id+''" 
            v-bind:text="item.text"  
            v-bind:defaultchecked="!!item.checked"
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
            width:String,
            height:String,
            list:Array
        },
        data(){
            return {

            }
        },
        methods:{

        }
    }


</script>