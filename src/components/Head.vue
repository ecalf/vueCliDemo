<template>
  <!-- 头部导航 -->
  <div class="header">
    <div class="header-top">
      <div class="commonweb">
        <div class="country">
          <!-- todo: list 按国家切换语言 -->
          <span>{{$t('time.welcome')}}</span>
        </div>
        <p>
          <span>欢迎来到万合优采 {{profile.user_name||'uid:'+profile.uid}}</span>
          <a href="/ucenter/login" v-if="profile.uid*1>0">请登录</a>
          <a href="/ucenter/register" v-if="profile.uid*1>0">免费注册</a>
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
  data(){
    return {
    }
  },
  computed:{
    profile(){
       let profile = this.$store.state.profile;
       console.log('header $store.state.profile',profile);

       return profile;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
