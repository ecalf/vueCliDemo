<template>
  <div class="mb50">
    <!--banner-->
    <Banner :bannerList="bannerList" />
    <div class="commonweb">
      <ProductList />
      <!--分页-->
      <div class="layui-box">
        <div class="layui-laypage">
          <a href="javascript:;" class="layui-laypage-prev">上一页</a>
          <span class="layui-laypage-curr">
            <em>1</em>
          </span>
          <a href="javascript:;">2</a>
          <a href="javascript:;">3</a>
          <a href="javascript:;">4</a>
          <a href="javascript:;">5</a>
          <span>…</span>
          <a href="javascript:;" class="layui-laypage-next">下一页</a>
          <span class="layui-laypage-total">
            到第
            <input type="number" /> 页
            <button type="button" class="layui-laypage-btn">确定</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Banner from "@components/Banner";
import ProductList from "@components/ProductList";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Banner,
    ProductList
  },
  data() {
    return {
      bannerList: [
        { imgUrl: "/img/banner.cfe483c5.jpg", href: "/ucenter/login" },
        { imgUrl: "/img/banner.cfe483c5.jpg", href: "/ucenter/login" },
        { imgUrl: "/img/banner.cfe483c5.jpg", href: "/ucenter/login" }
      ]
    };
  }
};
</script>
