<template>
    <div class="check-box" v-bind:class="{'checked': checked }" @click="onCheck($event)">
        <span class="icon"></span>
        <span class="text">{{text}}</span>
    </div>
</template>


<style lang="scss" scoped>
    .check-box{
        display: inline-flex;
        justify-content: flex-start;
        align-items: center;
        margin:5px;
        cursor: default;

        .icon{
            display: inline-block;
            width:15px;
            height:15px;
            margin:5px;
            background-color:$bgwhite;
            @include default-border;
            @include default-radius;
        }

        .text{
            width:32px;
            height:20px;
            line-height: 20px;
            font-size:16px;
            font-weight:300;
            color:$fontColor;
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

            }
        },
        created(){
            this.checked = this.defaultchecked;
        }
        


    }

</script>