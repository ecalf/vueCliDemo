<template>
    <div class="check-box clearfix"
         v-bind:class="{'checked': checked,emphasize:item.addition&&item.addition.emphasize }"
         data-value="item.id" 
         @click="oncheck()">
        <div class="icon"
            v-bind:class="{'icon-checkbox':type=='checkbox','icon-radio':type=='radio'}"  
        ></div>
        <div class="text"
            v-bind:class="{tip:item.addition&&item.addition.tip}"
            v-bind:data-title="item.addition&&item.addition.tip||''"
        >{{item.text}}</div>

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
        }

        .icon-checkbox{
             &::after{
                box-sizing: content-box;
                content: "";
                border: 1px solid $bgwhite;
                border-left: 0;
                border-top: 0;
                height: 7px;
                position: absolute;
                left: 4px;
                top: 1px;
                transform: rotate(45deg) scaleY(0);
                width: 3px;
                transition: transform .15s ease-in .05s;
                transform-origin: center;
            }
        }

        .icon-radio{
            border-radius:8px; 
            &::after{
                box-sizing: content-box;
                content: "";
                height: 7px;
                width: 7px;
                position: absolute;
                left: 3px;
                top: 3px;

                border-radius:5px; 
                background-color: $borderColor;
            }
        }

        .text{
            position: relative;
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
            .icon-radio{
                &::after{
                    background-color: $ac;
                }
                
            }

            .text{
                &.tip{
                    &::after {
                        position:absolute;
                        top: 24px;
                        height: 30px;
                        line-height: 30px;
                        width: 148px;
                        padding: 0 6px;
                        left: 0;
                        content:attr(data-title);
                        font-size: 12px;
                        color:$ac;
                        border:1px solid $ac;
                        @include default-radius;
                    }
                }
              
            }
        }

        &.checked{
            .icon-checkbox{
                background-color: $ac;
                &::after{
                    transform: rotate(45deg) scaleY(1);
                }
            }

            .icon-radio{
                border-color:$ac;
                &::after{
                    background-color: $ac;
                }
                
            }
        }


        &.emphasize{
            .text{
                color:$ac;    
            }
            .icon{
                border-color:$ac;
            }
        }

    }



</style>


<script>

    /*************************************
    //组件数据配置格式
    const list = [
        {text:'销售',id:3,checked:true},
        {text:'采购',id:4}
    ]
    ************************************/

    export default {
        components:{},
        props:{
            type:String,//checkbox radio
            name:String,
            item:Object,//配置项对象
            addition:Object //预留特殊处理
        },
        data(){
            return {
                value:this.item,
                checked:false
            };
        },
        computed:{

        },

        methods:{
            triggerCheckStatus(frag){//修改选中状态
                if(frag===undefined){
                    this.checked = !this.checked;
                }else{
                    this.checked = !!frag;
                }
            },
            oncheck(){
                this.triggerCheckStatus();
                this.value = {...this.item,checked:this.checked};
                this.$emit('update-value',this.name,this.value);
            }
        },
        created(){
            this.triggerCheckStatus(!!this.item.checked);
            console.log('check-box created,update-value default ',this.item,this.checked);
            this.$emit('update-value',this.name,{...this.item,checked:this.checked});
        }
        


    }

</script>