<template>
  <!--index banner-->
  <swiper class="index-banner" :options="swiperOption">
    <swiper-slide v-for="(item,index) in bannerList" :key="index">
        <router-link :to="item.url">
        <img :src="'https://admin.scm.wanheglobal.com/'+item.image" :alt="item.description||''" />
        <!--<img src="@assets/images/banner.jpg" alt=""> -->
      </router-link>
    </swiper-slide>

    <div class="iban-pages" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-pagination",
  title: "banner",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".iban-pages",
          clickable: true
        }
      }
    };
  },
  props: {
    bannerList: Array
  }
};
</script>


<style lang="scss" scoped>
.index-banner {
  position: relative;
  overflow: hidden;
  .swiper-slide {
    display: block;
    width: 100%;
    position: relative;
    img {
    
      display: block;
      width:auto;
      min-height:400px;
      position: relative;
      left:50%;
     transform: translateX(-50%);
    }
  }
}

.iban-pages {
  text-align: center;
  position: absolute;
  width: 70px;
  height: 15px;
  left: 50%;
  margin-left: -35px;
  bottom: 25px;
  z-index: 2;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
}
</style>