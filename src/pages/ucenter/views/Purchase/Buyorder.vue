<template>
  <div class="membermg">
    <div class="member-web commonweb clearfix">
      <Mleftnav />
      <div class="member-right common-slide">
        <div class="memcommon-title clearfix">
          <div class="order-search">
            <form>
              <input type="text" placeholder="搜索" />
              <button class="iconfont iconsousuo"></button>
            </form>
          </div>
          <h3>采购订单</h3>
        </div>
        <bar-nav :navlist="navlist" />
        <order-show />
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
import OrderShow from "../../components/OrderShow";
export default {
  components: {
    Mleftnav,
    Errormsg,
    BarNav,
    OrderShow
  },
  data() {
    return {
      navlist: [
        { title: "全部" },
        { title: "上架" },
        { title: "下架" },
        { title: "已截止" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
</style>