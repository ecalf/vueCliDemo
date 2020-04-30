<template>
    <Banner v-bind:list="bannerList" />
    
</template>


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
                {title:'Buybanner',id:1},
                {title:'Buybanner',id:2},
                {title:'Buybanner',id:3}
            ]
        }
    },
    computed:{

    },
    methods:{

    }

}
</script>
