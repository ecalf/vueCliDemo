<template>
  <div class="buy-order-nav">
    <div class="order-nav-navbar">
      <a href="javascript:;" 
        v-for="(item,index) in navlist" 
        v-bind:data-id="item.id"
        v-bind:key="index"
        v-bind:class="{active:index==curTabIndex}"
        @click="switchTab(item,index)"
        >{{item.title}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    navlist:Array
  },
  data(){
    let curTabIndex = 0;
    this.navlist.forEach((item,index)=>{
      if(item.active==true){
        curTabIndex = index;
      }
    });
    

    return {
      curTabIndex:curTabIndex
    }
  },
  methods:{
    switchTab(item,index){
      this.curTabIndex = index;
      this.$emit("switch-tab",item);
    }
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