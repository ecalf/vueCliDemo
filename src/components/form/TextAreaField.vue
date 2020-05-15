

<template>
    <FieldWrap 
        type="textarea" 
        v-bind:label="label"
        v-bind:required="required" 
        v-bind:suffix="suffix"
        v-bind:count="value.length"
        v-bind:max-length="maxLength"
        v-bind:width="width" 
        v-bind:height="height" 
        >

             <textarea
                class="input-text"
                v-bind:placeholder="placeholder"
                v-bind:defaultvalue="''" 


                @input="onInput()"
                @change="onChange()"
                v-model="value">

            </textarea> 
    </FieldWrap>
</template>


<style lang="scss" scoped>
   
    .input-text{
        flex:1;
        width: 100%;
        padding:0 10px;
    }


</style>


<script>
    import FieldWrap from  "./FieldWrap.vue";

    export default {
        components:{
            FieldWrap
        },
        props:{
            required:Boolean,
            suffix:Boolean,
            maxLength:Number,
            placeholder:String,
            defaultvalue:String,

            label:String,
            name:String,
            width:String,
            height:String
        },
        data(){
            return {
                value:''
            }
        },
        computed:{

            inputStyle(){
                const styleMap = {};
                styleMap.width = (this.width=='auto'?'auto':(this.width+'px'));


                return styleMap;
            }
        },
        watch:{
            value(newValue,oldValue){
                if(newValue.length>this.maxLength){
                    this.value = newValue.slice(0,this.maxLength);
                }
            }
        },
        methods:{
            onInput(){

            },
            onChange(){
                this.$emit('update-value',this.name,this.value);
            },

        },
        created(){
            this.value = this.defaultvalue;
        }
        


    }


</script>