<template>
  <div>
    <!--index banner-->
    <div class="supplier">
      <Banner :bannerList="bannerList" />

      <CategeryMenu v-bind:list="categoryList" />
    </div>


    <div class="commonweb oh mb50">

      <ProductRecommend />

      <!--业务精选-->
      <BusinessSelect />

      <div class="other-condition">
        <div class="condition-box">
          <a href>综合排序</a>
          <a href class="active">
            剩余时间
            <i></i>
          </a>
          <a href>
            价格
            <i></i>
          </a>
          <form class="condsearch-box">
            <input type="text" placeholder />
            <button>搜索</button>
          </form>
        </div>
      </div>


      <!--产品列表-->
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
import CategeryMenu from "@components/CategeryMenu";
import BusinessSelect from "@components/BusinessSelect";
import ProductRecommend from "@components/ProductRecommend";
import ProductList from "@components/ProductList";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import { getProductCategory } from "@api/common";
import { formatListData } from "@utils/common";



export default {
  components: {
    Banner,
    CategeryMenu,
    ProductRecommend,
    BusinessSelect,
    ProductList,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      bannerList: [
          { imgUrl: "/img/banner.cfe483c5.jpg", href: "/ucenter/login" },
          { imgUrl: "/img/banner.cfe483c5.jpg", href: "/ucenter/login" },
          { imgUrl: "/img/banner.cfe483c5.jpg", href: "/ucenter/login" }
      ],
      categoryList:[],
      categorys: [
        {
          frist: "试剂",
          sublist: [
            {
              title: "一般治疗及重型、危重型病例治疗药品",
              threelist: [
                { thtitle: "α-干扰素" },
                { thtitle: "洛匹那韦利托那韦片（盒）" },
                { thtitle: "抗菌药物" },
                { thtitle: "甲泼尼龙" },
                { thtitle: "糖皮质激素等经卫生健康" },
                { thtitle: "药监部门依程序确认治疗有效的药品和疫苗" }
              ]
            },
            {
              title: "一般治疗及重型、危重型病例治疗药品",
              threelist: [
                { thtitle: "一般治疗及重型、危重型病例治疗药品" },
                { thtitle: "一般治疗及重型、危重型病例治疗药品" },
                { thtitle: "一般治疗及重型、危重型病例治疗药品" },
                { thtitle: "一般治疗及重型、危重型病例治疗药品" }
              ]
            }
          ]
        },
        {
          frist: "试剂",
          sublist: [
            {
              title: "一般治疗及重型、危重型病例治疗药品",
              threelist: [
                { thtitle: "洛匹那韦利托那韦片（盒）" },
                { thtitle: "抗菌药物" },
                { thtitle: "甲泼尼龙" },
                { thtitle: "糖皮质激素等经卫生健康" }
              ]
            },
            {
              title: "一般治疗及重型、危重型病例治疗药品",
              threelist: [
                { thtitle: "一般治疗及重型、危重型病例治疗药品" },
                { thtitle: "一般治疗及重型、危重型病例治疗药品" },
                { thtitle: "一般治疗及重型、危重型病例治疗药品" },
                { thtitle: "一般治疗及重型、危重型病例治疗药品" }
              ]
            }
          ]
        }
      ],
      newswiper: {
        direction: "vertical",
        autoplay: true
      }
     
    };
  },

  methods: {
    async getProductCategory(){
        let res = await getProductCategory();


        if(res.code==200){
            this.categoryList = formatListData(res.data);
        }else{
            this.$message({
                showClose: true,
                message: res.message,
                type: "error"
            });
        }
    },
  },
  created(){
    this.getProductCategory();
  }

};
</script>
<style lang="scss" scoped>
/*分类*/
.supplier {
  position: relative;
  height: 400px;
}

.condition-box{
  background:#fff;
  padding:10px;
}
</style>
