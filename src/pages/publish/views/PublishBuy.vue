<template>
    <section class="commonweb">
        <Banner v-bind:list="bannerList" />
        <FormPublish v-bind:type="1" />
    </section>
</template>


<style lang="scss" scoped>


</style>

<script>
import Banner from "../components/Banner";
import FormPublish from "../components/FormPublish";




export default {
    name: "PublishBuy",
    components:{
        Banner,
        FormPublish
       
    },
    props:{
        type:String
    },
    data(){

        return{
            bannerList:[//todo:fetch list data
                {text:'Buybanner',id:1},
                {text:'Buybanner',id:2},
                {text:'Buybanner',id:3},
                {text:'Buybanner',id:4}
            ]
           
        }
    },
    computed:{

    },
    methods:{

    }
    

}
</script>
