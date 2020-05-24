<template>
  <div class="membermg">
    <div class="member-web commonweb clearfix">
      <Mleftnav />
      <div class="member-right common-slide">
        <div class="memcommon-title clearfix">
          <div class="order-search">
            <form>
              <button class="iconfont iconsousuo fr"></button>
              <input type="text" placeholder="搜索" />
            </form>
          </div>
          <h3>报价管理</h3>
        </div>
        <bar-nav :navlist="navlist" />
        <price-list />
        <!--搜索判断-->
        <!-- <Errormsg /> -->
      </div>
    </div>
  </div>
</template>

<script>
import Mleftnav from "@components/Mleftnav";
import Errormsg from "@components/Errormsg";
import BarNav from "../../components/BarNav";
import PriceList from "../../components/PriceList";


export default {
  components: {
    Mleftnav,
    Errormsg,
    BarNav,
    PriceList
  },
  data() {
    return {
      navlist: [{ title: "已报价" }, { title: "未报价" }]
    };
  },
  methods:{
    getQuotedPriceList(){
      //获取厂家向我发布的采购订单进行报价的信息



    }
  }
};
</script>

<style lang="scss" scoped>
</style>