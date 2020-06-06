<template>
  <div class="mb50">
    <!--公司导航-->
    <div class="commonweb company-nav clearfix">
      <div class="company-left">
        <img :src="info.company_logo" alt />
        <h3 class="company-name">{{info.company_name}}</h3>
        <span class="collect-icon" @click="collect">
          <i class="icon iconfont iconxingxing" v-if="flag"></i>
          <i class="icon iconfont iconxingxing1" v-else></i>收藏
        </span>
      </div>
      <div class="company-right">
        <a href="javascript:;">公司简介</a>
        <a href="javascript:;">需求中心</a>
        <a href="javascript:;">公司资质</a>
        <a href="javascript:;">联系我们</a>
      </div>
    </div>
    <!--banner-->
    <div class="commonweb banner-wrap">
      <swiper class="index-banner" :options="swiperOption">
        <swiper-slide v-for="(item,index) in bannerList" :key="index">
          <a :href="item.href||'javascript:;'">
            <img :src="item.imgUrl" :alt="item.desc||''" />
            <!--<img src="@assets/images/banner.jpg" alt=""> -->
          </a>
        </swiper-slide>
        <div class="iban-pages" slot="pagination"></div>
      </swiper>
    </div>
    <div class="commonweb">
      <div class="company-profile" id="item1">
        <div class="company-img-wrap">
          <img v-bind:src="info.company_images" class="company-img" />
        </div>

        <div class="company-info-wrap">
          <div class="prodInfo company-info">
            <h4 class="deatils-title">
              企业简介
              <span class="sub-title">Company profile</span>
              <span class="bussness-code">组织机构代码:{{info.business_license_code}}</span>
            </h4>
            <div class="deatils-content">{{ info.company_introduce }}</div>
            <div class="company-label-wrap">
              <span class="company-label">企业主营：{{info.business_scope_cate}}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="prodInfo" id="item2">
        <h4 class="deatils-title">
          需求中心
          <span class="sub-title">Demand center</span>
          <ul class="need-type-switch">
            <li class="item" v-bind:class="{active:type==1}" @click="switchType(1)">采购订单</li>
            <li class="item" v-bind:class="{active:type==2}" @click="switchType(2)">销售订单</li>
            <li class="item" v-bind:class="{active:type==3}" @click="switchType(3)">委托订单</li>
          </ul>
        </h4>

        <div class="deatils-content">
          <!--订单-->
          <OrderList v-bind:list="list" v-if="total>0" />
          <Errormsg v-if="total==0" />

          <!--分页 -->
          <div class="layui-box" v-if="Math.ceil(total/page_size)>1">
            <Pagination
              v-bind:inputAllowed="true"
              v-bind:total="total"
              v-bind:size="page_size"
              v-bind:curent="page_index"
              @switch-page="switchPage"
            />
          </div>
        </div>
      </div>

      <div class="prodInfo" id="item3">
        <h4 class="deatils-title">
          企业资质
          <span class="sub-title">Company qualification</span>
        </h4>

        <div class="deatils-content">
          <ul class="img-list">
            <li class="img-list-item" v-for="src of qualifications" :key="src">
              <img v-bind:src="src" alt />
            </li>
          </ul>
        </div>
      </div>

      <div class="prodInfo" id="item4">
        <h4 class="deatils-title">
          联系我们
          <span class="sub-title">Company contact</span>
        </h4>

        <div class="deatils-content">
          <div class="company-contact">
            <span>联系人：{{info.contact_name||''}}</span>
          </div>
          <div class="company-contact">
            <span>电话：{{info.contact_phone||''}}</span>
            <span>QQ：{{info.qq||''}}</span>
            <span>微信：{{info.wechat||''}}</span>
            <span>邮箱：{{info.email||''}}</span>
          </div>
          <div class="company-contact">
            <span>地址：{{info.addr||''}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import Banner from "@components/Banner";
import OrderList from "@components/OrderList";
import Pagination from "@components/Pagination";
import Errormsg from "@components/Errormsg";

import { getUserInfo, getCollectInfo } from "@api/user";
import { getNeedList } from "@api/need";

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  components: {
    Banner,
    OrderList,
    Pagination,
    Errormsg,
    Swiper,
    SwiperSlide
  },
  props: {
    id: String //产品发布者 user_id
  },
  data() {
    return {
      info: {},
      total: 0,
      page_size: 5,
      page_index: 1,
      type: 1, //1 采购,2 销售,3 委托销售, 4 委托采购
      list: [],
      flag: true,
      collect_type: 1,
      iscollect: 0,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".iban-pages",
          clickable: true
        }
      }
    };
  },
  computed: {
    bannerList() {
      let images = this.info.company_transparency
        ? this.info.company_transparency.split(",")
        : [];

      //console.log(images);
      //   images = [
      //     "http://pic.90sjimg.com/design/00/37/59/73/d88d5422884f00b2d9c47e71cce48be0.jpg",
      //     "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2824904003,987247610&fm=11&gp=0.jpg",
      //     "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696244676,3361057726&fm=26&gp=0.jpg"
      //   ];

      return images.map(url => {
        return {
          imgUrl: url,
          href: ""
        };
      });
    },
    qualifications() {
      //console.log(this.info.qualifications)
      return (
        (this.info.qualifications && this.info.qualifications.split(",")) || []
      );
    }
  },
  methods: {
    switchPage(page_index) {
      this.page_index = page_index * 1;
      this.getNeeds();
    },
    switchType(type) {
      this.type = type * 1;
      this.page_index = 1;
      this.getNeeds();
    },

    async getUserInfo() {
      const res = await getUserInfo({ data: { user_id: this.id * 1 } });
      if (res.code == 200) {
        this.info = res.data.profiles.user_company;
        console.log(214,this.info);
      } else {
        this.$message({
          showClose: true,
          message: "企业信息获取失败",
          type: "error"
        });
      }
    },

    async getNeeds() {
      let params = {
        user_id: this.info.user_id,
        page_size: this.page_size,
        page_index: this.page_index,
        type: this.type
      };

      let res = await getNeedList({ data: params });
      if (res.code != 200) {
        this.$message({
          showClose: true,
          message: res.message,
          type: "error"
        });
      } else {
        let data = res.data;
        this.total = data.total;
        //this.list = data.list; 
        let lists= data.list;
        for (let i = 0; i < lists.length; i++) {
          //数组重组
            let serviceData = lists[i].service_cnname != null ? lists[i].service_cnname.split(',') : '';
            lists[i].service_cnname = serviceData;//得到服务类型数组
       
        let qualification = lists[i].qualification_icon != null ? lists[i].qualification_icon.split(',') : '';
         lists[i].qualification_icon = qualification;//得到资质类型数组

         let images = lists[i].images != null ? lists[i].images.split(',') : '';
					lists[i].images = images;//得到图片数组
        }
          this.list = lists;
      }
    },
    async collect() {
      this.flag = !this.flag;
      let params = {
        collect_id: this.id * 1,
        collect_type: this.collect_type
      };
      let res = await getCollectInfo({ data: params });
      if (res.code == 200) {
        if (this.flag == false) {
          this.$message({
            showClose: true,
            message: "收藏成功",
            type: "success"
          });
        } else {
          this.$message({
            showClose: true,
            message: "取消收藏",
            type: "success"
          });
        }
      } else {
        this.$message({
          showClose: true,
          message: res.message,
          type: "error"
        });
      }
    }
  },
  async created() {
    await this.getUserInfo();
    await this.getNeeds();
    this.iscollect = this.$route.params.collect;
    if (this.iscollect == "1") {
      this.flag = !this.flag;
    }
  }
};
</script>

