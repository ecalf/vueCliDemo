<template>
    <div class="input-wrap">
        <label class="input-label">
            <span class="input-required" if-show="required">*</span>{{label}}:
        </label>
        <div class="input-field" v-bind:style="inputStyle">
            <input 
                class="input-text"
                v-bind:type="type" 
                v-bind:name="filedName" 
                v-bind:placeholder="placeholder"


                @input="onInput()"
                @change="onChange()"
                v-model="text"
             />

            <div class="input-suffix" if-show="suffix">{{text.length}}/30</div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .input-wrap{
        display:flex;
        justify-content: flex-start;
        align-items: center;
        font-size:16px;
    }
    .input-label{
        margin-right:10px;
        width:105px;
        text-align: right;
        color:#4E5A65;
    }
    .input-required{
        color:#F23A3B;
        margin-right: 2px;
        vertical-align: middle;
    }
    .input-field{
        display:flex;
        justify-content: flex-start;
        align-items: center;
        width:1020px;
        height:40px;
        line-height: 40px;
        border:1px solid #EAECED;
        border-radius:3px;
    }
    .input-text{
        flex:1;
        padding:0 10px;
    }
    .input-suffix{
        width:30px;
        line-height: 40px;
        font-size:14px;
        font-weight:300;
        color:#EAECED;
        margin-right:10px;

    }

</style>


<script>


    export default {
        components:{},
        props:{
            required:Boolean,
            suffix:Boolean,
            maxLength:Number,
            placeholder:String,

            label:String,
            type:String,
            filedName:String,
            width:String
        },
        data(){
            return {
                text:''
            }
        },
        computed:{
            inputStyle(){
                return {
                    width:this.width=='auto'?'auto':(this.width+'px')
                }
            }
        },
        methods:{
            onInput(){

            },
            onChange(){},

        }
        


    }


</script>