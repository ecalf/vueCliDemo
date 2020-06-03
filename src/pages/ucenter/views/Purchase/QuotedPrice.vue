<template>
  <MemberRightWrap title="报价管理" v-bind:searchconfig="searchconfig">
    <BarNav v-bind:navlist="navlist" @switch-tab="switchTab" />
    <PriceList v-bind:list="quotationList" v-if="total>0" />
    <Errormsg v-if="total==0" />

    <!--分页 -->
    <div class="layui-box" v-if="Math.ceil(total/page_size)>1">
      <Pagination
          v-bind:inputAllowed="false"
          v-bind:total="total"
          v-bind:size="page_size"
          v-bind:curent="page_index" 
          @switch-page="switchPage"
          />
    </div>
  </MemberRightWrap>
</template>


<script>
import MemberRightWrap from "../../components/MemberRightWrap";
import Pagination from "@components/Pagination";
import Errormsg from "@components/Errormsg";
import BarNav from "../../components/BarNav";
import PriceList from "../../components/PriceList";

import { getMyQuotation } from "@api/user";
import {formatPrice} from "@utils/common";


export default {
  components: {
    MemberRightWrap,
    Errormsg,
    Pagination,
    BarNav,
    PriceList
  },
  data() {
    return {
      searchconfig:{
        name:"keyword",
        handler:(name,keyword)=>{
          this.onSearch(name,keyword);
        }
      },
      navlist: [
        {id:1, title: "已报价",active:true }, 
        {id:0, title: "未报价" }
      ],

      is_quoted:1,//0 未报价，1 已报价
      keyword:'',
      total:0,
      page_size:10,
      page_index:1,
      quotationList:[],

    };
  },
  methods:{
    onSearch(name,keyword){
      this.keyword = keyword;
      this.page_index = 1;
      this.getMyQuotation();
    },
    switchTab(item){
      this.is_quoted = item.id*1;
      this.page_index = 1;
      this.getMyQuotation();
    },
    switchPage(page_index){
      this.page_index = page_index*1;
      this.getMyQuotation();
    },
    async getMyQuotation(){//获取厂家向我发布的采购订单进行报价的信息
      const params ={
        page_size:this.page_size,
        page_index:this.page_index,
        keyword:this.keyword,
        is_quoted:this.is_quoted
      };
      const res = await getMyQuotation({data:params});

      if(res.code==200){
        this.quotationList = res.data.list;
        this.total = res.data.total;
      }else{
        this.$message({
          showClose: true,
          message: res.message,
          type: "error"
        });
      }

    }
  },
  created(){
    this.getMyQuotation();
  }
};
</script>

<style lang="scss" scoped>
</style>