<style lang="scss" scoped>
.company-nav {
  background: #44a78d;
  padding: 20px 30px;
  color: #fff;
  margin: 40px auto 35px;
}
.company-left {
  float: left;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #fff;
  }
  .company-name {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    font-size: 24px;
    position: relative;
    &:after {
      content: "";
      width: 2px;
      height: 30px;
      display: inline-block;
      background: #fff;
      vertical-align: -6px;
      margin-left: 20px;
    }
  }
}
.collect-icon {
  margin-left: 20px;
  display: inline-block;
  vertical-align: middle;

  i {
    font-size: 20px;
    margin-right: 5px;
    vertical-align: middle;
  }
}
.company-right {
  float: right;
  padding-top: 8px;
  a {
    font-size: 16px;
    color: #fff;
    padding: 0 0 10px;
    margin: 0 10px;
    position: relative;
    transition: all 0.3s;
    &:after {
      display: block;
      content: "";
      height: 4px;
      width: 100%;
      background: #fff;
      position: absolute;
      bottom: 0;
      left: 0;
      opacity: 0;
      transition: all 0.3s;
    }
    &:active,
    &:hover {
      font-weight: bold;
      &:after {
        opacity: 1;
      }
    }
  }
}
.iconxingxing1 {
  color: #fff784;
}
.banner-wrap {
  margin-bottom: 40px;
}

.company-profile {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  .company-img-wrap {
    width: 300px;
    height: 300px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    .company-img {
      max-width: 300px;
      max-height: 300px;
    }
  }
  .company-info-wrap {
    padding-top: 20px;
    padding-left: 20px;
    flex: 1;

    .company-info {
      height: 280px;
    }
  }
}

.prodInfo {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  .deatils-title {
    display: flex;
    align-items: baseline;
    color: $ac;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 18px;
    span {
      font-weight: normal;
      font-size: 18px;
      margin-left: 20px;
    }
    .sub-title {
      flex: 1;
    }

    .need-type-switch {
      display: flex;
      align-items: baseline;
      .item {
        margin-left: 25px;
        font-size: 18px;
        font-weight: lighter;
        color: $fontColor;
        cursor: default;

        &.active {
          font-size: 24px;
          font-weight: 700;
          color: $ac;
        }
      }
    }
  }
  .deatils-content {
    flex: 1;

    img {
      max-width: 100%;
    }
  }
  .company-label-wrap {
    .company-label {
      display: inline-block;
      line-height: 28px;
      font-size: 12px;
      padding: 0 10px;
      margin-right: 10px;
      background-color: $ac;
      color: $bgwhite;

      @include default-radius;
    }
  }

  .img-list {
    display: flex;

    li {
      margin-right: 20px;
      width: 280px;
      background: #fff;
      //flex:1;
      img{
        width:280px;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }

  .company-contact {
    margin-bottom: 10px;
    span {
      margin-right: 40px;
    }

    &:last-child {
      margin-bottom: 150px;
    }
  }
}

.index-banner {
  position: relative;
  overflow: hidden;
  .swiper-slide {
    display: block;
    width: 100%;
    position: relative;
    background: #fff;
    img {
      width: auto;
      max-width: 400px;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      height: 400px;
    }
  }
}

.iban-pages {
  text-align: center;
  position: absolute;
  width: 70px;
  height: 15px;
  left: 50%;
  margin-left: -35px;
  bottom: 25px;
  z-index: 2;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
}
</style>
