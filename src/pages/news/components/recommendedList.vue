<template>
<div>
  <ul class="comnew-list">
    <li v-for="item in list" :key="item.id">
      <router-link :to="'/news/detail/'+item.id">{{item.title}}</router-link>
    </li>
    
  </ul>
</div>
</template>

<script>
export default {
    props:{
        list:Array
    }
};
</script>

<style lang="scss" scoped>
.comnew-list {
  li {
    a {
      display: block;
      position: relative;
      font-size: 16px;
      @include ol();
      height: 30px;
      line-height: 30px;
      color: #4e5a65;
      &:before {
        content: "";
        width: 5px;
        height: 5px;
        background-color: #44a78d;
        display: inline-block;
        vertical-align: middle;
        border-radius: 50%;
        margin-right: 10px;
      }
      &:hover {
        font-weight: bold;
      }
    }
  }
}
</style>