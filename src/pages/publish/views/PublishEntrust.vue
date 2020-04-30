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
                {title:'Entrustbanner',id:1},
                {title:'Entrustbanner',id:2},
                {title:'Entrustbanner',id:3}
            ]
        }
    },
    computed:{

    },
    methods:{

    }

}
</script>
