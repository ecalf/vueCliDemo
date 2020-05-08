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
    import {publish} from "@api/publishApi";


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
                let params = {
                    "device_id":"",
                    "platform":"",
                    "imei":"",
                    "version":"",
                    "channel":"",
                    "timestamp":"",
                    "lang":"",
                    "data":{
                        "type":"",
                        "title":"",
                        "desc":"",
                        "cate_id":0,
                        "band_id":0,
                        "price":0,
                        "num":0,
                        "use_way":0,
                        "exit_country":0,
                        "qualification":"",
                        "images":"",
                        "info":"",
                        "market_price":0,
                        "supplier_price":0,
                        "dead_time":"",
                        "benefit_price":0
                    }
                }



                const data = await publish(params);
                console.log('data>>>',data)

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

