<template>
  <MemberRightWrap :title="title" :searchconfig="searchconfig">
    <BarNav :navlist="navlist" @switch-tab="switchTab" />
    <Errormsg v-if="total==0" />
    <OrderShow :list="orderList" v-if="total>0" @update-status="updateStatus" @modify="modify"/>

    <!--分页 -->
    <div class="layui-box" v-if="Math.ceil(total/page_size)>1">
      <Pagination
          :inputAllowed="false"
          :total="total"
          :size="page_size"
          :curent="page_index" 
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
import {changeNeedStatus} from "@api/need";

export default {
  components: {
    MemberRightWrap,
    Errormsg,
    BarNav,
    OrderShow
  },
  props:{
    title:String,
    kinds:Number  //1 采购 2销售

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

      status:0,
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
        kinds:this.kinds,
        page_index:this.page_index,
        page_size:this.page_size,
        keyword:this.keyword
      }

      if(this.status==1){//上架
        params.status = 1; 
      }else if(this.status==2){//下架
        params.status = 0; 
      }else if(this.status==3){//已截止
        params.is_deadtime = 1;//1 已截止 0 未截止
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

      
    },
    async updateStatus(item,status){
      const params = {
        need_id:item.id,
        status:status// -1 删除 0 下架 1上架
      }

      if(status==-1){
        this.$confirm('确定要删除吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(async (res) => {
            await changeNeedStatus({data:params});
            await getOrderList();
          }).catch((err) => {

          });
      }else{
        await changeNeedStatus({data:params});
        await getOrderList();

      }

      

    },
    modify(item){
      //"type": 类型：1 发布采购 2 发布销售 3 委托销售 4 委托购买',
      let path;
      switch (item.type*1){
        case 1:
          path='/publish/buy';
          break;
        case 2:
          path="/publish/sell";
          break;
        case 3:
          path="/publish/entrust";
          break;
        case 4:
          path="/publish/entrust";
          break;
      }

      this.$router.push(path+'?id='+item.id);
    }



  },
  created(){
    this.getOrderList();
  }
};
</script>
<style lang="scss" scoped>
</style>