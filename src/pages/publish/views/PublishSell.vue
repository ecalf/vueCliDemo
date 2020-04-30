<template>
    <Banner v-bind:list="bannerList" />

</template>

<div>
    
</div>

<style>

</style>

<script>
import Banner from "../components/Banner";

export default {
    name: "PublishBuy",
    components:{
        Banner
    },
    data(){
        
        return{
            bannerList:[//todo:fetch list data
                {title:'Sellbanner',id:1},
                {title:'Sellbanner',id:2},
                {title:'Sellbanner',id:3}
            ]
        }
    },
    computed:{

    },
    methods:{

    }

}
</script>
