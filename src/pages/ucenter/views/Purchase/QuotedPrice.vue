<template>
  <MemberRightWrap title="报价管理" v-bind:searchconfig="searchconfig">
    <BarNav :navlist="navlist" @switch-tab="switchTab" />
    <PriceList :list="quotationList" v-if="total>0" />
    <Errormsg v-if="total==0" />

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
  </MemberRightWrap>
</template>


<script>
import MemberRightWrap from "../../components/MemberRightWrap";
import Pagination from "@components/Pagination";
import Errormsg from "@components/Errormsg";
import BarNav from "../../components/BarNav";
import PriceList from "../../components/PriceList";

import { getMyNeeds } from "@api/user";
import { formatPrice } from "@utils/common";

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
      searchconfig: {
        name: "keyword",
        handler: (name, keyword) => {
          this.onSearch(name, keyword);
        }
      },
      navlist: [
        { id: 1, title: "已报价", active: true },
        { id: 0, title: "未报价" }
      ],

      is_quoted: 1, //0 未报价，1 已报价
      total: 0,
      page_size: 10,
      page_index: 1,
      type: 1,
      kinds: "",
      quotationList: [],
    };
  },
  methods: {
    onSearch(name, keyword) {
      this.keyword = keyword;
      this.page_index = 1;
      this.getMyQuotation();
    },
    switchTab(item) {
      this.is_quoted = item.id * 1;
      this.page_index = 1;
      this.getMyQuotation();
    },
    switchPage(page_index) {
      this.page_index = page_index * 1;
      this.getMyQuotation();
    },
    async getMyQuotation() {
      //获取厂家向我发布的采购订单进行报价的信息
      const params = {        
        page_size: this.page_size,
        page_index: this.page_index,
        type:this.type,
        is_quoted: this.is_quoted,
         keyword:this.keyword
      };
      const res = await getMyNeeds({ data: params });

      if (res.code == 200) {
        console.log(res);
        // this.quotationList = res.data.list;
        let lists = res.data.list;
        for (let i = 0; i < lists.length; i++) {
          //转成数组
          let serviceData =
            lists[i].service_cnname != null && lists[i].service_cnname.length
              ? lists[i].service_cnname.split(",")
              : "";
          lists[i].service_cnname = serviceData;
        }
        this.quotationList = lists;
        this.total = res.data.total;
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
    }
  },
  created() {
    this.getMyQuotation();
  }
};
</script>

<style lang="scss" scoped>
</style>