<template>
  <div>
    <!--index banner-->
    <div class="supplier">
      <Banner :bannerList="bannerList" />
      <div class="sup-category">
        <h3>品类</h3>
        <ul class="sup-ul">
          <li v-for="(item,index) in items" :key="index">
            <div class="category-one" :class="{'active':indexshow==index}" @click="subShow(index)">{{item.frist}}</div>
            <div class="category-two"  v-show="index===indexshow"  v-for="(subitem,i) in item.sublist" :key="i">
              <a
                href="javascript:;"
                class="sub-title" v-on:mouseover="showToggle(i)"
            v-on:mouseout="handleHide">{{subitem.title}}</a>
              <div class="category-three" v-show="i===isShow">
                <a href="javascript:;" v-for="(threeitem,j) in subitem.threelist" :key="j">{{threeitem.thtitle}}</a>
              </div>
            </div>
          </li>
          
        </ul>
      </div>
    </div>
    <div class="commonweb oh mb50">
      <Product-Recommend />
      <!--业务精选-->
      <Business-Select />
      <!--产品列表-->
      <Product-List />
      <!--分页-->
      <div class="layui-box">
        <div class="layui-laypage">
          <a href="javascript:;" class="layui-laypage-prev">上一页</a>
          <span class="layui-laypage-curr">
            <em>1</em>
          </span>
          <a href="javascript:;">2</a>
          <a href="javascript:;">3</a>
          <a href="javascript:;">4</a>
          <a href="javascript:;">5</a>
          <span>…</span>
          <a href="javascript:;" class="layui-laypage-next">下一页</a>
          <span class="layui-laypage-total">
            到第
            <input type="number" /> 页
            <button type="button" class="layui-laypage-btn">确定</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "@components/Banner";
import BusinessSelect from "@components/BusinessSelect";
import ProductRecommend from "@components/ProductRecommend";
import ProductList from "@components/ProductList";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Banner,
    ProductRecommend,
    BusinessSelect,
    ProductList,
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
      items: [
        {
          frist: "试剂",
          sublist: [
            {
              title: "一般治疗及重型、危重型病例治疗药品",
              threelist: [
                { thtitle: "洛匹那韦利托那韦片（盒）" },
                { thtitle: "抗菌药物" },
                { thtitle: "甲泼尼龙" },
                { thtitle: "糖皮质激素等经卫生健康" }
              ]
            },
            {
              title: "一般治疗及重型、危重型病例治疗药品",
              threelist: [
                { thtitle: "一般治疗及重型、危重型病例治疗药品" },
                { thtitle: "一般治疗及重型、危重型病例治疗药品" },
                { thtitle: "一般治疗及重型、危重型病例治疗药品" },
                { thtitle: "一般治疗及重型、危重型病例治疗药品" }
              ]
            }
          ]
        },
        {
          frist: "试剂",
          sublist: [
            {
              title: "一般治疗及重型、危重型病例治疗药品",
              threelist: [
                { thtitle: "洛匹那韦利托那韦片（盒）" },
                { thtitle: "抗菌药物" },
                { thtitle: "甲泼尼龙" },
                { thtitle: "糖皮质激素等经卫生健康" }
              ]
            },
            {
              title: "一般治疗及重型、危重型病例治疗药品",
              threelist: [
                { thtitle: "一般治疗及重型、危重型病例治疗药品" },
                { thtitle: "一般治疗及重型、危重型病例治疗药品" },
                { thtitle: "一般治疗及重型、危重型病例治疗药品" },
                { thtitle: "一般治疗及重型、危重型病例治疗药品" }
              ]
            }
          ]
        }
      ],
      newswiper: {
        direction: "vertical",
        autoplay: true
      },
      isShow:0,
      indexshow:0
    };
  },
  mounted: function () {
      // 避免第一个渲染的显示
      this.isShow = -1
    },
  methods: {
    showToggle: function(i) {
      this.isShow = i;
    },
    handleHide: function() {
      this.isShow = !this.isShow;
    },
    subShow:function(index){
     this.indexshow = index;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../assets/css/variables.scss";
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
