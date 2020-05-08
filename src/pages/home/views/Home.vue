<template>
  <div>
    <!--index banner-->
    <Banner :bannerList="bannerList" />
    <!--推荐新闻-->
    <div class="indexnews-wrap">
      <div class="commonweb">
        <div class="news-box">
          <span class="news-title fl">最新资讯</span>
          <swiper class="news-slider" :options="newswiper">
            <swiper-slide>
              <a href class="title">深圳企业最新公告为深圳企业最新公告为深圳企业最新公告为深圳企业最新公告为深圳企业最新公告为深圳企业最新公告为最新公告为最新最新最</a>
              <a href class="more">查看</a>
            </swiper-slide>
            <swiper-slide>
              <a href class="title">深圳企业最新公告为深圳企业最新公告为深圳企业最新公告为深圳企业最新公告为深圳企业最新公告为深圳企业最新公告为最新公告为最新最新最</a>
              <a href class="more">查看</a>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>

    <div class="commonweb">
      <!--疫情数据-->
      <div class="epidemic-box">
        <div class="epidemic-title">
          <span class="abroad-title fr">
            国外疫情
            <img src="@assets/images/inicon2.png" />
          </span>
          <span>
            <img src="@assets/images/inicon1.png" />国内疫情
          </span>
        </div>
        <ul class="epidemic-status">
          <li class="color-red">
            <p>
              较上日
              <em>{{items.confirmedIncr}}</em>
            </p>
            <strong>{{items.confirmedCount}}</strong>
            <p>累计确诊</p>
          </li>
          <li class="color-green">
            <p>
              较上日
              <em>{{items.curedIncr}}</em>
            </p>
            <strong>{{items.curedCount}}</strong>
            <p>累计治愈</p>
          </li>
          <li class="color-gary">
            <p>
              较上日
              <em>{{items.deadIncr}}</em>
            </p>
            <strong>{{items.deadCount}}</strong>
            <p>累计死亡</p>
          </li>
          <li class="color-shorange">
            <p>
              较上日
              <em>{{items.currentConfirmedIncr}}</em>
            </p>
            <strong>{{items.currentConfirmedCount}}</strong>
            <p>现有确诊</p>
          </li>
          <li class="color-violet">
            <p>
              较上日
              <em>+39</em>
            </p>
            <strong>84289</strong>
            <p>无症状感染者</p>
          </li>
          <li class="color-orange">
            <p>
              较上日
              <em>+39</em>
            </p>
            <strong>84289</strong>
            <p>境外输入</p>
          </li>
        </ul>
      </div>
      <!--业务精选-->
      <div class="column-business oh">
        <div class="column-title clearfix">
          <div class="right-msg fr">
            <span>总业务数量：1200</span>
            <a href class="release-btn">
              <i></i>我要发布
            </a>
          </div>
          <h3 class="business-title fs-bule">
            <i class="iconfont iconzu304" style="background-color:#44A78D;"></i>业务精选
            <em>优选</em>
          </h3>
        </div>

        <Business-Select />
      </div>
      <!--产品列表-->
      <Product-List />

      <div class="adver-area">
        <a href>
          <img src="@assets/images/adv_img3.png" alt />
        </a>
      </div>
      <!--采购订单-->
      <div class="m-column-box">
        <div class="column-title clearfix">
          <div class="right-msg fr">
            <span>总业务数量：1200</span>
            <a href class="release-btn">
              <i></i>我要发布
            </a>
          </div>
          <h3 class="business-title fs-gray">
            <i class="iconfont iconzu304" style="background-color:#4e5a65;"></i>采购订单
          </h3>
        </div>
        <Order-list />
        <a href class="purchase-more">查看更多</a>
      </div>

      <div class="adver-area">
        <a href>
          <img src="@assets/images/adv_img2.png" alt />
        </a>
      </div>

      <!--销售订单-->
      <div class="m-column-box">
        <div class="column-title clearfix">
          <div class="right-msg fr">
            <span>总业务数量：1200</span>
            <a href class="release-btn">
              <i></i>我要发布
            </a>
          </div>
          <h3 class="business-title fs-orange">
            <i class="iconfont iconzu304" style="background-color:#f05926;"></i>销售订单
          </h3>
        </div>
        <Order-list />
        <a href class="purchase-more">查看更多</a>
      </div>

      <div class="adver-area">
        <a href>
          <img src="@assets/images/adv_img1.png" alt />
        </a>
      </div>
      <!--成功订单-->
      <div class="m-column-box">
        <div class="column-title clearfix">
          <h3 class="business-title fs-green">
            <i class="iconfont iconzu304" style="background-color:#05544a;"></i>成功订单
          </h3>
        </div>
        <Success-Order />
      </div>

      <!--合作伙伴-->
      <div class="m-column-box">
        <div class="column-title clearfix">
          <h3 class="business-title fs-pink">
            <i class="iconfont iconzu304" style="background-color:#ca3f81;"></i>合作品牌
          </h3>
          <Partner />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "@components/Banner";
