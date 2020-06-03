<template>
    <section class="commonweb">
        <Banner v-bind:type="2" />
        <FormPublish v-bind:type="2" v-bind:id="id" />
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
        id:Number//编辑使用传入的ID
    },
    data(){

        return{
            
        }
    },
    computed:{

    },
    methods:{

    }
    

}
</script>
