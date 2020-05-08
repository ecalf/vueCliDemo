<template>
  <div id="app">
    <Head />
    <div id="nav">
      <a href="/test"> test</a> |
      <a href="/test/about"> about</a> |
      <a href="/account"> Account</a> 

    </div>
    
    <router-view />
    <Footer />
  </div>
</template>

<style lang="scss">

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