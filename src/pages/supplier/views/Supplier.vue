<template>
  <div>
    <!--index banner-->
    <div class="supplier">
      <Banner :bannerList="bannerList" />

      <CategeryMenu v-bind:list="categoryList" @update-value="updateValue" />
    </div>

    <div class="commonweb oh mb50">
      <ProductRecommend :productBanner="productBanner" />

      <!--业务精选-->
      <BusinessSelect :kindMask="kindMask" :kindRespirator="kindRespirator" />

      <!-- <div class="other-condition">
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
      </div>-->

      <div class="condition-box">
        <supplierfilter v-bind:sequenceConfig="sequenceConfig" @on-filter="onFilter" />
      </div>
      <!--产品列表-->
      <ProductList :productList="productList" v-if="total>0" />
      <Errormsg title="抱歉，暂时没有找到符合条件的商品" v-if="isnodata" />
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
import CategeryMenu from "@components/CategeryMenu";
import BusinessSelect from "@components/BusinessSelect";
import ProductRecommend from "@components/ProductRecommend";
import supplierfilter from "@components/form/supplierfilter";
import ProductList from "@components/ProductList";
import Pagination from "@components/Pagination";
import Errormsg from "@components/Errormsg";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import { getProductCategory } from "@api/common";
import { formatListData } from "@utils/common";
import { getNeedList } from "@api/need";
import { getBannerList } from "@api/news";

export default {
  components: {
    Banner,
    CategeryMenu,
    ProductRecommend,
    supplierfilter,
    BusinessSelect,
    ProductList,
    Swiper,
    SwiperSlide,
    Pagination,
    Errormsg
  },
  data() {
    return {
      bannerList: [],
      categoryList: [],
      kindMask: [], //口罩分类
      kindRespirator: [], //呼吸机分类
      productList: [],
      total: 0,
      page_size: 15,
      page_index: 1,
      type: "1", //type 1 发布采购 2 发布销售 3 委托销售'
      isnodata:false,
      productBanner:[],//广告位
      sequenceConfig: {
        label: "综合排序",
        search: {
          name: "keyword"
        },
        sequenceList: [
          { text: "剩余时间", name: "timeOrder", order: "desc" },
          { text: "价格", name: "priceOrder", order: "desc" }
        ]
      },
      newswiper: {
        direction: "vertical",
        autoplay: true
      }
    };
  },

  methods: {
     async getBanner(){
       const res = await getBannerList({ data:{ad_type_name:'供应商中心' }});
       if(res.code == 200){
         console.log(res);
        this.bannerList=res.data;
       }   
    },
    switchPage(page_index){
            this.page_index = page_index*1;
            this.getNeedList();
        },

    async getProductCategory() {
      let res = await getProductCategory();

      if (res.code == 200) {
        this.categoryList = formatListData(res.data);
      } else {
        this.$message({
          showClose: true,
          message: res.message,
          type: "error"
        });
      }
    },

    async getMaskList(params) {
      //口罩分类
      params = params || {
        page_size: 4,
        page_index: 1,
        keyword: "",
        kind_id: 1 //口罩类
      };
      const res = await getNeedList({ data: params });
      if (res.code == 200) {
        let lists = res.data.list;
        // this.total = res.data.total;

        for (let i = 0; i < lists.length; i++) {
          //数组重组
          let images =
            lists[i].images != null ? lists[i].images.split(",") : "";
          lists[i].images = images; //得到图片数组
        }
        this.kindMask = lists;
      } else {
        this.$message({
          showClose: true,
          message: res.message,
          type: "error"
        });
      }
    },
    async getRespiratorList(params) {
      //呼吸机分类
      params = params || {
        page_size: 4,
        page_index: 1,
        keyword: "",
        kind_id: 3 //呼吸机分类
      };
      const res = await getNeedList({ data: params });
      if (res.code == 200) {
        let lists = res.data.list;
        //this.total = res.data.total;

        for (let i = 0; i < lists.length; i++) {
          //数组重组
          let images =
            lists[i].images != null ? lists[i].images.split(",") : "";
          lists[i].images = images; //得到图片数组
        }
        this.kindRespirator = lists;
      } else {
        this.$message({
          showClose: true,
          message: res.message,
          type: "error"
        });
      }
    },
    updateValue(item) {
       const params = {
                page_size: this.page_size,
                page_index: this.page_index,
                cate_id:item.id,
                keyword: ""
               
            };
            this.getNeedList(params); 
    }, //分类筛选
     async onFilter(name,value,filterData){
          
            this.page_index = 1;

            //cate 只传最末尾一级
           let cate = filterData.category[filterData.category.length-1]||{};
           let brand = filterData.brand||{};
          let state = filterData.state||{};
            let keyword = [cate.name,brand.name,filterData.keyword].join()
                                .replace(/^\,+|\,+$/g,'')
                                .replace(/\,{2,}/g,',')
            const params = {
                page_size:this.page_size,
                page_index:this.page_index,
                keyword:keyword,
                is_defalut_sort:filterData.defalutOrder,
                cate_id:cate.id||'',
                brand_id:brand.id||'',
                status:state.id||'',
                remain_time_sort: filterData.timeOrder,
                price_sort: filterData.priceOrder
               
            };

            console.log(params);
            this.getNeedList(params);

        },
    async getNeedList(params) {
      params = params || {
         //type:'1',
        page_size: this.page_size,
        page_index: this.page_index,
        keyword: ""
      };

      const res = await getNeedList({ data: params });

      if (res.code == 200) {
         let lists=res.data.list;
        this.total = res.data.total;
         for(let i=0;i<lists.length;i++){//数组重组
         let serviceData = lists[i].service_cnname != null ? lists[i].service_cnname.split(',') : '';
            lists[i].service_cnname = serviceData;//得到服务类型数组
     
         let images = lists[i].images != null ? lists[i].images.split(',') : '';
					lists[i].images = images;//得到图片数组
       }
        this.productList = lists;
        if(this.total==0){
          this.isnodata==true;
        }
      } else {
        this.$message({
          showClose: true,
          message: res.message,
          type: "error"
        });
      }
    },
     async getadvBanner(){
       const res = await getBannerList({ data:{ad_type_name:'供应商广告' }});
       if(res.code == 200){
         //console.log(res);
        this.productBanner=res.data;
       }   
    },
  },
  async created() {
    await this.getProductCategory();
    await this.getMaskList(); //口罩类
    await this.getRespiratorList(); //呼吸机分类
    await this.getNeedList();
    await this.getBanner();
    await this.getadvBanner();
  }
};
</script>
<style lang="scss" scoped>
/*分类*/
.supplier {
  position: relative;
  height: 400px;
}

.condition-box {
  margin-top: 20px;
  background: #fff;
  padding: 0 10px 15px;
}
</style>
