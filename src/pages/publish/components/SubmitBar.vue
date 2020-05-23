<template>
    <div class="submitBar" ref="publishSubmitBar" v-bind:style="mapStyle" >
        <button class="submitBtn" @click="submit()">{{text}}</button>
    </div>

</template>


<style lang="scss" scoped>
    .submitBar{
        position:fixed;
        left:0;
        right:0;
        bottom:0;

        display:flex;
        justify-content:center;
        align-items: center;
        width:100%;
        height:70px;
        border-top:1px solid $green;
        background-color: #FEFEFE;
        z-index:100;
    }

    .submitBtn{
        width:160px;
        height:40px;
        line-height:40px;
        font-size:16px;
        font-weight:bold;
        color:#FEFEFE;
        background-color: $green;

    }

</style>


<script>

    export default {
        props:{
            text:String
        },
        data(){
            return {
                footerInView:0
            }
        },
        computed:{
            mapStyle(){
                return {
                    bottom:Math.max(this.footerInView,0)+'px'
                }
            }
        },
        methods:{
            async submit(){
                this.$emit('on-submit');
            },
            getFooterPosition(){
                const rect = document.querySelector('#app>footer').getBoundingClientRect();
                this.footerInView = window.innerHeight-rect.top;
            }
        },
        
        mounted(){
            const self = this;
            this.getFooterPosition();
            
            window.onscroll = ()=>{
                this.getFooterPosition();
            }
        }

    }

</script>

