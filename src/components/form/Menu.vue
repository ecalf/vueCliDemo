<template>
    <div class="menu-wrap" v-bind="$attrs">
        <div class="menu-split" v-show="hasSplit"></div>
        <ul class="menu" v-bind:style="menuStyle" v-show="list.length" >
            <li class="menu-item" v-for="item in list" v-bind:key="item.id" v-bind:class="{active:item.id==value.id}" @click="onselect(item)">
                <span class="item-text" v-bind:style="menuItemStyle">
                    {{item.text}}
                </span>
                <span class="arrow-right" v-if="item.child&&item.child.length"></span>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

    .menu-wrap{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .menu-split{
        margin:0 5px;
        display: inline-block;
        width:0;
        height: 290px;
        border-left: 1px solid #EAECED;

    }
    .menu{
        box-sizing:border-box;
        width:400px;
        height:320px;
        overflow-y:auto; 
        padding:10px 15px 18px 15px;

        &::-webkit-scrollbar {
            width: 6px;     /*宽:对应竖滚动条尺寸*/
        }
        &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
             -webkit-box-shadow: inset 0 0 5px #A6ACB1;
            background: #535353;
        }
        &::-webkit-scrollbar-track {/*滚动条里面轨道*/
            -webkit-box-shadow: inset 0 0 5px #EAECED;
            background: #EDEDED;
        }


        .menu-item{
            display:flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom:20px;
            &:hover{
                .item-text{
                    color:#44A78D;
                }
            }

            &.active{
                .item-text{
                    color:#44A78D;
                   font-weight: bold;
                }
            }

            .item-text{
                display: inline-block;
                font-size:14px;
                font-weight:400;
                line-height:20px;
                color:#4E5A65;
                font-weight: normal;
                cursor:pointer;
                flex: 1;

                @include ol;
            }
            .arrow-right{
                margin-right:10px;
                display: inline-block;
                width:10px;
                height:10px;
                background-image: url(~@assets/images/icon/arrow-right.png);
            }
        }
    }

</style>


<script>
/***********************
//菜单数据格式
const list = [
    {
        id:1,
        text:'惨菜单1',
        child:[]
    },
    {
        id:2,
        text:'惨菜单2',
        child:[]
    },
    {
        id:3,
        text:'惨菜单3',
        child:[]
    }
]
*************************/
export default {
    data(){
        return {
            value:''
        }
    },
    props:{
        label:String,//暂时不使用该属性，后继扩展可能用到
        name:String,
        width:String,
        height:String,
        hasSplit:Boolean,
        list:Array,
        level:Number
    },
    computed:{
        menuStyle(){

            return {
                defaultWidth:290,
                defaultHeight:290,
                width:(this.width||this.defaultWidth),
                height:(this.height||this.defaultHeight)
            }
        },
        menuItemStyle(){
            return {
                width:this.menuStyle.width*1-40-(this.hasSplit?10:0)
            }
        }

    },
    methods:{
        onselect(item){
            this.value=item;
            this.$emit('update-value',this.name,this.value,this.level);
            this.$emit('input',this.value);
        }
    },
    updated(){
        this.value=this.$attrs.value||'';

    },
    created(){
        this.value=this.$attrs.value||'';

    }

   
}

</script>