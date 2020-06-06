<template>
    <button 
        class="submit-btn" 
        v-bind:style="styleMap"
        v-bind:type="type||'button'" 
        @click="onclick()">{{text}}
    </button>
</template>


<style lang="scss" scoped>
    .submit-btn{
        width:120px;
        height:36px;
        font-size:14px;
        line-height: 36px;
        text-align: center;
        color:$bgwhite;
        background-color: $defaultColor;
        @include default-radius;

        &:hover{
            background-color: $hoverColor;
        }
        &:active{
            background-color:$activeColor;
        }
    }
</style>

<script>
    export default {
        props:{
            text:String,
            type:String,
            width:Number,
            height:Number
        },
        data(){
            return {

            }
        },
        computed:{
            styleMap(){
                let map = {};
                if(this.height>0){
                    map.height = this.height+"px";
                }
                if(this.width>0){
                    map.width = this.width+'px';
                }

                return map;
            }
        },
        methods:{
            onclick(){
                this.$emit('on-click');
            }
        }
    }

</script>