<template>
        <!-- 会员左侧导航 -->
        <div class="member-nav">
          <h3 @click="goUcenter()"><i class="iconfont iconzhuye"></i>个人主页</h3>
          <ul class="membernav-list">
            <li>
              <h4>
                <a href="javascript:;"><i class="iconfont iconcaigou"></i>我要采购</a>
              </h4>
              <div class="member-subnav">
                <router-link to="/publish/buy" v-bind:class="{active:isCurrentPath('/publish/buy')}">发布采购</router-link>
                <router-link to="/ucenter/quotedprice" v-bind:class="{active:isCurrentPath('/ucenter/quotedprice')}">报价管理</router-link>
                <router-link to="/ucenter/buyorder" v-bind:class="{active:isCurrentPath('/ucenter/buyorder')}">采购订单</router-link>
                <router-link to="/ucenter/suppliers" v-bind:class="{active:isCurrentPath('/ucenter/suppliers')}">供应商库</router-link>
                <router-link 
                  v-bind:to="{path:'/publish/entrust',query:{type:4}}"
                  v-bind:class="{active:isCurrentPath('/publish/entrust')}"
                  >委托采购</router-link>

                <a href="javascript:;" title="comming soon">合同管理</a>
              </div>
            </li>
            <li>
              <h4>
                <a href="javascript:;"><i class="iconfont iconxiaoshou"></i>我要销售</a>
              </h4>
              <div class="member-subnav">
                <router-link to="/publish/sell" v-bind:class="{active:isCurrentPath('/publish/sell')}">发布商品</router-link>
                <router-link to="/ucenter/sellorder" v-bind:class="{active:isCurrentPath('/ucenter/sellorder')}">销售管理</router-link>
                <router-link to="/ucenter/company" v-bind:class="{active:isCurrentPath('/ucenter/company')}">主页管理</router-link>
                <router-link 
                  v-bind:to="{path:'/publish/entrust',query:{type:3}}"
                  v-bind:class="{active:isCurrentPath('/publish/entrust')}"
                  >委托销售</router-link>

                <a href="javascript:;" title="comming soon">合同管理</a>
              </div>
            </li>

            <!--  分销管理延后
            <li v-if="false">
              <h4>
                <a href="javascript:;"><i class="iconfont iconfenxiao"></i>分销管理</a>
              </h4>
              <div class="member-subnav">
                <a href>订单列表</a>
                <a href="javascript:;">佣金</a>
                <a href="javascript:;">推广的vip公司</a>
                <a href="javascript:;">提现</a>
                <a href="javascript:;">邀请码</a>
              </div>
            </li>
          -->

             <li>
              <h4>
                <a href="javascript:;"><i class="iconfont iconzhanghuxinxi"></i>账户管理</a>
              </h4>
              <div class="member-subnav">
                <router-link to="/ucenter/account" v-bind:class="{active:isCurrentPath('/ucenter/account')}">我的账户</router-link>
                <router-link to="/ucenter/authentication"  v-bind:class="{active:isCurrentPath('/ucenter/authentication')}">认证中心</router-link>
                <a href="javascript:;" title="comming soon">发票管理</a>
              </div>
            </li>
          </ul>
        </div>
        <!-- 会员左侧导航 end-->
</template>

<script>
export default {
  name:'Mleftnav',
  methods:{
    goUcenter(){
      let path = '/ucenter/member';
      if(location.pathname.indexOf(path)==-1){
        this.$router.push(path);  
      }
      
    }
  },
  computed:{
    isCurrentPath(){
      return (path)=>{
        return this.$router.history.current.fullPath.indexOf(path)>-1
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.member-nav {
    float: left;
    width: 200px;
    font-size: 16px;
    color: #707070;
    background:#fff;
    margin-right:20px;
    a{
        color: #707070;
    }
    h3 {
        font-size: 16px;
        color: #ffffff;
        height: 48px;
        line-height:48px;
        text-align: center;
        background-color: #479e84;
        border-radius: 3px 5px 0px 0px;
        cursor:pointer;
        i{
          margin-right:10px;
          font-size:24px;
          vertical-align:middle;
        }
    }
    .membernav-list{
        padding:8px 0 30px;
        h4{
            font-size: 16px;
            padding:10px 0 8px 24px;

            a{
                display: block;
             i{
               color:#479e84;
          margin-right:10px;
          font-size:24px;
          vertical-align:middle;
        }
            }
        }
    }
    .member-subnav{
        font-size:0;
        padding:0 15px;
        a{
            display:inline-block;
            *display: inline;
            *zoom: 1;
            font-size:16px;
            padding:8px 9px;
            text-align:left;
            min-width:82px;
            &:hover,&.active{
                color:#479e84;
            }
        }
    }
}
</style>