<template>
  <div class="mb50">
    <!--banner-->
    <Banner :bannerList="bannerList" />
    <div class="commonweb">
      <ProductList :productList="productList" />
      <!--分页-->
      <div class="layui-box" v-if="Math.ceil(total/page_size)>1">
        <Pagination
          v-bind:inputAllowed="true"
          v-bind:total="total"
          v-bind:size="page_size"
          v-bind:curent="page_index"
          @switch-page="switchPage"
        />
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
import Pagination from "@components/Pagination";
import Errormsg from "@components/Errormsg";
export default {
  components: {
    Banner,
    ProductList,
    Pagination,
    Errormsg
  },
  data() {
    return {
      bannerList: [],
      productList: [],
      total: 0,
      page_size: 10,
      page_index: 1,
      type: 5 //type 1 发布采购 2 发布销售 3 委托销售 4委托采购 5官网推荐'
    };
  },
  methods: {
    switchPage(page_index) {
      this.page_index = page_index * 1;
      this.getNeedList();
    },
    async getProductList(params) {
      //列表推荐
      params = params || {
        type: this.type,
        page_size: this.page_size,
        page_index: this.page_index,
        keyword: ""
      };
      const res = await getNeedList({ data: params });
      if (res.code == 200) {
        let lists = res.data.list;
        this.total = res.data.total;

        for (let i = 0; i < lists.length; i++) {
          //数组重组
          let serviceData =
            lists[i].service_cnname != null
              ? lists[i].service_cnname.split(",")
              : "";
          lists[i].service_cnname = serviceData; //得到服务类型数组

          let qualification =
            lists[i].qualification_icon != null
              ? lists[i].qualification_icon.split(",")
              : "";
          lists[i].qualification_icon = qualification; //得到资质类型数组

          let images =
            lists[i].images != null ? lists[i].images.split(",") : "";
          lists[i].images = images; //得到图片数组
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
