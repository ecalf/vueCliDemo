<template>
  <div class="order-search">
      <button type="button" class="iconfont iconsousuo fr" @click="onSearch"></button>
      <input type="text" 
          v-bind:name="config.name" 
          v-bind:placeholder="config.placeholder||'搜索'" 
          v-model="keyword" 
        />
  </div>
</template>

<style lang="scss" scoped>
    
</style>

<script>
  /**************************************
  ******* 用于会员中心 一些列表表头的搜索 ****
  ***************************************/
  export default {
      props:{
        config:Object
      },
      data(){
          return {
            keyword:''
          }
      },
      methods:{
          onSearch(){
              this.config.handler(this.config.name,this.keyword);
          }
      }
  }
</script>