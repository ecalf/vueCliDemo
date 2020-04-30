<template>
  <div id="app">
    <Head />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <a href="/account"> Account</a> |
      <a href="/ucenter/login"> Login</a> |
      <a href="/ucenter/Register"> Login</a> |
      <a href="/ucenter/member"> Member</a> |
      <a href="/ucenter/release"> release</a> |
      <a href="/ucenter/buyorder"> buyorder</a> 
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