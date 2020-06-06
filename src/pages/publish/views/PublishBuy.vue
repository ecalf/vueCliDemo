<template>
<div>
  <Banner :bannerList="bannerList" /> 
  <section class="commonweb">
    <SubBanner v-bind:type="'发布banner'" />
    <FormPublish v-bind:type="1" v-bind:id="id" />
  </section>
</div>
</template>


<style lang="scss" scoped>
</style>

<script>
import SubBanner from "../components/SubBanner";
import FormPublish from "../components/FormPublish";
import { getBannerList } from "@api/news";
import Banner from "@components/Banner";


export default {
    name: "PublishBuy",
    components:{
        SubBanner,
        FormPublish,
        Banner 
    },
    props:{
        id:Number//编辑使用传入的ID
    },
    data(){
        return{
              bannerList: [],    
        }
    },
    computed:{

    },
    methods:{
    async getBanner(){
       const res = await getBannerList({ data:{ad_type_name:'我要采购' }});
       if(res.code == 200){
         //console.log(res);
        this.bannerList=res.data;
        this.$emit('bannerList',this.bannerList)
       }   
    },
   },
   async created() {
    await this.getBanner();
  }
}
</script>
