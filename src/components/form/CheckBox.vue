<template>
    <div class="check-box clearfix" v-bind:class="{'checked': checked }" @click="onCheck($event)">
        <div class="icon"  v-bind:style="iconStyle"></div>
        <div class="text" v-bind:style="textStyle">{{text}}</div>
    </div>
</template>


<style lang="scss" scoped>
    .check-box{
        display:inline-block;
        cursor: default;
        margin-right:10px;
        .icon{
            position: relative;
            float:left;
            width:15px;
            height:15px;
            margin:5px 5px 5px 0;
            background-color:$bgwhite;
            @include default-border;
            @include default-radius;

            &::after{
                box-sizing: content-box;
                content: "";
                border: 1px solid #FFF;
                border-left: 0;
                border-top: 0;
                height: 7px;
                left: 4px;
                position: absolute;
                top: 1px;
                transform: rotate(45deg) scaleY(0);
                width: 3px;
                transition: transform .15s ease-in .05s;
                transform-origin: center;
            }
        }

        .text{
            float:left;
            height:25px;
            line-height: 25px;
            font-size:16px;
            font-weight:300;
            color:$fontColor;
        }

        &:hover{
            .icon{
                border-color:$ac;
            }
        }

        &.checked{
            .icon{
                background-color: $ac;
                &::after{
                    transform: rotate(45deg) scaleY(1);
                }
            }
        }
    }

</style>


<script>
    export default {
        components:{},
        props:{
            value:String,
            text:String,
            defaultchecked:Boolean,
            addition:Object
        },
        data(){
            return {
                checked:false
            };
        },
        computed:{
            textStyle(){
                let styleMap = {};
                if(this.addition&&this.addition.style){
                    styleMap['color'] = this.addition.style.color;
                }
                return styleMap;
                
            },
            iconStyle(){
                let styleMap = {};
                if(this.addition&&this.addition.style){
                    styleMap['border-color'] = this.addition.style.color;
                }
                return styleMap;
            }
        },
        methods:{
            onCheck(e){
                this.checked = !this.checked;

                //this.$emit();

            }
        },
        created(){
            this.checked = this.defaultchecked;
        }
        


    }

</script>