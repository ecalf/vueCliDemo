<template>
  <MemberRightWrap title="供应商库" v-bind:searchconfig="searchconfig">
    <!-- <BarNav v-bind:navlist="navlist" @switch-tab="switchTab" /> -->

    <div class="purchase-order">
      <ul>
        <li v-for="(item,index) in supplierList" :key="index">
          <img class="item-logo" :src="item.company_images" />
          <p class="item-text">企业名称: {{item.company_name}}</p>
          <p class="item-text">主营业务: {{item.business_scope_cate }}</p>
          <p class="item-text">联系人: {{item.contact_name}}</p>
          <p class="item-text">电话: {{item.contact_phone }}</p>
          <div class="item-action">
            <!-- <a class="action-link">查看主页</a> -->
             <router-link v-bind:to="'/product/company/'+item.user_id" class="action-link">查看主页</router-link>
          </div>
        </li>
      </ul>
    </div>

    <Errormsg v-if="isnodata" />
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
// import BarNav from "../../components/BarNav";
import {getSupplier} from "@api/user";
export default {
  components: {
    MemberRightWrap,
    Errormsg,
    Pagination
    // BarNav,
  },
  props: {},
  data() {
    return {
      searchconfig: {
        name: "keyword",
        handler: (name, keyword) => {
          this.onSearch(name, keyword);
        }
      },
      // navlist: [
      //     {id:0, title: "全部",active:true },
      //     {id:1, title: "合作过" },
      //     {id:2, title: "我的收藏" }
      // ],
      supplierList: [],
      type: 0,
      total: 0,
      page_size: 10,
      page_index: 1,
      collect_type: 1,
      isnodata:false,
    };
  },
  methods: {
    onSearch(name, keyword) {
      this.keyword = keyword;
      this.page_index = 1;
      this.getSupplier();
    },
    switchTab(item) {
      this.type = item.id * 1;
      this.page_index = 1;
      this.getSupplier();
    },
    switchPage(page_index) {
      this.page_index = page_index * 1;
      this.getSupplier();
    },
    //获取供应商库数据
    async getSupplier() {
      const params = {
        collect_type: this.collect_type,
        page_index: this.page_index,
        page_size: this.page_size,
        keyword:this.keyword
      };
      const res = await getSupplier({ data: params });

      if (res.code == 200) {
       // console.log(res,235);
        this.supplierList = res.data.list;
        this.total = res.data.total;
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
    this.getSupplier();
  }
};
</script>
<style lang="scss" scoped>
.purchase-order {
  padding-top: 22px;
  ul {
    display: flex;
    justify-content:left;
    align-items: center;
    flex-flow: row wrap;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 2px;
    line-height: 24px;
    white-space: nowrap;
  margin-left:-20px;
    li {
      display: inline-block;
      width: 280px;
      height: 405px;
      font-size: 14px;
      margin-bottom: 20px;
      margin-right:20px;
      padding: 20px 20px 12px;
      text-align: left;
      vertical-align: middle;
      overflow: hidden;

      @include default-border;
      @include default-radius;

      .item-logo {
        display: block;
        margin: 14px auto 28px;
        height: 130px;

      }
      .item-text {
        margin-bottom: 18px;
        height: 20px;
        line-height: 20px;
      }
      .item-name {
        font-size: 18px;
        line-height: 18px;
      }
      .item-action {
        display: flex;
        justify-content: space-between;
        font-size: 14px;

        .action-link,
        .action-del {
          height: 30px;
          line-height: 30px;
          text-align: center;
          cursor: pointer;
          color: $bgwhite;
          @include default-radius;
        }
        .action-link {
          width: 100px;
          background-color: #479e84;
        }
        .action-del {
          width: 60px;
          background-color: #f23a3b;
        }
      }
    }
  }
}
</style>