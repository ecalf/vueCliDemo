<template>
  <div class="mb50">
    <!--banner-->
    <Banner :bannerList="bannerList" />
    <div class="commonweb">
      <ProductList :productList="productList" />
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
import { getNeedList } from "@api/need";
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
  },
  methods:{
     async getProductList(params) {//列表推荐
      params = params || {
        type:5,
        page_size:10,
        page_index:1,
        keyword: ""
      };
      const res = await getNeedList({ data: params });
      if (res.code == 200) {
        let lists=res.data.list;
        this.total = res.data.total;

       for(let i=0;i<lists.length;i++){//数组重组
         let serviceData = lists[i].service_cnname != null ? lists[i].service_cnname.split(',') : '';
            lists[i].service_cnname = serviceData;//得到服务类型数组
            
				 let qualification = lists[i].qualification_icon != null ? lists[i].qualification_icon.split(',') : '';
         lists[i].qualification_icon = qualification;//得到资质类型数组
            
         let images = lists[i].images != null ? lists[i].images.split(',') : '';
					lists[i].images = images;//得到图片数组
       }
        this.productList = lists;
      } else {
        this.$message({
          showClose: true,
          message: res.message,
          type: "error"
        });
      }
    }
  },
   mounted: function() {
    this.getProductList(); //官方列表
  }
};
</script>
