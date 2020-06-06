<template>
  <!-- 头部导航 -->
  <div class="header">
    <div class="header-top">
      <div class="commonweb">
        <div class="country">
          <!-- todo: list 按国家切换语言 -->
          <span>中文</span>
        </div>
        <p>
          <span class="mr3">{{profile.user_info&&profile.user_info.user_name||''}} <span @click="loginOut" class="loginout" v-if="(profile.user_info&&profile.user_info.user_id*1>0)">退出</span>欢迎来到万合优采</span>
          <router-link to="/ucenter/login" v-if="!(profile.user_info&&profile.user_info.user_id*1>0)">请登录</router-link>
          <router-link to="/ucenter/register" v-if="!(profile.user_info&&profile.user_info.user_id*1>0)">免费注册</router-link>
        </p>
      </div>
    </div>
    <div class="header-nav commonweb clearfix">
      <a href="/" class="logo">
        <img src="@assets/images/logo.png" alt />
      </a>
      <ul class="nav clearfix">
        <li v-bind:class="{cur:!curNav}">
          <a href="/" >首页</a>
        </li>
        <li v-bind:class="{cur:curNav=='tradhall'}">
          <a href="/tradhall">交易大厅</a>
        </li>
        <li v-bind:class="{cur:curNav=='buy'}">
          <a href="/publish/buy" >我要采购</a>
        </li>
        <li v-bind:class="{cur:curNav=='sell'}">
          <a href="/publish/sell" >我要销售</a>
        </li>
        <li v-bind:class="{cur:curNav=='entrust'}">
          <a href="/publish/entrust" >委托采销</a>
        </li>
        <li v-bind:class="{cur:curNav=='supplier'}">
          <a href="/supplier" >供应商中心</a>
        </li>
        <li v-bind:class="{cur:curNav=='news'}">
          <a href="/news" >最新资讯</a>
        </li>
        <li v-bind:class="{cur:curNav=='ucenter'}">
          <a href="/ucenter/member" >个人主页</a>
        </li>
      </ul>

      <!-- 搜索延后 -->
      <!--
      <div class="search-box">
        <input type="text" />
        <button>搜索</button>
      </div>
      -->

    </div>
  </div>
</template>

<script>
import {delToken} from "@utils/common";
export default {
  name:'Head',
  data(){
    return {

    }
  },
  computed:{
    curNav(){
      let path = location.pathname.split('/');
      let moduleName = path[1];

      if((/^publish/).test(moduleName)){
          moduleName = path[2]; 
      }

      return moduleName;
    },
    profile(){
       let profile = this.$store.state.profile;
       console.log('header $store.state.profile',profile);

       return profile;
    }
  },
  methods:{
    loginOut(){

       this.$confirm('此操作是退出登录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delToken();
      this.$store.commit('profile/updateProfile',{});
      this.$router.push('/');
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });

     
    }
  },
  mounted:function(){

  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.loginout{cursor: pointer;margin-right:3px;}
.mr3{margin-right:3px;}
</style>
