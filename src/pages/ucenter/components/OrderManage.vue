<template>
  <MemberRightWrap v-bind:title="title" v-bind:searchconfig="searchconfig">
    <BarNav v-bind:navlist="navlist" @switch-tab="switchTab" />
    <Errormsg v-if="total==0" />
    <OrderShow v-bind:list="orderList" v-if="total>0" />

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
import Errormsg from "@components/Errormsg";
import MemberRightWrap from "./MemberRightWrap";
import BarNav from "./BarNav";
import OrderShow from "./OrderShow";

 import {getMyNeeds} from "@api/user";


export default {
  components: {
    MemberRightWrap,
    Errormsg,
    BarNav,
    OrderShow
  },
  props:{
    title:String,
    type:Number  //1 发布采购 2 发布销售 3 委托销售 4 委托采购

  },
  data() {
    return {
      navlist: [
        { id:0,title: "全部" ,active:true},
        { id:1,title: "上架" },
        { id:2,title: "下架" },
        { id:3,title: "已截止" }
      ],
      searchconfig:{
        name:"keyword",
        handler:(name,keyword)=>{
          this.onSearch(name,keyword);
        }
      },

      status:0,//0 全部，1 上架,2 下架,3 已截止
      keyword:'',
      total:0,
      page_size:10,
      page_index:1,
      orderList:[]


    };
  },
  methods:{
    onSearch(name,keyword){
      this.keyword = keyword;
      this.page_index = 1;
      this.getOrderList();
    },
    switchTab(item){
      this.status = item.id*1;
      this.page_index = 1;
      this.getOrderList();
    },
    switchPage(page_index){
      this.page_index = page_index*1;
      this.getOrderList();
    },

    async getOrderList(){//我发布的采购订单
      const params = {
        type:this.type,
        page_index:this.page_index,
        page_size:this.page_size,
        keyword:this.keyword
      }

      if(this.status==1){//上架
        params.status = 1; 
      }else if(this.status==2){//下架
        params.status = 0; 
      }else if(this.status==3){//已截止
        params.is_deadtime = 1;//1 已截至 0 未截至
      }

      const res = await getMyNeeds({data:params});
      if(res.code==200){
        this.orderList = res.data.list;
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
    this.getOrderList();
  }
};
</script>
<style lang="scss" scoped>
</style>