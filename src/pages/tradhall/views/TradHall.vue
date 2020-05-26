<template>
  <div class="mb50">
    <!--banner-->
    <img src="@assets/images/banner.jpg" style="display:none">
    <Banner :bannerList="bannerList" />


    <div class="commonweb">
      <ProductRecommend />
      <FilterMultiple
        v-bind:categories="categoryList"
        v-bind:brands="brandList"
        v-bind:states="stateList"
        v-bind:sequenceConfig="sequenceConfig"
        @on-filter="onFilter"
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
import FilterMultiple from "@components/form/FilterMultiple";
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
            sequenceConfig:{
                label:"综合排序",
                search:{
                    name:'keyword'
                },
                sequenceList:[
                    {text:'剩余时间',name:'timeOrder',order:'desc'},
                    {text:'价格',name:'priceOrder',order:'desc'}
                ]
            },

            needlist:[],
            total:0,
            page_size:10,
            page_index:1,
            type:1,  //type 1 发布采购 2 发布销售 3 委托销售'

        };
    },
    methods:{
        triggerTab(type){
            this.page_index = 1;
            this.type = type;
            this.getNeedList();
        },
        switchPage(page_index){
            this.page_index = page_index*1;
            this.getNeedList();
        },
        onFilter(filterData){
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
                type:this.type,
                keyword:keyword,

                is_defalut_sort:true,
                cate_id:cate.id||'',
                brand_id:brand.id||'',
                status:state.id||'',
                remain_time_sort: filterData.timeOrder,
                price_sort: filterData.priceOrder
               
            };

            this.getNeedList(params);

        },
        async getNeedList(params){
            params = params||{
                type:this.type,
                page_size:this.page_size,
                page_index:this.page_index,
                keyword:''
            }

            const res = await getNeedList({data:params});

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
  async created(){
    await this.getProductCategory();
    await this.getBrandList();
    await this.getNeedList();
    console.log('tradhall async created');
  }
};
</script>
<style lang="scss" scoped>

.order-list{
  background:$bgwhite;
  padding:25px;
}
</style>
