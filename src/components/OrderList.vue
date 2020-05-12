<template>
  <!--订单列表-->
  <div class="mshow-box">
    <div>
      
    </div>

    <ul class="mshow-list">
      <li class="item item1">
        <i class="iconannoyed kicon">急</i>
        <h2>呼吸机...</h2>
        <span>飞利浦企业</span>
        <span>出口国：中国</span>
      </li>
      <li class="item item2">
        <a href>
          <h3 class="title">
            <span class="medical-use civil-use">医用</span> S9 VPAP ST主机 VPAP ST主机主...
          </h3>
          <p class="dec">
            医用的达到欧盟欧盟欧盟欧标准医用的达到医
            医用的达到医用的达到医用的达到医用的达到...
          </p>
        </a>
      </li>
      <li class="item item3">
        <span class="number">1500/个</span>
      </li>
      <li class="item item4">
        <span class="price">￥200,000</span>
      </li>
      <li class="item item5">
        <p>
          <span class="iconannoyed kicon">急</span>
          <span class="icontop kicon">顶</span>
          <span class="iconcompany kicon">企</span>
          <span class="iconorder kicon">订</span>
        </p>
        <p>
          <img src="@assets/images/icon1.png" alt />
          <img src="@assets/images/icon2.png" alt />
          <img src="@assets/images/icon3.png" alt />
          <img src="@assets/images/icon4.png" alt />
        </p>
      </li>
      <li class="item item6">
        <p class="pro-date"><i>10</i>天<i>5</i>时<i>1</i>分<i>10</i>秒</p>
        <a href class="click-more">点击查看</a>
      </li>
    </ul>




    <ul class="mshow-list" v-for="(item,index) of list" v-bind:key="index">
      <li class="item item1">
        <i class="iconannoyed kicon">急</i>
        <h2>{{item.product_category_cnname}}</h2>
        <span>{{item.product_brand_cnname}}</span>
        <span>出口国：{{country(item.exit_country)}}</span>
      </li>
      <li class="item item2">
        <a href>
          <h3 class="title">
            <span class="medical-use civil-use">
              {{useWay(item.use_way)}}</span>
              {{item.title}}
          </h3>
          <p class="dec">{{item.desc}}</p>
        </a>
      </li>
      <li class="item item3">
        <span class="number">{{item.num}}{{item.unit||''}}</span>
      </li>
      <li class="item item4">
        <span class="price">{{price(item)}}</span>
      </li>
      <li class="item item5">
        <p>
          <span class="iconannoyed kicon">急</span>
          <span class="icontop kicon">顶</span>
          <span class="iconcompany kicon">企</span>
          <span class="iconorder kicon">订</span>
        </p>
        <p>
          <img src="@assets/images/icon1.png" alt />
          <img src="@assets/images/icon2.png" alt />
          <img src="@assets/images/icon3.png" alt />
          <img src="@assets/images/icon4.png" alt />
        </p>
      </li>
      <li class="item item6">
        <p class="pro-date" v-bind:deadtime="item.dead_time">
          <i>10</i>天<i>5</i>时<i>1</i>分<i>10</i>秒
        </p>
        <a href class="click-more" @click="detail(item.id)">点击查看</a>
      </li>
    </ul>

  </div>
</template>


<script>
import {formatPrice} from "@utils/common";
import {getCountrylist,getQualification,getProductCategory} from "@api/commonApi";


export default {
  props:{
    list:Array,
  },
  data(){
    return {
        countryList:[],
        qualificationList:[],
        categoryList:[]
    }
  },
  computed:{
    country(){
        return (code)=>{
            code = code.toUpperCase();
            let country = this.countryList.filter((item)=>{
                return item.code==code;
            });
            return country.length?country[0].name:code
        }
    },
    useWay(){
      return (type)=>{
        return type==1?'医用':'民用'
      }
    },
    price(){
      return (item)=>{
        //"type": 1, //类型 类型：1 发布采购 2 发布销售 3 委托销售'
        let p;
        if(item.type==1){
          p = item.market_price;
        }else if(item.type==2){
          p = item.supplier_price;
        }else if(item.type==3){
          p = item.supplier_price;
        }

        return p&&('￥'+formatPrice(p));
      }
    }
  },
  methods:{
      async getCountrylist(){
          let res =  await getCountrylist();

          if(res.code==200){
              this.countryList = res.data;

          }else{
              this.$message({
                showClose: true,
                message: res.message,
                type: "error"
              });
          }
      },
      async getQualification(){
        let res =  await getQualification();

          if(res.code==200){
              this.qualificationList = res.data;

          }else{
              this.$message({
                showClose: true,
                message: res.message,
                type: "error"
              });
          }
      },
      async getProductCategory(){
        let res = await getProductCategory();
        if(res.code==200){
            this.categoryList = res.data;

        }else{
            this.$message({
              showClose: true,
              message: res.message,
              type: "error"
            });
        }
      },

      detail(id){

      }
  },
  created(){
      this.getCountrylist();
      this.getQualification();
      this.getProductCategory();
      
  },
  mounted(){
    setTimeout(()=>{
      setInterval(()=>{
        let elmArr = document.querySelectorAll('.mshow-list .pro-date');
        elmArr.forEach(function(elm){ 
            let deadTime = elm.dataset.deadtime;
            
        });

      },1000);
    },1000);
  }

}

</script>



<style lang="scss" scoped>
.mshow-list {
  padding: 20px 30px;
  display: table;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  cursor: pointer;
  background: #fbfbfb;
  margin-bottom: 2px;
  width: 100%;
  &:hover {
    background-color: #eaeced;
  }

  li {
    display: table-cell;
    vertical-align: middle;
    text-align: center;

    &.item1 {
      text-align: left;
      position: relative;
      padding-left: 10px;

      h2 {
        width: 140px;
        font-weight: bold;
        font-size: 20px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        height: 26px;
        line-height: 26px;
      }

      .kicon {
        position: absolute;
        left: -15px;
        top: 12px;
      }

      span {
        display: block;
        color: #3d3938;
      }
    }

    &.item2 {
      width: 180px;
      text-align: left;

      a {
        display: block;

        .title {
          width: 180px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          height: 24px;
          line-height: 24px;
          font-size: 16px;
          color: #3d3938;
          margin-bottom: 10px;
        }

        .dec {
          display: -webkit-box;
          height: 36px;
          line-height: 18px;
          text-overflow: ellipsis;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          color: #3d3938;
        }
      }
    }

    &.item3 {
      width: 120px;

      .number {
        display: block;
        font-size: 16px;
        color: #3d3938;
        font-weight: bold;
      }
    }

    &.item4 {
      width: 150px;

      .price {
        font-size: 26px;
        color: #44a78d;
        font-weight: bold;
      }
    }

    &.item5 {
      width: 130px;
      img {
        height: 16px;
        margin: 0 2px;
      }
    }

    &.item6 {
      width: 150px;
    }
  }
}

.pro-date {
  color: #3d3938;
  margin-bottom: 15px;
  text-align: center;
 
  i{
    color:$ac;
    font-style:normal;
    font-weight: bold;
    padding:0 2px;
     font-size:16px;
  }
}

.click-more {
  width: 82px;
  height: 28px;
  background-color: #44a78d;
  border-radius: 3px;
  font-size: 12px;
  line-height: 28px;
  color: #fff;
  text-align: center;
  display: block;
  margin: 0 auto;
}
</style>