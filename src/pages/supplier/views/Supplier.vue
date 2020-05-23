<template>
  <div>
    <!--index banner-->
    <div class="supplier">
      <Banner :bannerList="bannerList" />
      <div class="sup-category">
        <h3>品类</h3>
        <ul class="sup-ul">
          <li v-for="(item,index) in items" :key="index">
            <div
              class="category-one"
              :class="{'active':indexshow==index}"
              @click="subShow(index)"
            >{{item.frist}}</div>
            <transition name="sub-comments">
              <div class="ani-height">
                <div
                  class="category-two"
                  v-show="index===indexshow"
                  v-for="(subitem,i) in item.sublist"
                  :key="i"
                  v-on:mouseover="showToggle(i)"
                  v-on:mouseout="handleHide"
                >
                  <a href="javascript:;" class="sub-title">{{subitem.title}}</a>
                  <div class="category-three" v-show="i===isShow">
                    <a
                      href="javascript:;"
                      v-for="(threeitem,j) in subitem.threelist"
                      :key="j"
                    >{{threeitem.thtitle}}</a>
                  </div>
                </div>
              </div>
            </transition>
          </li>
        </ul>
      </div>
    </div>
    <div class="commonweb oh mb50">

      <ProductRecommend />

      <!--业务精选-->
      <BusinessSelect />

      <div class="other-condition">
        <div class="condition-box">
          <a href>综合排序</a>
          <a href class="active">
            剩余时间
            <i></i>
          </a>
          <a href>
            价格
            <i></i>
          </a>
          <form class="condsearch-box">
            <input type="text" placeholder />
            <button>搜索</button>
          </form>
        </div>
      </div>


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
                { thtitle: "α-干扰素" },
                { thtitle: "洛匹那韦利托那韦片（盒）" },
                { thtitle: "抗菌药物" },
                { thtitle: "甲泼尼龙" },
                { thtitle: "糖皮质激素等经卫生健康" },
                { thtitle: "药监部门依程序确认治疗有效的药品和疫苗" }
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
      isShow: 0,
      indexshow: 0
    };
  },
  mounted: function() {
    // 避免第一个渲染的显示
    this.isShow = -1;
    this.indexshow = -1;
  },
  methods: {
    showToggle: function(i) {
      this.isShow = i;
    },
    handleHide: function() {
      this.isShow = !this.isShow;
    },
    subShow: function(index) {
      this.indexshow = index;
    }
  }
};
</script>
<style lang="scss" scoped>
/*分类*/
.supplier {
  position: relative;
}
.sup-category {
  position: absolute;
  width: 258px;
  left: 50%;
  margin-left: -600px;
  top: 0;
  height: 100%;
  background: #27303e;
  z-index: 99;
  color: #fefefe;
  padding: 15px 0;
  h3 {
    font-size: 16px;
    font-weight: bold;
    padding: 0 20px 14px;
  }
}
.sup-ul {
  li {
    .category-one {
      padding: 8px 20px;
      cursor: pointer;
      position: relative;
      &:after {
        content: "";
        display: block;
        position: absolute;
        top: 10px;
        right: 15px;
        width: 8px;
        height: 8px;
        border-top: 1px solid #fefefe;
        border-right: 1px solid #fefefe;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
      }
      &.active {
        &:after {
          top: 15px;
          transform: rotate(-45deg);
          -webkit-transform: rotate(-45deg);
          -ms-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
        }
      }
    }
    .sub-title {
      display: block;
      color: #fefefe;
      padding: 0 10px 0 30px;
      height: 32px;
      line-height: 32px;
      @include ol();
    }
  }
}
.category-two {
  position: relative;
  font-size: 12px;
  &:hover {
    .sub-title {
      color: $ac;
      background: #fff;
    }
  }
}
.category-three {
  position: absolute;
  top: 0;
  left: 258px;
  width: 512px;
  background: #fff;
  color: #4e5a65;
  padding: 12px 20px;
  a {
    display: inline-block;
    padding: 4px 5px;
    &:hover {
      color: $ac;
    }
  }
}

.sub-comments-leave-active,
.sub-comments-enter-active {
  transition: max-height 0.5s linear;
}
.sub-comments-enter,
.sub-comments-leave-to {
  max-height: 0;
  opacity: 0;
}
.condition-box{
  background:#fff;
  padding:10px;
}
</style>
