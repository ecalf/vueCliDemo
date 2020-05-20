<template>
    <div class="input-wrap" v-bind:style="wrapStyle">
        <label class="input-label" v-bind:style="labelStyle">
            <span class="input-required" v-if="required">*</span>{{label}}:
        </label>
        <div class="input-field" v-bind:style="inputStyle" v-bind:class="{error:!!error}">
            <slot name="default"></slot>
            <div class="input-suffix" v-if="suffix">{{count}}/{{maxLength}}</div>

            <div class="input-error" v-show="error" v-bind:style="errorStyle">{{error}}</div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    $fieldHeight:40px;
    $red:#F23A3B;

    .input-wrap{
        display:inline-flex;
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
        color:$red;
        margin-right: 2px;
        vertical-align: middle;
    }
    .input-field{
        position: relative;
        display:flex;
        justify-content: flex-start;
        align-items: center;
        width:1020px;
        height:$fieldHeight;
        line-height: $fieldHeight;
        border:1px solid #EAECED;
        border-radius:3px;

        &.error{
            border-color: $red;
        }
    }

    .input-suffix{
        min-width:30px;
        line-height: $fieldHeight;
        font-size:14px;
        font-weight:300;
        color:#EAECED;
        margin-right:10px;

    }
    .input-error{
        position: absolute;
        top:$fieldHeight;
        left:0;
        right:0;
        font-size:12px;
        line-height: 14px;
        height: 14px;
        color:$red;
        padding:0;

    }

</style>


<script>

    export default {
        components:{},
        props:{
            type:String, //类型,主要用于区分 textarea 的 label排版
            count:Number,
            required:Boolean,
            label:String,
            labelwidth:String,
            width:String,
            height:String,
            suffix:Boolean,
            maxLength:Number,
            error:String
            
        },
        data(){
            return {
                
            }
        },
        computed:{
            wrapStyle(){//主要是调整 label 对齐方式
                const styleMap = {};
                if(this.type=='textarea'){
                    styleMap['align-items'] = 'flex-start';
                }else if(this.type=='editor'){
                    styleMap['align-items'] = 'flex-start';
                }else if(this.type=="fileUploadGroup"){
                    styleMap['align-items'] = 'flex-start';
                }


                return styleMap;
            },
            labelStyle(){
                const styleMap = {};
                if(this.labelwidth*1>0){
                    styleMap.width = this.labelwidth+'px';
                }

                return styleMap;
            },
            inputStyle(){
                const styleMap = {};
                if(this.width*1>0){
                    styleMap.width = this.width+'px';
                }else if(this.width=='auto'){
                    styleMap.width = this.width;
                }

                if(this.height*1>1){
                    styleMap.height = this.height+'px';
                }else if(this.height=='auto'){
                    styleMap.height = this.height;
                }

                if(this.type=='textarea'){
                    styleMap['flex-direction'] = 'column';
                    styleMap['align-items'] = 'flex-end';
                }else if(this.type=='editor'){
                    styleMap['flex-direction'] = 'column';
                    styleMap.border = 'none'

                }else if(this.type=='checkGroup'){
                    styleMap.border = 'none'
                }else if(this.type=='dropListGroup'){
                    styleMap['justify-content'] = 'space-between';
                    styleMap.border = 'none';
                }else if(this.type=="fileUploadGroup"){
                    styleMap.border = 'none';

                }else if(this.type=='dateTimePicker'){
                    styleMap.border = 'none';
                }

                return styleMap;
            },
            errorStyle(){
                const styleMap = {};
                if(this.height*1>1){
                    styleMap.top = this.height+'px';
                }

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