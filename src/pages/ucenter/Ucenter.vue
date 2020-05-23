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
      comName:this.$router.history.current.name
    }
  },
  computed:{
    hideHeaderFooter(){//控制是否显示页头页脚
      let coms = ['Login','Register'];
      return coms.indexOf(this.comName)>-1
    }
  },

  watch:{
    '$route.path':function (){
      this.comName = this.$router.history.current.name;
    }
  }

 
};
</script>