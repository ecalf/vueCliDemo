<template>
  <div class="commonweb news-web">
    <div class="today-news clearfix">
      <div class="today-title">今日要闻</div>
      <div class="oh today-con">
        <a href>
          <h1>习近平主持召开中央深改委第十三次会议</h1>
          <p
            class="today-dec"
          >"习近平强调，我国疫情防控和复工复产之所以能够有力推进，根本原因是党的领导和我国社会主义制度的优势发挥了无可比拟的重要作用。发展环境越是严峻复杂，越要坚定不移深化改革，健全各方面制度，完善治理体系，促进制度建设和治理效能更好转化融合，善于运用制度优势应对风险挑战冲击。"</p>
        </a>
      </div>
    </div>
    <!--推荐新闻-->
    <div class="recommended-news clearfix">
      <div class="re-slider">
        <swiper :options="newSwiper" ref="newSwiper">
          <swiper-slide>
            <a href>
              <img src="@assets/images/newimg01.png" alt />
              <h3 class="renews-title">习近平同尼泊尔总统班达里通电话</h3>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href>
              <img src="@assets/images/newimg01.png" alt />
              <h3 class="renews-title">习近平同尼泊尔总统班达里通电话2</h3>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href>
              <img src="@assets/images/newimg01.png" alt />
              <h3 class="renews-title">习近平同尼泊尔总统班达里通电话3</h3>
            </a>
          </swiper-slide>
        </swiper>
        <div class="iban-pages"></div>
      </div>
      <div class="re-list">
        <ul>
          <li v-for="(item,index) in newslist" :key="index" @click="toSlide(index)">
            <a href="javascript:;">
              <h2 class="fs16">{{item.title}}</h2>
              <p>{{item.dec}}</p>
            </a>
          </li>
         
        </ul>
      </div>
    </div>
    <!--新闻列表-->
    <div class="pagenews-wrap clearfix">
      <div class="pagenews-left fl">
        <h3 class="comnew-title">疫情新闻</h3>
        <ul class="comnew-list">
          <li>
            <a href>互联网发展状况报告:我国网民9.04亿...</a>
          </li>
          <li>
            <a href>互联网发展状况报告</a>
          </li>
          <li>
            <a href>互联网发展状况报告:我国网民规模达</a>
          </li>
          <li>
            <a href>互联网发展状况报告:我国网民9.04亿...</a>
          </li>
          <li>
            <a href>互联网发展状况报告</a>
          </li>
          <li>
            <a href>互联网发展状况报告:我国网民规模达</a>
          </li>
          <li>
            <a href>互联网发展状况报告:我国网民9.04亿...</a>
          </li>
          <li>
            <a href>互联网发展状况报告</a>
          </li>
          <li>
            <a href>互联网发展状况报告:我国网民规模达</a>
          </li>
          <li>
            <a href>互联网发展状况报告:我国网民9.04亿...</a>
          </li>
          <li>
            <a href>互联网发展状况报告</a>
          </li>
          <li>
            <a href>互联网发展状况报告:我国网民规模达</a>
          </li>
          <li>
            <a href>互联网发展状况报告:我国网民9.04亿...</a>
          </li>
          <li>
            <a href>互联网发展状况报告</a>
          </li>
        </ul>
      </div>
      <div class="pagenews-right fl clearfix">
        <div class="item">
          <h3 class="comnew-title">国际新闻</h3>
          <ul class="comnew-list">
            <li>
              <a href>互联网发展状况报告:我国网民9.04亿...</a>
            </li>
            <li>
              <a href>互联网发展状况报告</a>
            </li>
            <li>
              <a href>互联网发展状况报告:我国网民规模达</a>
            </li>
            <li>
              <a href>互联网发展状况报告:我国网民9.04亿...</a>
            </li>
            <li>
              <a href>互联网发展状况报告</a>
            </li>
            <li>
              <a href>互联网发展状况报告:我国网民规模达</a>
            </li>
          </ul>
        </div>
        <div class="item">
          <h3 class="comnew-title">行业新闻</h3>
          <ul class="comnew-list">
            <li>
              <a href>互联网发展状况报告:我国网民9.04亿...</a>
            </li>
            <li>
              <a href>互联网发展状况报告</a>
            </li>
            <li>
              <a href>互联网发展状况报告:我国网民规模达</a>
            </li>
            <li>
              <a href>互联网发展状况报告:我国网民9.04亿...</a>
            </li>
            <li>
              <a href>互联网发展状况报告</a>
            </li>
            <li>
              <a href>互联网发展状况报告:我国网民规模达</a>
            </li>
          </ul>
        </div>
        <div class="item">
          <h3 class="comnew-title">政策新闻</h3>
          <ul class="comnew-list">
            <li>
              <a href>互联网发展状况报告:我国网民9.04亿...</a>
            </li>
            <li>
              <a href>互联网发展状况报告</a>
            </li>
            <li>
              <a href>互联网发展状况报告:我国网民规模达</a>
            </li>
            <li>
              <a href>互联网发展状况报告:我国网民9.04亿...</a>
            </li>
            <li>
              <a href>互联网发展状况报告</a>
            </li>
            <li>
              <a href>互联网发展状况报告:我国网民规模达</a>
            </li>
          </ul>
        </div>
        <div class="item">
          <h3 class="comnew-title">公司新闻</h3>
          <ul class="comnew-list">
            <li>
              <a href>互联网发展状况报告:我国网民9.04亿...</a>
            </li>
            <li>
              <a href>互联网发展状况报告</a>
            </li>
            <li>
              <a href>互联网发展状况报告:我国网民规模达</a>
            </li>
            <li>
              <a href>互联网发展状况报告:我国网民9.04亿...</a>
            </li>
            <li>
              <a href>互联网发展状况报告</a>
            </li>
            <li>
              <a href>互联网发展状况报告:我国网民规模达</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--导航-->
    <div class="bar-height news-bar">
      <div class="tab-bar">
        <a href class="active">疫情新闻</a>
        <a href>国际新闻</a>
        <a href>政策新闻</a>
        <a href>行业新闻</a>
        <a href>公司新闻</a>
      </div>
    </div>
    <div class="comnews-type-list yitype gjtype zctype hytype gstype">
      <ul>
        <li class="clearfix">
          <span class="date">
            <em>疫情</em> 2小时前
          </span>
          <a href>战“疫”每日观察丨疫情之后，高质量发展的步伐将更大</a>
        </li>
        <li class="clearfix">
          <span class="date">
            <em>疫情</em> 2小时前
          </span>
          <a href>战“疫”每日观察丨疫情之后，高质量发展的步伐将更大战“疫”每日观察丨疫情之后，高质量发...</a>
        </li>
        <li class="clearfix">
          <span class="date">
            <em>疫情</em> 2小时前
          </span>
          <a href>战“疫”每日观察丨疫情之后，高质量发展的步伐将更大</a>
        </li>
        <li class="clearfix">
          <span class="date">
            <em>疫情</em> 2小时前
          </span>
          <a href>战“疫”每日观察丨疫情之后，高质量发展的步伐将更大战“疫”每日观察丨疫情之后，高质量发...</a>
        </li>
        <li class="clearfix">
          <span class="date">
            <em>疫情</em> 2小时前
          </span>
          <a href>战“疫”每日观察丨疫情之后，高质量发展的步伐将更大</a>
        </li>
        <li class="clearfix">
          <span class="date">
            <em>疫情</em> 2小时前
          </span>
          <a href>战“疫”每日观察丨疫情之后，高质量发展的步伐将更大战“疫”每日观察丨疫情之后，高质量发...</a>
        </li>
        <li class="clearfix">
          <span class="date">
            <em>疫情</em> 2小时前
          </span>
          <a href>战“疫”每日观察丨疫情之后，高质量发展的步伐将更大</a>
        </li>
        <li class="clearfix">
          <span class="date">
            <em>疫情</em> 2小时前
          </span>
          <a href>战“疫”每日观察丨疫情之后，高质量发展的步伐将更大战“疫”每日观察丨疫情之后，高质量发...</a>
        </li>
        <li class="clearfix">
          <span class="date">
            <em>疫情</em> 2小时前
          </span>
          <a href>战“疫”每日观察丨疫情之后，高质量发展的步伐将更大</a>
        </li>
        <li class="clearfix">
          <span class="date">
            <em>疫情</em> 2小时前
          </span>
          <a href>战“疫”每日观察丨疫情之后，高质量发展的步伐将更大战“疫”每日观察丨疫情之后，高质量发...</a>
        </li>
        <li class="clearfix">
          <span class="date">
            <em>疫情</em> 2小时前
          </span>
          <a href>战“疫”每日观察丨疫情之后，高质量发展的步伐将更大</a>
        </li>
        <li class="clearfix">
          <span class="date">
            <em>疫情</em> 2小时前
          </span>
          <a href>战“疫”每日观察丨疫情之后，高质量发展的步伐将更大战“疫”每日观察丨疫情之后，高质量发...</a>
        </li>
        <li class="clearfix">
          <span class="date">
            <em>疫情</em> 2小时前
          </span>
          <a href>战“疫”每日观察丨疫情之后，高质量发展的步伐将更大</a>
        </li>
        <li class="clearfix">
          <span class="date">
            <em>疫情</em> 2小时前
          </span>
          <a href>战“疫”每日观察丨疫情之后，高质量发展的步伐将更大战“疫”每日观察丨疫情之后，高质量发...</a>
        </li>
        <li class="clearfix">
          <span class="date">
            <em>疫情</em> 2小时前
          </span>
          <a href>战“疫”每日观察丨疫情之后，高质量发展的步伐将更大</a>
        </li>
        <li class="clearfix">
          <span class="date">
            <em>疫情</em> 2小时前
          </span>
          <a href>战“疫”每日观察丨疫情之后，高质量发展的步伐将更大战“疫”每日观察丨疫情之后，高质量发...</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      newslist:[
        {title:"习近平同尼泊尔总统班达里通电话",dec:"习近平强调，中方将秉持构建人类命运共同体理念，积极开展抗疫国际作，支持世界卫生组织发挥领导作用。"},
        {title:"习近平同尼泊尔总统班达里通电话",dec:"习近平强调，中方将秉持构建人类命运共同体理念，积极开展抗疫国际作，支持世界卫生组织发挥领导作用。"},
        {title:"习近平同尼泊尔总统班达里通电话",dec:"习近平强调，中方将秉持构建人类命运共同体理念，积极开展抗疫国际作，支持世界卫生组织发挥领导作用。"}
        ],
      newSwiper: {
        pagination: {
          el: ".iban-pages",
          clickable: true
        }
      }
    };
  },
  methods: {
    toSlide(index) {
      this.$refs.newSwiper.$swiper.slideTo(index, 0);
    }
  }
};
</script>
<style lang="scss" scoped>
/*最新资讯*/
.news-web {
  width: 1100px;
  padding: 50px;
  background: #fff;
  margin: 30px auto 70px;
}
.today-news {
  border-bottom: 1px solid #eaeced;
  padding-bottom: 18px;
}
.today-title {
  width: 156px;
  height: 145px;
  text-align: center;
  font-size: 26px;
  color: #fefefe;
  padding: 44px 48px 0;
  line-height: 35px;
  background: url(~@assets/images/newicon01.png) 0 0 no-repeat;
  background-size: cover;
  position: relative;
  float: left;
  margin: -13px 15px 0 0;
  &:before {
    content: "";
    width: 130px;
    height: 130px;
    display: block;
    position: absolute;
    left: 13px;
    top: 13px;
    background: url(~@assets/images/newicon02.png) 0 0 no-repeat;
    animation: dropdown 8s linear infinite;
  }
}

