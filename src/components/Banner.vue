<template>
  <!--index banner-->
  <swiper class="index-banner" :options="swiperOption">
    <swiper-slide v-for="(item,index) in bannerList" :key="index">
      <a :href="item.href||'javascript:;'">
      <img :src="item.imgUrl" :alt="item.desc||''">
        <!--<img src="@assets/images/banner.jpg" alt=""> -->
      </a>
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
  props:{
    bannerList:Array
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/css/variables.scss";
/*indexbanner*/
.index-banner {
  position: relative;
  overflow: hidden;

  ul {
    li {
      a {
        display: block;
        width: 100%;
        position: relative;

        &:before {
          content: "";
          display: block;
          padding-bottom: (400%/19.2);
        }

        img {
          position: absolute;
          left: 0;
          top: 0;
          display: block;
          width: 100%;
        }
      }
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