import BusinessSelect from "@components/BusinessSelect";
import ProductList from "@components/ProductList";
import OrderList from "@components/OrderList";
import SuccessOrder from "@components/SuccessOrder";
import Partner from "../components/Partner";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import { epidemicList } from "@api/api";
export default {
  components: {
    Banner,
    BusinessSelect,
    ProductList,
    OrderList,
    SuccessOrder,
    Partner,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      bannerList: [
        { imgUrl: "/img/banner.cfe483c5.jpg", href: "/ucenter/login" },
        { imgUrl: "/img/banner.cfe483c5.jpg", href: "/ucenter/login" },
        { imgUrl: "/img/banner.cfe483c5.jpg", href: "/ucenter/login" }
      ],
     items:[],
      newswiper: {
        direction: "vertical",
        autoplay: true
      }, 
    };
  },
  methods: {
    getEpidemic() {
      epidemicList({}).then(res => {
        this.items=res.newslist[0].desc;
      console.log(this.items);
      });
    }
  },
  mounted: function() {
    this.getEpidemic();
  }
};
</script>
<style lang="scss" scoped>
/*首页新闻板块*/
.indexnews-wrap {
  background: #fff;
  padding: 10px 0;
  line-height: 30px;
}

.news-slider {
  position: relative;
  overflow: hidden;
  font-size: 16px;
  height: 30px;
  .swiper-slide {
    padding-right: 60px;
    position: relative;
    width: 1097px;
  }
  .title {
    display: block;
    height: 30px;
    line-height: 30px;
    @include ol();

    &:hover {
      color: $ac;
    }
  }

  .more {
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    height: 30px;
    line-height: 30px;
    color: $ac;

    &:before {
      content: "";
      width: 1px;
      height: 20px;
      background: $ac;
      display: inline-block;
      margin-right: 12px;
      vertical-align: middle;
    }
  }
}

.news-title {
  display: block;
  font-size: 22px;
  color: $ac;
  margin-right: 15px;
}

/*国内疫情*/
.epidemic-box {
  margin: 30px auto;
}

.epidemic-status {
  display: table;
  width: 100%;
  background-color: $bgwhite;
  padding: 25px 0;

  li {
    display: table-cell;
    width: 1%;
    vertical-align: middle;
    text-align: center;
    font-size: 16px;
    border-right: 1px solid #f2f2f2;

    &:last-child {
      border-right: 0;
    }

    em {
      font-style: normal;
    }

    strong {
      display: block;
      font-size: 32px;
      line-height: 1.4;
    }
  }
}

.epidemic-title {
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 0 25px;
  background: $ac;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 25px;
  background: url(~@assets/images/home_titlbg.png) 0 0 no-repeat;
  cursor: pointer;
  img {
    height: 20px;
    margin-right: 6px;
  }

  .abroad-title {
    color: $ac;
    
    img {
      margin-left: 5px;
    }
  }
}

.color-red {
  em,
  strong {
    color: #cc1e1e;
  }
}

.color-green {
  em,
  strong {
    color: #178b50;
  }
}

.color-gary {
  em,
  strong {
    color: #4e5a65;
  }
}

.color-shorange {
  em,
  strong {
    color: #f23a3b;
  }
}

.color-violet {
  em,
  strong {
    color: #ca3f81;
  }
}

.color-orange {
  em,
  strong {
    color: #f05926;
  }
}

/*业务精选-标题*/
.right-msg {
  font-size: 16px;
  padding-top: 18px;
  .release-btn {
    margin-left: 20px;
    font-weight: bold;
    i {
      display: inline-block;
      width: 17px;
      height: 17px;
      background-color: #3d3938;
      vertical-align: -2px;
      border-radius: 50%;
      margin-right: 5px;
      position: relative;
      &:before,
      &:after {
        content: "";
        width: 1px;
        height: 10px;
        background: #fff;
        position: absolute;
        left: 8px;
        top: 4px;
      }
      &:after {
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transform: rotate(90deg);
      }
    }
    &:hover {
      color: $ac;

      i {
        background-color: $ac;
      }
    }
  }
}
.column-title {
  margin-bottom: 16px;
  h3 {
    font-size: 30px;
    font-weight: bold;
    color: #4e5a65;
    i {
      width: 30px;
      height: 30px;
      line-height: 30px;
      display: inline-block;
      border-radius: 50%;
      vertical-align: 4px;
      margin-right: 5px;
      color: #fff;
      text-align: center;
    }
    em {
      display: inline-block;
      vertical-align: 18px;
      margin-left: 4px;
      font-size: 13px;
      font-style: normal;
      width: 38px;
      text-align: center;
      line-height: 20px;
      height: 21px;
      color: #fff;
      background: url(~@assets/images/inicon3.png) 0 0 no-repeat;
    }
  }
}

/*业务精选-标题 end*/

.adver-area {
  a {
    display: block;
  }
  img {
    display: block;
    width: 100%;
  }
}
/*采购订单*/
.m-column-box {
  margin: 30px 0;
  padding: 25px;
  background: #fff;
}
.purchase-more {
  display: block;
  margin-top: 12px;
  text-align: right;
  color: #3d3938;
  font-size: 16px;
}
</style>
