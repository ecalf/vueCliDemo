<template>
        <!--公司主页介绍-->
    <div class="company-info clearfix">
      <a href class="enter-page">进入企业主页</a>
      <div class="company-type">
        <h2 class="company-title">深圳迈万和优采股份有限公司</h2>
        <span>工厂</span>
        <span>广州</span>
        <span>企业主营： 口罩，防护服，呼吸机</span>
      </div>
      <div
        class="company-dec"
      >万合国际供应链投资（深圳）有限公司创立于20018年11月19日。自成立以来，万合专注于服务质量的提升，已积累国际供应链服务21年的行业经验，与2018年成立全流程服务的，凭借卓越的物流供应链服务和持续创新的技术应用，与诸多产业客户建立了长期深度合作...</div>
    </div>
</template>

<style lang="scss" scoped>
    /*公司主页介绍*/
.company-info {
  padding: 25px;
  background: #fff;
  color: #4e5a65;
  margin-bottom: 10px;
}
.company-type {
  .company-title {
    font-size: 22px;
    color: #4e5a65;
    display: inline-block;
    vertical-align: -4px;
    margin-right: 24px;
  }
  span {
    padding: 6px 7px;
    border-radius: 3px;
    border: solid 1px #44a78d;
    margin: 0 5px;
    color: $ac;
  }
}

.company-dec {
  max-width: 624px;
  font-size: 12px;
  padding: 10px 0 8px;
  line-height: 16px;
}
.company-msg {
  margin-top: -20px;
  font-size: 16px;
  p {
    padding-bottom: 5px;
  }
}

.enter-page {
  float: right;
  padding: 13px 26px;
  line-height: 24px;
  font-size: 18px;
  background: rgba(68, 167, 141, 0.2);
  transition: all 0.3s;
  border-radius: 3px;
  border: solid 1px #44a78d;
  color: #44a78d;
  margin-top: 25px;
  &:hover {
    background: $ac;
    color: #fff;
  }
}

</style>

<script>
    export default {
        props:{
            info:Object
        },
        data(){
            return {}
        },
        methods:{
            
        }
    }
</script>