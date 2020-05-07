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
            type:String, //类型,主要用于区分 textarea 的 label排版
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
            wrapStyle(){//主要是调整 label 对齐方式
                const styleMap = {};
                if(this.type=='textarea'){
                    styleMap['align-items'] = 'flex-start';
                }else if(this.type=='dropListGroup'){
                    styleMap.display = 'flex';
                }else if(this.type=="fileUploadGroup"){
                    styleMap['align-items'] = 'flex-start';
                }


                return styleMap;
            },
            inputStyle(){
                const styleMap = {};
                if(this.width*1>0){
                    styleMap.width = this.width+'px';
                }
                if(this.height*1>1){
                    styleMap.height = this.height+'px';
                }

                console.log(this.label, this.styleMap);
                if(this.type=='textarea'){

                    styleMap['flex-direction'] = 'column';
                    styleMap['align-items'] = 'flex-end';
                                    console.log(this.type)

                    console.log('styleMap:' ,styleMap )
                }else if(this.type=='checkGroup'){
                    styleMap.border = 'none'
                }else if(this.type=='dropListGroup'){
                    styleMap['justify-content'] = 'space-between';
                    styleMap.border = 'none';
                }else if(this.type=="fileUploadGroup"){
                    styleMap.border = 'none';

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