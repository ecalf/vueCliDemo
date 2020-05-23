<template>
  <div class="mb50">
    <!--banner-->
    <Banner :bannerList="bannerList" />


    <div class="commonweb">
      <ProductRecommend />
      <FilterMultiple
        v-bind:categories="categoryList"
        v-bind:brands="brandList"
        v-bind:states="stateList"
        />


      <div class="bar-height">
        <div class="tab-bar">
          <a href="javascript:;" v-bind:class="{active:type==1}" @click.stop="triggerTab(1)">采购订单</a>
          <a href="javascript:;" v-bind:class="{active:type==2}" @click.stop="triggerTab(2)">销售订单</a>
          <a href="javascript:;" v-bind:class="{active:type==3}" @click.stop="triggerTab(3)">委托订单</a>
        </div>
      </div>

      <div class="order-list">
        <OrderList class="mb30" v-bind:list="needlist" v-if="total>0" />
        <Errormsg title="抱歉，暂时没有找到符合条件的商品" v-if="total==0" />
        
        <!--分页 -->
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
  </div>
</template>


<script>
import Banner from "@components/Banner";
import ProductRecommend from "@components/ProductRecommend";
import FilterMultiple from "@components/FilterMultiple";
import OrderList from "@components/OrderList";
import Pagination from "@components/Pagination";
import Errormsg from "@components/Errormsg";


import { getNeedList } from "@api/need";
import {
    getProductCategory,
    getBrandList
} from "@api/common";

import { formatListData } from "@utils/common";


export default {
  components: {
    Banner,
    ProductRecommend,
    FilterMultiple,
    OrderList,
    Pagination,
    Errormsg
  },
  data() {
        return {
          bannerList: [
            { imgUrl: "/img/banner.cfe483c5.jpg", href: "/ucenter/login" },
            { imgUrl: "/img/banner.cfe483c5.jpg", href: "/ucenter/login" },
            { imgUrl: "/img/banner.cfe483c5.jpg", href: "/ucenter/login" }
          ],
          categoryList:[],
          brandList:[],
          stateList:[
            {id:1,text:"进行中"},
            {id:2,text:"已截止"}
          ],


          needlist:[],
          total:0,
          page_size:10,
          page_index:1,
          type:1,  //type 1 发布采购 2 发布销售 3 委托销售'

        };
    },
    methods:{
        triggerTab(type){
            this.type = type;
            this.getNeedList();
        },
        switchPage(page_index){
            this.page_index = page_index*1;
            this.getNeeds();
        },
        async getNeedList(){
            const params = {
                type:this.type,
                page_size:this.page_size,
                page_index:1,
                keyword:''
            }

            const res = await getNeedList(params);

            if(res.code==200){
                this.total = res.data.total;
                this.needlist = res.data.list;
            }else{
                this.$message({
                  showClose: true,
                  message: res.message,
                  type: "error"
                });
            }


        },

        async getProductCategory(){
            let res = await getProductCategory();


            if(res.code==200){
                this.categoryList = formatListData(res.data);
                console.log('format this.categoryList>>>',this.categoryList);
            }else{
                this.$message({
                    showClose: true,
                    message: res.message,
                    type: "error"
                });
            }
        },
        async getBrandList(){
            let res = await getBrandList({
                    data:{
                        cate_id:3//this.this.params.cate_id
                    }
                });

            if(res.code==200){
                this.brandList = formatListData(res.data);

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
    this.getBrandList();
    this.getNeedList();
  }
};
</script>
<style lang="scss" scoped>

.order-list{
  background:$bgwhite;
  padding:25px;
}
</style>
