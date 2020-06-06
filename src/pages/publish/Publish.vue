

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
import Banner from "@components/Banner";
export default {
  components: {
    Head,
    Footer,
  },
  data(){
    return{     
    }
  },
  methods:{

  },
  created(){
   
  }
};
</script>