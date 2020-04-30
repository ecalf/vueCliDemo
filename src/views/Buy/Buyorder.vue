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
        <div class="buy-order-nav">
          订单状态：
          <p class="order-nav-navbar">
            <a href>全部</a>
            <a href>待发货</a>
            <a href>待评价</a>
            <a href>交易成功</a>
            <a href>已取消</a>
            <a href>问题订单</a>
          </p>
        </div>
         <Errormsg />
      </div>
    </div>
  </div>
</template>

<script>
import Mleftnav from "../../components/Mleftnav";
import Errormsg from "../../components/Errormsg";
export default {
  components: {
    Mleftnav,Errormsg
  }
};
</script>
<style>
</style>