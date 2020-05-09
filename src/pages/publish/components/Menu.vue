<template>
    <div class="menu-wrap">
        <div class="menu-split" v-show="hasSplit"></div>
        <ul class="menu" v-bind:style="menuStyle" v-show="list.length">
            <li class="menu-item" v-for="item in list" v-bind:key="item.id">
                <span class="item-text" v-bind:class="{active:item.id==0}" v-bind:style="menuItemStyle">
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
        width:290px;
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

            .item-text{
                display: inline-block;
                width: 220px;
                font-size:14px;
                font-weight:400;
                line-height:20px;
                color:#4E5A65;
                font-weight: normal;
                cursor:pointer;
                @include ol;

                &:hover{
                    color:#44A78D;
                }

                &.active{
                    color:#44A78D;
                    font-weight: bold;
                }
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
    

export default {
    data(){
        return {
            
        }
    },
    props:{
        width:String,
        height:String,
        hasSplit:Boolean,
        list:Array
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

    },
    mouted(){
        console.log('menu this.hasSplit>>>',this.hasSplit);
    }
}

</script>