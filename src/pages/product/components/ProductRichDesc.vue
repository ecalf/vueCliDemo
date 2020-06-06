<template>
    <div class="prodInfo">
        <h4 class="deatils-title">
          商品详情
          <span>Product details</span>
        </h4>
        <div class="deatils-content" v-html="desc"></div>
    </div>
</template>

<style lang="scss" scoped>
.prodInfo{
    .deatils-title {
      color: $ac;
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 18px;
      span {
        font-weight: normal;
        font-size: 18px;
        margin-left: 20px;
      }
    }
    .deatils-content {
      img {
        max-width: 100%;
      }
    }
}


</style>




<script>

    export default {
        props:{
            desc:String
        },
        data(){
            return {}
        },
        methods:{

        }
    }

</script>