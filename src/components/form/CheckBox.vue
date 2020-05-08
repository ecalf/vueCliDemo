<template>
    <div class="check-box clearfix" v-bind:class="{'checked': checked }" @click="onCheck($event)">
        <div class="icon"></div>
        <div class="text">{{text}}</div>
    </div>
</template>


<style lang="scss" scoped>
    .check-box{
        display:inline-block;
        cursor: default;
        margin-right:10px;
        .icon{
            float:left;
            width:15px;
            height:15px;
            margin:5px 5px 5px 0;
            background-color:$bgwhite;
            @include default-border;
            @include default-radius;

            &::after{

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
            border-color:$ac;
        }

        &.checked{
            .icon{
                background-color: $ac;
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
            defaultchecked:Boolean
        },
        data(){
            return {
                checked:false
            };
        },
        computed:{

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