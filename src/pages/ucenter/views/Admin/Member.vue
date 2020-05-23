<template>
  <div class="membermg">
    <div class="member-web commonweb clearfix">
      <Mleftnav />
      <div class="member-right">
        <!--主页信息-->
        <div class="member-topmsg mb20">
          <div class="buy-button fr">
            <a href="/publish/buy">
              <i class="iconfont iconcaigou"></i>我要采购
            </a>
            <a href="/publish/sell">
              <i class="iconfont iconRectangleCopy1"></i>我要销售
            </a>
          </div>
          <div class="clearfix personal-box">
            <img class="personalimg" src="@assets/images/personnel.png" alt />
            <div class="personal-msg">
              <p class="company-msg">
                <strong>{{company(profile.type)}}</strong>
                <span>
                  <img src="@assets/images/VIP.png" alt />
                </span>
                <span v-if="profile.type==3">
                  <img src="@assets/images/qiyerenzheng.png" alt />
                </span>
              </p>
              <span class="person-name">
                <span class="person-name-text">{{contact_name}}</span>
                <i class="iconfont iconrenyuanxinxi"></i>
              </span>
            </div>
          </div>
        </div>

        <!--待办提醒-->
        <div class="reminder-wrap mb20 clearfix" v-if="false">
          <div class="reminder-left commonl-box fl">
            <h4 class="mcommon-title">待办提醒</h4>
            <ul>
              <li>
                <a href>
                  <i class="iconfont iconcaigou"></i>采购订单
                </a>
              </li>
              <li>
                <a href>
                  <i class="iconfont iconRectangleCopy1"></i>销售订单
                </a>
              </li>
              <li>
                <a href>
                  <i class="iconfont iconcaigou"></i>询盘订单
                </a>
              </li>
              <li>
                <a href>
                  <i class="iconfont iconcaigou"></i>待评价订单
                </a>
              </li>
            </ul>
          </div>
          <div class="reminder-right commonr-box fr">
            <a href>
              <img src="@assets/images/wimg01.png" alt />
            </a>
          </div>
        </div>


        <!--采购趋势分析-->
        <div class="mb20 clearfix" v-if="false">
          <div class="fl commonl-box">
            <h4 class="mcommon-title">采购趋势分析</h4>
            <div class="analysis-table"></div>
          </div>
          <div class="fr commonr-box hot-news">
            <h4 class="hotnews-title">热门新闻</h4>
            <ul class="hot-newslist">
              <li>
                <a href>
                  <img src="@assets/images/wimg02.png" alt />
                  <p class="title">约80地发百亿消费券，热门券抢手，拉动经济效果显现</p>
                </a>
              </li>
              <li>
                <a href>
                  <img src="@assets/images/wimg02.png" alt />
                  <p class="title">约80地发百亿消费券，热门券抢手，拉动经济效果显现</p>
                </a>
              </li>
              <li>
                <a href>
                  <img src="@assets/images/wimg02.png" alt />
                  <p class="title">约80地发百亿消费券，热门券抢手，拉动经济效果显现</p>
                </a>
              </li>
              <li>
                <a href>
                  <img src="@assets/images/wimg02.png" alt />
                  <p class="title">约80地发百亿消费券，热门券抢手，拉动经济效果显现</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!--list-->

        <MemberPublishList />

      </div>
    </div>
  </div>
</template>



<script>
import Mleftnav from "@components/Mleftnav";
import MemberPublishList from "./MemberPublishList";



export default {
  components: {
    Mleftnav,
    MemberPublishList
  },
  data(){
    return { 

    }
  },
  computed:{
    profile(){
      return this.$store.state.profile;
    },
    company(){
      return (type)=>{
        //type '注册类型：1个人 2 机构 3企业'
        if(type==1){
          return this.profile.user_name;
        }else if(type==2){
          return this.profile.organization_name;
        }else if(type==3){
          return this.profile.company_name;
        }
      }
    },
    contact_name(){
      return this.$store.state.profile.contact_name
    }
  },
  methods:{

  },
  created(){
  
  }
};
</script>
<style lang="scss" scoped>
/*右侧内容*/
.member-right {
  float: right;
  width: 980px;
}

.member-topmsg {
  background-color: #479e84;
  border-radius: 5px;
  padding: 20px 35px;
  color: #fff;
}

.personal-box {
  .personalimg {
    width: 84px;
    height: 84px;
    border-radius: 50%;
    float: left;
    margin-right: 26px;
  }
}

.personal-msg {
  overflow: hidden;
}

.company-msg {
  padding-top: 10px;
  margin-bottom: 10px;

  strong {
    font-size: 20px;
    padding-right: 10px;
    display: inline-block;
    vertical-align: middle;
  }

  span {
    display: inline-block;
    vertical-align: middle;
    padding-right: 10px;

    img {
      max-height: 24px;
    }
  }
}

.person-name {
  .person-name-text{
    margin-right:5px;
  }
  i {
    margin-left: 0;
    font-size: 24px;
    line-height: 20px;
    vertical-align: middle;
  }
}

.buy-button {
  padding-top: 25px;

  a {
    display: inline-block;
    color: #fff;
    width: 120px;
    height: 36px;
    background-color: #44b895;
    border-radius: 5px;
    text-align: center;
    line-height: 36px;
    margin-left: 20px;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -ms-transition: all 0.3s;

    &:hover {
      background-color: #25cc9a;
    }

    i {
      margin-right: 5px;
      font-size: 20px;
      vertical-align: middle;
      height: 18px;
      line-height: 18px;
    }
  }
}

.reminder-left {
  ul {
    padding-top: 7px;
    font-size: 0;

    li {
      display: inline-block;
      width: 25%;
      text-align: center;
      font-size: 14px;

      i {
        display: block;
        color: #479e84;
        font-size: 32px;
        height: 32px;
        line-height: 32px;
      }

      a {
        font-size: 12px;
        color: #707070;
      }
    }
  }
}

.commonl-box {
  width: 660px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 15px 15px 25px;
}

.commonr-box {
  width: 300px;
}

.mcommon-title {
  font-size: 16px;
  color: #707070;
  margin-bottom: 10px;

  &:before {
    content: "";
    display: inline-block;
    width: 3px;
    height: 20px;
    background-color: #479e84;
    margin-right: 10px;
    vertical-align: -4px;
  }
}

.reminder-right {
  img {
    width: 300px;
    height: 150px;
  }
}

.analysis-table {
  width: 100%;
  height: 212px;
}

.hotnews-title {
  font-size: 16px;
  color: #707070;
  margin-bottom: 10px;
}

.hot-news {
  padding: 10px 16px;
  background: #fff;
  border-radius: 5px;
}

.hot-newslist {
  height: 232px;
  overflow: hidden;

  li {
    margin-bottom: 10px;

    a {
      display: block;
      color: #707070;

      &:hover {
        color: #44a78d;
      }

      img {
        width: 60px;
        float: left;
        margin-right: 17px;
      }

      .title {
        display: -webkit-box;
        height: 48px;
        line-height: 24px;
        // word-break: break-all; 英文版的多行文本异常，去掉
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
  }
}

</style>

