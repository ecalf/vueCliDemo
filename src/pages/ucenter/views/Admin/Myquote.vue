<template>
  <MemberRightWrap title="我的报价" :searchconfig="searchconfig">
    <PriceList :list="quoteList" v-if="total>0" />
    <Errormsg v-if="total==0" />

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
import MemberRightWrap from "../../components/MemberRightWrap";
import Pagination from "@components/Pagination";
import Errormsg from "@components/Errormsg";
import PriceList from "../../components/PriceList";
import { getQuote } from "@api/user";
export default {
  components: {
    MemberRightWrap,
    Errormsg,
    Pagination,
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
      total: 0,
      page_size: 10,
      page_index: 1,
      keyword: "",
      type: 2,
      is_quoted: 1,
      quoteList: []
    };
  },
  methods: {
    onSearch(name, keyword) {
      this.keyword = keyword;
      this.page_index = 1;
      this.getQuote();
    },
    switchTab(item) {
      this.is_quoted = item.id * 1;
      this.page_index = 1;
      this.getQuote();
    },
    switchPage(page_index) {
      this.page_index = page_index * 1;
      this.getQuote();
    },
    async getQuote() {
      const params = {
        page_size: this.page_size,
        page_index: this.page_index,
        keyword: this.keyword,
        type: this.type,
        is_quoted: this.is_quoted
      };
      const res = await getQuote({ data: params });
      if (res.code == 200) {
        //console.log(res, 263);
        this.total = res.data.total;
        let lists = res.data.list;
        for (let i = 0; i < lists.length; i++) {
          //转成数组
          let serviceData =
            lists[i].service_cnname != null && lists[i].service_cnname.length? lists[i].service_cnname.split(",") : "";
                lists[i].service_cnname = serviceData;
        }
        this.quoteList = lists;
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
    this.getQuote();
  }
};
</script>

<style lang="scss" scoped>
</style>