

<template>
  <div id="app">
    <Head />
    <router-view></router-view>
    <Footer />
  </div>
</template>


<style scoped>
    
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