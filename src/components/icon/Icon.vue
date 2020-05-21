<template>
    <i class="icon"
        v-bind:style="iconStyle"
        @click="onclick">

       {{src?'':(content||'')}}
    </i>

</template>


<style lang="scss" scoped>
    .icon{
        position: relative;
        vertical-align: middle;

        display: inline-flex;
        justify-content: center;
        align-items: center;

        min-width:  16px; //高宽一般约定为8的整数倍
        min-height: 16px;
        margin: 5px;
        padding: 5px;
        overflow: hidden;

        text-align: center;
        font-style: normal;
        cursor:default;
        color:$defaultColor;
        
        background-repeat:no-repeat;
        background-position: center;
        background-clip:border-box;
        background-origin:border-box;
        //background-image: url(~@assets/images/icon/editable.png);

        @include default-border;
        @include default-radius;

        &:hover{
            color:$hoverColor;
        }

        &:active{
            color:$activeColor;
        }
    }
</style>


<script>
    export default {
        props:{
            width:Number, //icon 宽度
            height:Number,//icon 高度
            border:Number,//icon 边框
            radius:Number,//icon 圆角

            content:String, //文字类icon
            src:String //图片类icon，优先于 content 展示
        },
        data(){
            return {

            }
        },
        computed:{
            iconStyle(){
                let styleMap = {};

                if(!this.src&&this.content){
                    if(this.width*1>0){
                        styleMap['min-width']=this.width+'px';
                    }

                    if(this.height*1>0){
                        styleMap['min-height']=this.height+'px';
                    }

                    styleMap['background'] = 'none';

                }else {
                    if(this.width*1>0){
                        styleMap.width=this.width+'px';
                    }

                    if(this.height*1>0){
                        styleMap.height=this.height+'px';
                    }

                    if(this.src){
                        styleMap['background-image'] = 'url('+this.src+')';
                    }
                }
               

                if(this.border!=undefined){
                    styleMap['border-width'] = (this.border>>0)+'px';
                }

                if(this.radius!=undefined){
                    styleMap['border-radius'] = (this.radius>>0)+'px';
                }

                return styleMap;
            }
      
        },
        methods:{
            onclick(){
                this.$emit("on-click");
            }
        }
    }

</script>