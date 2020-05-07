<template>
    <div class="input-wrap" v-bind:style="wrapStyle">
        <label class="input-label">
            <span class="input-required" v-if="required">*</span>{{label}}:
        </label>
        <div class="input-field" v-bind:style="inputStyle">
            <slot name="default"></slot>
            <div class="input-suffix" v-if="suffix">{{count}}/{{maxLength}}</div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    $fieldHeight:40px;

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
        height:$fieldHeight;
        line-height: $fieldHeight;
        border:1px solid #EAECED;
        border-radius:3px;
    }

    .input-suffix{
        min-width:30px;
        line-height: $fieldHeight;
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
            type:String,
            count:Number,
            required:Boolean,
            label:String,
            width:String,
            height:String,
            suffix:Boolean,
            maxLength:Number
            
        },
        data(){
            return {
                
            }
        },
        computed:{
            wrapStyle(){
                const styleMap = {};
                styleMap['align-items'] = (this.type=='textarea'?'flex-start':'center');

                return styleMap;
            },
            inputStyle(){
                const styleMap = {};
                styleMap.width = (this.width=='auto'?'auto':(this.width+'px'));
                styleMap.height = (this.height=='auto'?'auto':(this.height+'px'));
                styleMap['flex-direction'] = (this.type=='textarea'?'column':'row');
                styleMap['align-items'] = (this.type=='textarea'?'flex-end':'center');


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