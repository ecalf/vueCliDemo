<template>
    <div class="input-wrap">
        <label class="input-label">
            <span class="input-required" v-if="required">*</span>{{label}}:
        </label>
        <div class="input-field" v-bind:style="inputStyle">
            <textarea
                class="input-text"
                v-bind:name="filedName" 
                v-bind:placeholder="placeholder"


                @input="onInput()"
                @change="onChange()"
                v-model="text">

            </textarea> 

            <div class="input-suffix" v-if="suffix">{{text.length}}/30</div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .input-wrap{
        display:flex;
        justify-content: flex-start;
        align-items: flex-start;
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
        align-items: flex-end;
        flex-direction: column;
        width:1020px;
        height:100px;
        line-height: 40px;
        border:1px solid #EAECED;
        border-radius:3px;
    }
    .input-text{
        flex:1;
        width: 100%;
        padding:0 10px;
    }
    .input-suffix{
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
            filedName:String,
            width:String,
            height:String
        },
        data(){
            return {
                text:''
            }
        },
        computed:{

            inputStyle(){
                const styleMap = {};
                styleMap.width = (this.width=='auto'?'auto':(this.width+'px'));


                return styleMap;
            }
        },
        methods:{
            onInput(){

            },
            onChange(){},

        }
        


    }


</script>