<template>
        <!-- 会员左侧导航 -->
        <div class="member-nav">
          <h3>个人主页</h3>
          <ul class="membernav-list">
            <li>
              <h4>
                <a href>我要采购</a>
              </h4>
              <div class="member-subnav">
                <a href>发布采购</a>
                <a href>求购管理</a>
                <a href>采购订单</a>
                <a href>供应商库</a>
                <a href>委托采购</a>
                <a href>合同管理</a>
              </div>
            </li>
            <li>
              <h4>
                <a href>我要销售</a>
              </h4>
              <div class="member-subnav">
                <a href>发布商品</a>
                <a href>管理商品</a>
                <a href>店铺管理</a>
                <a href>订单管理</a>
                <a href>合同管理</a>
                <a href>委托销售</a>
              </div>
            </li>
            <li>
              <h4>
                <a href>分销管理</a>
              </h4>
              <div class="member-subnav">
                <a href>订单列表</a>
                <a href>佣金</a>
                <a href>推广的vip公司</a>
                <a href>提现</a>
                <a href>邀请码</a>
              </div>
            </li>
             <li>
              <h4>
                <a href>账户管理</a>
              </h4>
              <div class="member-subnav">
                <a href>我的账户</a>
                <a href>发票管理</a>
              </div>
            </li>
          </ul>
        </div>
        <!-- 会员左侧导航 end-->
</template>

<script>
export default {
  name:'Mleftnav',
};
</script>

<style lang="scss" scoped>
.member-nav {
    float: left;
    width: 200px;
    font-size: 16px;
    color: #707070;
    background:#fff;
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
        border-radius: 5px 5px 0px 0px;
    }
    .membernav-list{
        padding:8px 0 30px;
        h4{
            font-size: 16px;
            padding:10px 0 8px;
            text-align: center;
            a{
                display: block;
            
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