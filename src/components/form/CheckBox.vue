<template>
    <div class="check-box clearfix"
         v-bind:class="{'checked': checked }"
         data-value="item.id" 
         @click="oncheck()">
        <div class="icon"  v-bind:style="iconStyle"></div>
        <div class="text" v-bind:style="textStyle">{{item.text}}</div>
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
            name:String,
            item:Object,//配置项对象
            addition:Object //预留特殊处理
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
            oncheck(){
                this.checked = !this.checked;
                //this.$emit('update-value',this.name,{...this.item,checked:this.checked});
            }
        },
        created(){
            this.checked = !!this.item.checked;
            console.log('check-box created',this.item,this.checked);
            this.$emit('update-value',this.name,{...this.item,checked:this.checked});
        },
        updated(){
            console.log('check-box updated',this.item,this.checked);
            this.$emit('update-value',this.name,{...this.item,checked:this.checked});
            
        }
        


    }

</script>