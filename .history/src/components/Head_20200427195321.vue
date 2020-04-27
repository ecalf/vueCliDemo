<template>
  <!-- 头部导航 -->
  <div class="header">
    <div class="header-top">
      <div class="commonweb">
        <div class="country">
          <span>国家</span>
        </div>
        <p>
          欢迎来到万合优采
          <a href="javascript:;">请登录</a>
          <a href="javascript:;">免费注册</a>
        </p>
      </div>
    </div>
    <div class="header-nav commonweb clearfix">
      <a href class="logo">
        <!-- <img src="./assets/images/logo.png" alt /> -->
      </a>
      <ul class="nav clearfix">
        <li>
          <a href>首页</a>
        </li>
        <li>
          <a href>交易大厅</a>
        </li>
        <li>
          <a href>我要采购</a>
        </li>
        <li>
          <a href>我要销售</a>
        </li>
        <li>
          <a href>委托采销</a>
        </li>
        <li>
          <a href>供应商中心</a>
        </li>
        <li>
          <a href>最新资讯</a>
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
  name: "Head",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
