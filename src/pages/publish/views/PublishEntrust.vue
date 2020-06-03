<template>
    <section class="commonweb">
        <Banner v-bind:type="2" />
        <FormPublish v-bind:type="this.entrustType" v-bind:id="id" />
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
        id:Number,//编辑使用传入的ID
        type:Number
    },
    data(){

        return{
            entrustType:this.type||3     
        }
    },
    computed:{

    },
    methods:{

    }
    

}
</script>
