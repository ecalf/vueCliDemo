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
            <swiper-slide v-for="item in newslist" :key="item.id">
              <router-link :to="'/news/detail/'+item.id" class="title">{{item.title}}</router-link>
              <router-link :to="'/news/detail/'+item.id" class="more">查看</router-link>
            </swiper-slide>
          
          </swiper>
        </div>
      </div>
    </div>

    <div class="commonweb">
      <!--疫情数据-->
      <div class="epidemic-box">
        <div class="epidemic-title" :class="{'active':show===1}">
          <span class="abroad-title fr" @click="show=1">
            世界疫情
            <i class="iconfont iconyuyinbobao"></i>
          </span>
          <span @click="show=0">
             <i class="iconfont iconlaba"></i> 国内疫情
          </span>
        </div>
        <ul class="epidemic-status" v-show="show===0">
          <li class="color-red">
            <p>
              较上日
              <em>{{yqdata.lastchinaConfirm}}</em>
            </p>
            <strong>{{yqdata.chinaConfirm}}</strong>
            <p>累计确诊</p>
          </li>
          <li class="color-green">
            <p>
              较上日
              <em>{{yqdata.lastchindHeal}}</em>
            </p>
            <strong>{{yqdata.chindHeal}}</strong>
            <p>累计治愈</p>
          </li>
          <li class="color-gary">
            <p>
              较上日
              <em>{{yqdata.lastchinaDead}}</em>
            </p>
            <strong>{{yqdata.chinaDead}}</strong>
            <p>累计死亡</p>
          </li>
          <li class="color-shorange">
            <p>
              较上日
              <em>{{yqdata.lastchindstoreConfirm}}</em>
            </p>
            <strong>{{yqdata.chindstoreConfirm}}</strong>
            <p>现有确诊</p>
          </li>
          <li class="color-violet">
            <p>
              较上日
              <em>{{yqdata.lastchindSuspect}}</em>
            </p>
            <strong>{{yqdata.chindSuspect}}</strong>
            <p>现存疑似人数</p>
          </li>
          <li class="color-orange">
            <p>
              较上日  
              <em>{{yqdata.lastchindInput}}</em>
            </p>
            <strong>{{yqdata.chindInput}}</strong>
            <p>境外输入</p>
          </li>
        </ul>
        <ul class="epidemic-status" v-show="show===1">
          <li class="color-red">
            <p>
              较上日
              <em>{{yqdata.lastabroadConfirm}}</em>
            </p>
            <strong>{{yqdata.abroadConfirm}}</strong>
            <p>累计确诊</p>
          </li>
          <li class="color-green">
            <p>
              较上日
               <em>{{yqdata.lastabroadstoreConfirm}}</em>
            </p>
            <strong>{{yqdata.abroadstoreConfirm}}</strong>
            <p>现有确诊</p>
          </li>
          <li class="color-gary">
            <p>
              较上日
               <em>{{yqdata.lastabroadDead}}</em>
            </p>
            <strong>{{yqdata.abroadDead}}</strong>
            <p>累计死亡</p>
          </li>
          <li class="color-shorange">
            <p>
              较上日
               <em>{{yqdata.lastabroadheal}}</em>
            </p>
            <strong>{{yqdata.abroadheal}}</strong>
            <p>累计治愈</p>
          </li>
        </ul>
      </div>
      <!--业务精选-->
      <div class="column-business oh">
        <div class="column-title clearfix">
          <div class="right-msg fr">
            <span>总业务数量：{{selectTotal}}</span>
            <a href="/publish/sell" class="release-btn">
              <i></i>我要发布
            </a>
          </div>
          <h3 class="business-title fs-bule">
            <i class="iconfont iconzu304" style="background-color:#44A78D;"></i>业务精选
            <em>优选</em>
          </h3>
        </div>
        <BusinessSelect :kindMask="kindMask" :kindRespirator="kindRespirator" />
      </div>
      <!--产品列表-->
      <ProductList :productList="productList" />
      <div class="promore-btn"><a href="/product">查看更多</a></div>  

      <div class="adver-area" v-if="advbannerList.length>0">
        <router-link :to="advbannerList[0].url">
          <img :src="'https://admin.scm.wanheglobal.com/'+advbannerList[0].image" :alt="advbannerList[0].description||''" />
         </router-link>
      </div>

      
      <!--采购订单-->
      <div class="m-column-box">
        <div class="column-title clearfix">
          <div class="right-msg fr">
            <span>总业务数量：{{purchaseTotal}}</span>
            <a href="/publish/buy" class="release-btn">
              <i></i>我要发布
            </a>
          </div>
          <h3 class="business-title fs-gray">
            <i class="iconfont iconzu304" style="background-color:#4e5a65;"></i>采购订单
          </h3>
        </div>
        <Order-list :list="purchaseList" />
        <a href="/tradhall" class="purchase-more">查看更多</a>
      </div>

    <div class="adver-area" v-if="advbannerList[1]">
        <router-link :to="advbannerList[1].url">
          <img :src="'https://admin.scm.wanheglobal.com/'+advbannerList[1].image" :alt="advbannerList[1].description||''" />
         </router-link>   
      </div>

      <!--销售订单-->
      <div class="m-column-box">
        <div class="column-title clearfix">
          <div class="right-msg fr">
            <span>总业务数量：{{buyTotal}}</span>
            <a href="/publish/sell" class="release-btn">
              <i></i>我要发布
            </a>
          </div>
          <h3 class="business-title fs-orange">
            <i class="iconfont iconzu304" style="background-color:#f05926;"></i>销售订单
          </h3>
        </div>
        <Order-list :list="buyList"  />
        <a href="/tradhall" class="purchase-more">查看更多</a>
      </div>

       <div class="adver-area" v-if="advbannerList[2]">
        <router-link :to="advbannerList[2].url">
          <img :src="'https://admin.scm.wanheglobal.com/'+advbannerList[2].image" :alt="advbannerList[2].description||''" />
         </router-link>   
      </div>
      <!--成功订单-->
      <!-- <div class="m-column-box">
        <div class="column-title clearfix">
          <h3 class="business-title fs-green">
            <i class="iconfont iconzu304" style="background-color:#05544a;"></i>成功订单
          </h3>
        </div>
        <SuccessOrder />
      </div> -->

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
import { abroadList } from "@api/common";
import { getNeedList } from "@api/need";
import { getNewsList,getBannerList } from "@api/news";
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
      bannerList:[],
      newslist:[],
      items: [],
      abroadsItems: [],
      productList: [],
      kindMask:[],//口罩分类
      kindRespirator:[],//呼吸机分类
      purchaseList:[],//采购订单
      buyList:[],//销售订单
      advbannerList:[],
      selectTotal: 0,//业务精选总数量
      purchaseTotal:0,//采购订单总数量
      buyTotal:0,
      page_size: 10,
      page_index: 1,
      type: 1, //type 1 发布采购 2 发布销售 3 委托销售 4委托采购 5官网推荐'
      newswiper: {
        direction: "vertical",
        autoplay: true
      },
      show: 0,
      yqdata:{
        abroadConfirm:0,//海外累计确诊人数
        abroadstoreConfirm:0,//现有确诊人数
        abroadDead:0,//海外死亡人数
        abroadheal:0,//海外现有治愈人数
        lastabroadConfirm:0,//较上日海外累计确诊人数
        lastabroadstoreConfirm:0,//较上日现有确诊人数
        lastabroadDead:0,//较上日海外死亡人数
        lastabroadheal:0,//海外现有治愈人数
        chinaConfirm:0,//中国确诊人数
        chinaDead:0,//中国死亡人数
        chindHeal:0,//中国治愈人数
        chindInput:0,//中国境内输入人数
        chindSuspect:0,//中国疑似人数
        chindstoreConfirm:0,//现有确诊人数
        lastchinaConfirm:0,//中国确诊人数
        lastchinaDead:0,//中国死亡人数
        lastchindHeal:0,//中国治愈人数
        lastchindInput:0,//中国境内输入人数
        lastchindSuspect:0,//中国疑似人数
        lastchindstoreConfirm:0,//现有确诊人数
      }
    };
  },
  methods: {
    async getEpidemic() {
      // let epidemic = await epidemicList(); //国内疫情
      // this.items = epidemic.newslist[0].desc;

      let res = await abroadList(); //国外疫情
      let hwlist=res.data.areaTree;//海外数据
      let chinalist=res.data.chinaTotal;
    
        this.yqdata.chinaConfirm=chinalist.total.confirm,//中国确诊人数
        this.yqdata.chinaDead=chinalist.total.dead,//中国死亡人数
        this.yqdata.chindHeal=chinalist.total.heal,//中国治愈人数
        this.yqdata.chindInput=chinalist.total.input,//中国境内输入人数
        this.yqdata.chindSevere=chinalist.total.severe,//中国重症人数
        this.yqdata.chindSuspect=chinalist.total.suspect//中国疑似人数
        this.yqdata.chindstoreConfirm=chinalist.total.confirm-chinalist.total.dead-chinalist.total.heal;//中国现有确诊人数

        this.yqdata.lastchinaConfirm=chinalist.today.confirm,//中国确诊人数
        this.yqdata.lastchinaDead=chinalist.today.dead,//中国死亡人数
        this.yqdata.lastchindHeal=chinalist.today.heal,//中国治愈人数
        this.yqdata.lastchindInput=chinalist.today.input,//中国境内输入人数
        this.yqdata.lastchindSevere=chinalist.today.severe,//中国重症人数
        this.yqdata.lastchindSuspect=chinalist.today.suspect//中国疑似人数
        this.yqdata.lastchindstoreConfirm=chinalist.total.storeConfirm;//中国现有确诊人数
          for(let i=0;i<hwlist.length;i++){
          this.yqdata.abroadConfirm +=hwlist[i].total.confirm;//海外累计确诊人数
          this.yqdata.abroadstoreConfirm +=hwlist[i].total.confirm-hwlist[i].total.heal-hwlist[i].total.dead-this.yqdata.chindstoreConfirm;//现有确诊人数
          this.yqdata.abroadDead +=hwlist[i].total.dead;//海外死亡人数
          this.yqdata.abroadheal +=hwlist[i].total.heal;//海外现有治愈人数
          this.yqdata.lastabroadConfirm +=hwlist[i].today.confirm;//较上日海外累计确诊人数
          this.yqdata.lastabroadstoreConfirm +=hwlist[i].today.storeConfirm;//较上日现有确诊人数
          this.yqdata.lastabroadDead +=hwlist[i].today.dead;//较上日海外死亡人数
          this.yqdata.lastabroadheal +=hwlist[i].today.heal;//海外现有治愈人数     
        
      }
    },
    async getBanner(){
       const res = await getBannerList({ data:{ad_type_name:'首页' }});
       if(res.code == 200){
         //console.log(res);
        this.bannerList=res.data;
       }   
    },
     async getAdvBanner(){
       const res = await getBannerList({ data:{ad_type_name:'首页广告位' }});
       if(res.code == 200){
        // console.log(res);
        this.advbannerList=res.data;
        console.log(this.advbannerList[0].image);
        

       }   
    },
    async getProductList(params) {//列表推荐
      params = params || {
        type:5,
        page_size:10,
        page_index:1,
        keyword: ""
      };
      const res = await getNeedList({ data: params });
      if (res.code == 200) {
        let lists=res.data.list;
        this.selectTotal = res.data.total;

       for(let i=0;i<lists.length;i++){//数组重组
         let serviceData = lists[i].service_cnname != null ? lists[i].service_cnname.split(',') : '';
            lists[i].service_cnname = serviceData;//得到服务类型数组
     
         let images = lists[i].images != null ? lists[i].images.split(',') : '';
					lists[i].images = images;//得到图片数组
       }
        this.productList = lists;
      } else {
        this.$message({
          showClose: true,
          message: res.message,
          type: "error"
        });
      }
    },
     async getMaskList(params) {//口罩分类
      params = params || {
        page_size:4,
        page_index:1,
        keyword: "",
        kind_id:1,//口罩类
      };
      const res = await getNeedList({ data: params });
      if (res.code == 200) {
        let lists=res.data.list;
       // this.total = res.data.total;

       for(let i=0;i<lists.length;i++){//数组重组           
         let images = lists[i].images != null ? lists[i].images.split(',') : '';
					lists[i].images = images;//得到图片数组
       }
        this.kindMask = lists;
      } else {
        this.$message({
          showClose: true,
          message: res.message,
          type: "error"
        });
      }
    },
     async getRespiratorList(params) {//呼吸机分类
      params = params || {
        page_size:4,
        page_index:1,
        keyword: "",
        kind_id:3,//呼吸机分类
      };
      const res = await getNeedList({ data: params });
      if (res.code == 200) {
        let lists=res.data.list;
        //this.total = res.data.total;

       for(let i=0;i<lists.length;i++){//数组重组           
         let images = lists[i].images != null ? lists[i].images.split(',') : '';
					lists[i].images = images;//得到图片数组
       }
        this.kindRespirator = lists;
      } else {
        this.$message({
          showClose: true,
          message: res.message,
          type: "error"
        });
      }
    },

    async getPurchaseList(params) {//采购订单
      params = params || {
        type:'1,4',
        page_size:5,
        page_index:1,
        keyword: ""
      };
      const res = await getNeedList({ data: params });
      if (res.code == 200) {
        let lists=res.data.list;
        this.purchaseTotal = res.data.total;

       for(let i=0;i<lists.length;i++){//数组重组  
         let serviceData = lists[i].service_cnname != null ? lists[i].service_cnname.split(',') : '';
            lists[i].service_cnname = serviceData;//得到服务类型数组
       
        let qualification = lists[i].qualification_icon != null ? lists[i].qualification_icon.split(',') : '';
         lists[i].qualification_icon = qualification;//得到资质类型数组

         let images = lists[i].images != null ? lists[i].images.split(',') : '';
					lists[i].images = images;//得到图片数组
       }
        this.purchaseList = lists;
        console.log( this.purchaseList)
      } else {
        this.$message({
          showClose: true,
          message: res.message,
          type: "error"
        });
      }
    },
    async getBuyList(params) {//销售订单
      params = params || {
        type:'2,3',
        page_size:5,
        page_index:1,
        keyword: ""
      };
      const res = await getNeedList({ data: params });
      if (res.code == 200) {
        let lists=res.data.list;
        this.buyTotal = res.data.total;

       for(let i=0;i<lists.length;i++){//数组重组  
         let serviceData = lists[i].service_cnname != null ? lists[i].service_cnname.split(',') : '';
            lists[i].service_cnname = serviceData;//得到服务类型数组
       
        let qualification = lists[i].qualification_icon != null ? lists[i].qualification_icon.split(',') : '';
         lists[i].qualification_icon = qualification;//得到资质类型数组

         let images = lists[i].images != null ? lists[i].images.split(',') : '';
					lists[i].images = images;//得到图片数组
       }
        this.buyList = lists;
      } else {
        this.$message({
          showClose: true,
          message: res.message,
          type: "error"
        });
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
  mounted: function() {
    this.getEpidemic();
    this.getProductList(); //列表推荐
    this.getMaskList();//口罩类
    this.getRespiratorList();//呼吸机分类
    this.getPurchaseList();//采购订单
    this.getBuyList();//销售订单
    this.gettoutNews();
    this.getBanner();
    this.getAdvBanner();
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
.epidemic-title.active{
   color:$ac;
 background: url(~@assets/images/home_titlbgcur.png) 0 0 no-repeat;
background-size:cover;
.abroad-title{color:#fff;}

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
  span{width:50%;display: inline-block;}
  img {
    height: 20px;
    margin-right: 6px;
  }

  .abroad-title {
    color: $ac;
  text-align:right;
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

.promore-btn{
  text-align: center;
  padding-bottom:40px;
  a{
    padding:10px 40px;
    display: inline-block;
    border:1px solid $ac;
    border-radius:20px;
    transition:all .3s;
    &:hover{
      background:$ac;
      color:#fff;
    }
  }
}
</style>
