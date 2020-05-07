<template>
  <div class="buy-order-nav">
    <div class="order-nav-navbar">
      <a href="javascript:;" v-for="(navitem,index) in navlist" :key="index">{{navitem.title}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    navlist:{}
  }
};
</script>

<style lang="scss" scoped>
.buy-order-nav {
  margin-top: 6px;
  background-color: #f4f4f4;
  color: #707070;
}

.order-nav-navbar {
  display: table;
 border-radius: 5px;
 text-align:center;
  a {
    color: #707070;
    display: table-cell;
    padding: 8px 20px;
    width: 1%;
    transition:all .3s;
    -webkit-transition:all .3s;
    -o-transition:all .3s;
    -ms-transition:all .3s;
    &:hover,
    &.active {
      background-color: #479e84;
     
      color: #fff;
    }
  }
}
</style>