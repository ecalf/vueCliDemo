<template>
  <div class="commonweb news-web">
    <div class="today-news clearfix">
      <div class="today-title">今日要闻</div>
      <div class="oh today-con">
        <div v-for="item in todayList" :key="item.id">
        <router-link :to="'/news/detail/'+item.id">
          <h1>{{item.title}}</h1>
          <p
            class="today-dec">{{item.description}}</p>
        </router-link>
        </div>
      </div>
    </div>
    <!--推荐新闻-->
    <div class="recommended-news clearfix">
      <div class="re-slider">
        <swiper :options="newSwiper" ref="newSwiper">
          <swiper-slide v-for="item in newslist" :key="item.id">
            <router-link :to="'/news/detail/'+item.id">
              <img :src="'https://admin.scm.wanheglobal.com/'+item.image" alt />
              <h3 class="renews-title">{{item.title}}</h3>
            </router-link>
          </swiper-slide>
        </swiper>

        
        <div class="iban-pages"></div>
      </div>
      <div class="re-list">
        <ul>
          <li v-for="(item,index) in newslist" :key="item.id" @click="toSlide(index)">
            <router-link :to="'/news/detail/'+item.id">
              <h2 class="fs16">{{item.title}}</h2>
              <p>{{item.description}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!--新闻列表-->
    <div class="pagenews-wrap clearfix">
      <div class="pagenews-left fl">
        <h3 class="comnew-title">疫情新闻</h3>
        <recommendedList :list="yqNewsLlist"></recommendedList>
      </div>
      <div class="pagenews-right fl clearfix">
        <div class="item">
          <h3 class="comnew-title">国际新闻</h3>
          <recommendedList :list="gjNewsLlist"></recommendedList>
        </div>
        <div class="item">
          <h3 class="comnew-title">行业新闻</h3>
          <recommendedList :list="hyNewsLlist"></recommendedList>
        </div>
        <div class="item">
          <h3 class="comnew-title">政策新闻</h3>
          <recommendedList :list="zcNewsLlist"></recommendedList>
        </div>
        <div class="item">
          <h3 class="comnew-title">公司新闻</h3>
          <recommendedList :list="gsNewsLlist"></recommendedList>
        </div>
      </div>
    </div>
    <!--导航-->
    <div class="bar-height news-bar">
      <div class="tab-bar">
        <a
          href="javascript:;"
          :class="{active:index==curTabIndex}"
          @click="switchTab(item,index)"
          v-for="(item,index) in newsnav"
          :key="index"
        >{{item.cate_name}}</a>
      </div>
    </div>
    <newList :list="list"></newList>
  </div>
</template>
<script>
import recommendedList from "../components/recommendedList";
import newList from "../components/newList";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import { getNewsList } from "@api/news";
export default {
  components: {
    Swiper,
    SwiperSlide,
    recommendedList,
    newList
  },
  data() {
    return {
     
      newSwiper: {
        pagination: {
          el: ".iban-pages",
          clickable: true
        }
      },
      newsnav: [
        { cate_name: "疫情新闻", id: 0 },
        { cate_name: "国际新闻", id: 2 },
        { cate_name: "政策新闻", id: 3 },
        { cate_name: "行业新闻", id: 4 },
        { cate_name: "公司新闻", id: 5 }
      ],
      list: [], //新闻列表
      yqNewsLlist: [], //疫情推荐
      gjNewsLlist: [], //国际推荐
      hyNewsLlist: [], //行业推荐
      zcNewsLlist: [], //政策推荐
      gsNewsLlist: [], //公司推荐      
      todayList:[],//今日要闻
       newslist:[],//头条新闻
      curTabIndex: 0,
      cate_name: "疫情新闻" //传参
    };
  },
  methods: {
    toSlide(index) {
      this.$refs.newSwiper.$swiper.slideTo(index, 0);
    },
    switchTab(item, index) {
      this.curTabIndex = index;
      this.cate_name = item.cate_name;
      this.getNews();
    },
    async getNews() {
      const res = await getNewsList({
        data: { cate_name: this.cate_name, tag_name: "" }
      });
      if (res.code == 200) {
        //console.log(res);
        this.list = res.data.data;
        //console.log(this.list);
      }
    },
    async getyqNews() {//疫情推荐
      const res = await getNewsList({
        data: { cate_name: "疫情新闻", tag_name: "推荐" }
      });
      if (res.code == 200) {
        this.yqNewsLlist = res.data.data;
      }
    },
    async getgjNews() {//国际推荐
      const res = await getNewsList({
        data: { cate_name: "国际新闻", tag_name: "推荐" }
      });
      if (res.code == 200) {
        this.gjNewsLlist = res.data.data;
      }
    },
    async gethyNews() {//行业推荐
      const res = await getNewsList({
        data: { cate_name: "行业新闻", tag_name: "推荐" }
      });
      if (res.code ==200) {
        this.hyNewsLlist = res.data.data;
      }
    },
    async getzcNews() {//政策推荐
      const res = await getNewsList({
        data: { cate_name: "政策新闻", tag_name: "推荐" }
      });
      if (res.code == 200) {
        this.zcNewsLlist = res.data.data;
      }
    },
     async getgsNews() {//公司推荐
      const res = await getNewsList({
        data: { cate_name: "公司新闻", tag_name: "推荐" }
      });
      if (res.code == 200) {
        this.gsNewsLlist = res.data.data;
      }
    },
     async getjrNews() {//今日要闻
      const res = await getNewsList({
        data: { cate_name: "今日要闻", tag_name: "" }
      });
      if (res.code == 200) {
        this.todayList = res.data.data;
      }
    },
    async gettoutNews() {//头条新闻
      const res = await getNewsList({
        data: { cate_name: "头条新闻", tag_name: "" }
      });
      if (res.code == 200) {
        this.newslist = res.data.data;
      }
    }
  },
  created() {
    this.getNews();
    this.getyqNews();
    this.getgjNews();
    this.gethyNews();
    this.getzcNews();
    this.getgsNews();
    this.getjrNews();
    this.gettoutNews();
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
  height: 327px;
  overflow-y: auto;
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
    width:50%;
  }
}
.news-bar {
  &.bar-height:before {
    background: #a6acb1;
  }
}
</style>
