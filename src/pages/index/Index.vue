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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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