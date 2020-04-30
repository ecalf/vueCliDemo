<template>
  <div id="app">
    <Head v-show="headerShow" />
    <router-view v-on:header="header" v-on:footer="footer"></router-view>
    <Footer v-show="footerShow" />
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
      headerShow: true,
      footerShow: true
    };
  },
  methods:{
      //是否显示头部
      header:function (bool) {
        this.headerShow = bool;
      },
      //是否显示底部
      footer:function (bool) {
          this.footerShow = bool;
      }
  },
 
};
</script>