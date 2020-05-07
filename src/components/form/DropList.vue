<template>
    <div class="drop-wrap">
        <div class="drop-value">
            <div class="drop-value-text">
                <span class="drop-item-icon" v-if="prefix"></span>
                <span>{{value}}</span>
            </div>
            <span class="arrow-down"></span>
        </div>
        <ul class="drop-menu">
            <li v-for="(item,i) in list" v-bind:key="item.id" class="drop-menu-item drop-value">
                <div class="drop-value-text">
                    <span class="drop-item-icon" v-if="prefix"></span>
                    <span>{{item.text}}</span>
                </div>
            </li>
        </ul>

    </div>
</template>


<style lang="scss" scoped>
    $dropHeight:40px;

    .arrow-down{
        margin-right:10px;
        display: inline-block;
        width:10px;
        height:10px;
        background-image: url(~@assets/images/icon/arrow-down.png);
    }
    .drop-item-icon{
        display: inline-block;
        width:20px;
        height: 20px;
        margin-right: 5px;
        
        background-color: black;

    }
    .drop-wrap{
        position: relative;
        display: inline-block;
        width:205px;
        height:$dropHeight;
        border:1px solid #EAECED;
        @include default-radius;

        .drop-value{
            display:flex;
            justify-content: flex-end;
            align-items: center;
            line-height: $dropHeight;
            height: 100%;
            background:linear-gradient(180deg,rgba(251,252,252,1) 0%,rgba(217,221,224,1) 100%);
            
            .drop-value-text{
                display:flex;
                justify-content: flex-start;
                align-items: center;

                flex:1;
                padding: 10px;
            }
        }

        .drop-menu{
            position: absolute;
            width: 100%;
            height:$dropHeight; 
            top:$dropHeight;

        }

    }




</style>


<script>
    
    export default {
        components:{},
        props:{
            prefix:Boolean,
            list:Array
        },
        data(){
            return {
                value:'认证A'
            };
        },
        computed:{

        },
        methods:{

        }
        


    }


</script>