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
  },
  methods:{
    getOrderList(){
      //我发布的销售订单

      
    }
  }
};
</script>
<style lang="scss" scoped>
</style>