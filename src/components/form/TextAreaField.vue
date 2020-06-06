

<template>
    <FieldWrap 
        type="textarea" 
        v-bind:error="errorMsg"
        v-bind:label="label"
        v-bind:required="required" 
        v-bind:suffix="suffix"
        v-bind:count="value.length"
        v-bind:max-length="maxLength"
        v-bind:width="width" 
        v-bind:height="height" 
        v-bind:labelwidth="labelwidth"
        v-bind:border="border"
        >

             <textarea
                class="input-text"
                v-bind="$attrs"
                v-bind:placeholder="placeholder"
                v-bind:defaultvalue="''" 


                @input="onInput()"
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
            error:String,
            label:String,
            name:String,
            width:String,
            height:String,
            labelwidth:String,
            border:Number
        },
        data(){
            return {
                errorMsg:this.error||'',
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
                if(this.maxLength>0&&newValue.length>this.maxLength){
                    this.value = newValue.slice(0,this.maxLength);
                }
            }
        },
        methods:{
            showError(msg){
                this.errorMsg = msg;
            },
            clearError(){
                this.errorMsg = '';
            },
            onInput(){
                this.$emit('update-value',this.name,this.value);

                //v-model surport
                this.$emit("input", this.value);
            }
        },
        created(){
            //$attrs.value ,v-model surport
            let defaultvalue = (this.$attrs.value!==undefined&&this.$attrs.value)||this.defaultvalue||'';
            this.value = defaultvalue;
        },
        updated(){
            //console.log('updated',this.value,this.$attrs.value);
            if(this.$attrs.value!==undefined&&this.value!=this.$attrs.value){
                this.value = this.$attrs.value||'';
            }
        }

    }


</script>