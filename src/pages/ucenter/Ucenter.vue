<template>
  <div id="app">
    <Head v-show="!hideHeaderFooter" />
    <router-view></router-view>
    <Footer v-show="!hideHeaderFooter" />
  </div>
</template>
<script>
import Head from "@components/Head";
import Footer from "@components/Footer";
export default {
  components: {
    Head,
    Footer
  },
  data() {
    return {
      
    };
  },
  computed:{
    hideHeaderFooter(){
      let coms = ['Login','Register'];
      return coms.indexOf(this.$router.history.current.name)>-1
      
    }
  },
  methods:{
     
  },
  created(){
    console.log('hideHeaderFooter:',this.hideHeaderFooter);
    console.log(this.$router.history.current.name);
  }
 
};
</script>