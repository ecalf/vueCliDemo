<template>
  <div id="app">
    <Head />
    <div id="nav">
      <router-link to="/">TEST - Home</router-link> |
      <router-link to="/about">TEST-About</router-link> |
      <a href="/account"> TEST-Account</a> |
      <a href="/ucenter/login"> 个人主页-登录</a> |
      <a href="/ucenter/Register"> 个人主页-注册</a> |
      <a href="/ucenter/member"> 个人主页-会员</a> |
      <a href="/ucenter/release"> 个人主页-我要采购</a> |
      <a href="/ucenter/buyorder"> 个人主页-采购订单</a> 
    </div>
    
    <router-view />
    <Footer />
  </div>
</template>

<style lang="scss">

@import "~@assets/css/variables.scss";

$align:center; /* 变量 */
.setopacity{
  opacity: 0.8;
  margin:30px auto 30px;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: $align;
  color: $green; /*變量*/
  @include bigFont; /*混入*/
  @extend .setopacity;/*繼承*/
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>


<script>
import Head from "@components/Head";
import Footer from "@components/Footer";
export default {
  components: {
    Head,
    Footer
  }
};
</script>