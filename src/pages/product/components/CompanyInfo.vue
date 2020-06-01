<template>
        <!--公司主页介绍-->
    <div class="company-info clearfix">
      <router-link v-bind:to="'/product/company/'+info.user_id" class="enter-page">
        进入企业主页
      </router-link>
      <div class="company-type">
        <h2 class="company-title">{{info.company_name}}</h2>
       <!--
        <span>工厂</span>
        <span>广州</span>
        -->
        <span>企业主营： {{info.business_scope_cate}}</span>
      </div>
      <div class="company-dec">{{info.company_introduce}}</div>
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