@-webkit-keyframes dropdown {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-o-keyframes dropdown {
  0% {
    -o-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes dropdown {
  0% {
    -webkit-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.today-con {
  a {
    color: #3d3938;
  }
  h1 {
    font-size: 30px;
    color: $ac;
    line-height: 40px;
    margin: 0 0 5px;
    font-weight: bold;
  }
}
.today-dec {
  @include ml(20px, 3);
}

/*推荐新闻*/
.recommended-news {
  margin-bottom: 30px;
}
.re-slider {
  width: 540px;
  float: left;
  position: relative;
  overflow: hidden;
  .renews-title {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80%;
    height: 64px;
    line-height: 64px;
    color: #fefefe;
    font-size: 18px;
    padding-left: 22px;
    @include ol();
    &:before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: url(~@assets/images/newicon03.png) 0 0 no-repeat;
      border-radius: 0px 0px 3px 3px;
      opacity: 0.4;
    }
  }

  .iban-pages {
    position: absolute;
    bottom: 25px;
    z-index: 2;
    border-radius: 20px;
    text-align: right;
    left: auto;
    margin-left: 0;
    right: 66px;
  }
}
.re-list {
  float: left;
  width: 460px;
  height:327px;
  overflow-y:auto;
  @include scrollbar();
  ul {
   
    
    li {
      margin-bottom: 1px;

      a {
        display: block;
        padding: 20px;
        background-color: #f2f2f2;
        color: #4e5a65;
        transition: all 0.3s;
        &:hover {
          color: $ac;
          background-color: #eaeced;
        }
      }
      h2 {
        font-weight: bold;
        margin-bottom: 8px;
      }
      p {
        @include ml(18px, 2);
      }
    }
  }
}

/*新闻列表*/
.pagenews-left {
  width: 286px;
  margin-right: 60px;
}
.comnew-title {
  color: $ac;
  font-size: 24px;
  margin-bottom: 8px;
}
.comnew-list {
  li {
    a {
      display: block;
      position: relative;
      font-size: 16px;
      @include ol();
      height: 30px;
      line-height: 30px;
      color: #4e5a65;
      &:before {
        content: "";
        width: 5px;
        height: 5px;
        background-color: #44a78d;
        display: inline-block;
        vertical-align: middle;
        border-radius: 50%;
        margin-right: 10px;
      }
      &:hover {
        font-weight: bold;
      }
    }
  }
}

.pagenews-right {
  margin-left: -60px;
  overflow: hidden;
  width: 712px;
  .item {
    float: left;
    padding-left: 60px;
    margin-bottom: 10px;
  }
}
.news-bar {
  &.bar-height:before {
    background: #a6acb1;
  }
}

.comnews-type-list {
  li {
    border-bottom: solid 1px #eaeced;
    a {
      display: block;
      height: 44px;
      line-height: 44px;
      @include ol();
      font-size: 16px;
      color: #4e5a65;
      &:hover {
        color: $ac;
      }
    }
    .date {
      display: block;
      float: right;
      margin-top: 8px;
      em {
        font-style: normal;
        border-radius: 3px;
        padding: 5px 4px;
        display: inline-block;
        line-height: 16px;
        margin-right: 8px;
      }
    }
  }
}

.yitype {
  ul li {
    em {
      border: solid 1px #44a78d;
      color: #44a78d;
    }
  }
}

.gjtype {
  ul li {
    em {
      border: solid 1px #00cbff;
      color: #00cbff;
    }
  }
}

.zctype {
  ul li {
    em {
      border: solid 1px #446ca7;
      color: #446ca7;
    }
  }
}

.gstype {
  ul li {
    em {
      border: solid 1px #f05926;
      color: #f05926;
    }
  }
}
</style>
