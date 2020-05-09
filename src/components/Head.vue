<template>
  <!-- 头部导航 -->
  <div class="header">
    <div class="header-top">
      <div class="commonweb">
        <div class="country">
          <span>{{$t('m.welcome')}}</span>
        </div>
        <p>
          欢迎来到万合优采
          <a href="/ucenter/login">免费注册</a>
          <a href="/ucenter/register">免费注册</a>
        </p>
      </div>
    </div>
    <div class="header-nav commonweb clearfix">
      <a href="/" class="logo">
        <img src="@assets/images/logo.png" alt />
      </a>
      <ul class="nav clearfix">
        <li>
          <a href="/">首页</a>
        </li>
        <li>
          <a href="/tradhall">交易大厅</a>
        </li>
        <li>
          <a href="/publish/buy">我要采购</a>
        </li>
        <li>
          <a href="/publish/sell">我要销售</a>
        </li>
        <li>
          <a href="/publish/entrust">委托采销</a>
        </li>
        <li>
          <a href="/supplier">供应商中心</a>
        </li>
        <li>
          <a href="/news">最新资讯</a>
        </li>
      </ul>
      <div class="search-box">
        <input type="text" />
        <button>搜索</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Head',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
