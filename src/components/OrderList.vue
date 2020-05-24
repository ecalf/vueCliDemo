<template>
  <!--订单列表-->
  <div class="mshow-box">
    <div>
      
    </div>

    <ul class="mshow-list">
      <li class="item item1">
        <i class="iconannoyed kicon">急</i>
        <h2>demo呼吸机...</h2>
        <span>飞利浦企业</span>
        <span>出口国：中国</span>
      </li>
      <li class="item item2">

        <h3 class="title">
          <span class="medical-use civil-use">医用</span> S9 VPAP ST主机 VPAP ST主机主...
        </h3>
        <p class="dec">
         【示列】欧盟欧盟欧标准医用的达到医
          医用的达到医用的达到医用的达到医用的达到...
        </p>

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
        <router-link to="" class="click-more">点击查看</router-link>
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
          <h3 class="title">
            <span class="medical-use civil-use">
              {{item.use_way|useWay}}</span>
              {{item.title}}
          </h3>
          <p class="dec">{{item.desc}}</p>
      </li>
      <li class="item item3">
        <span class="number">{{item.num}}{{item.unit||''}}</span>
      </li>
      <li class="item item4">
        <span class="price">{{item|price}}</span>
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
        <p class="pro-date" v-bind:data-deadtime="item.dead_time" v-interval="{handler:intervalFn,time:1000}">
          <span v-show="new Date(item.dead_time)>Date.now()"><i>0</i>天<i>0</i>时<i>0</i>分<i>0</i>秒</span>
          <span v-show="new Date(item.dead_time)<=Date.now()"><i>已截止</i></span>
        </p>
        <router-link v-bind:to="'/product/'+item.id"  class="click-more">点击查看</router-link>
      </li>
    </ul>

  </div>
</template>


<script>
import {formatPrice} from "@utils/common";
import {getCountrylist,getQualification,getProductCategory} from "@api/common";


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
        if(!code){ return code||''; }
        code = code.toUpperCase();
        let country = this.countryList.filter((item)=>{
            return item.code==code;
        });
        return country.length?country[0].name:code
      }
    }
    

  },
  filters:{
    useWay(type){
      return type==1?'医用':'民用'
    },
    price(item){
      //"type": 1, //类型 类型：1 发布采购 2 发布销售 3 委托销售 4 委托购买'
      let p;
      if(item.type==2){
        p = item.supplier_price;
      }else if(item.type==1){
        p = item.price;
      }

      return p&&('￥'+formatPrice(p));
      
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
        location.href="/product/detail?id="+id;
      },

      intervalFn(elm,value){
        let deadtime = elm.dataset.deadtime;
        let leftTime = new Date(deadtime)*1-Date.now();
        let nodes = elm.getElementsByTagName('i');


        if(!leftTime||leftTime<=0){
          //console.log('------已截止----');
          nodes[0].textContent = 0;
          nodes[1].textContent = 0;
          nodes[2].textContent = 0;
          nodes[3].textContent = 0;
          return false;
        }else{
          //left time
          let d = (leftTime/(24*3600*1000))>>0;
          let h = (leftTime%(24*3600*1000)/(3600*1000))>>0;
          let min = (leftTime%(3600*1000)/(60*1000))>>>0;
          let s = ((leftTime%(60*1000))/1000)>>>0;

          nodes[0].textContent = d;
          nodes[1].textContent = h;
          nodes[2].textContent = min;
          nodes[3].textContent = s;
        }
        nodes = null;
        
      }

      
  },
  directives: {
    interval: {//定时循环指令
      //为避免反复创建定时器,只在bind创建一次
      bind: function (elm,binding) {
        //v-interval 指令,handler 返回false表示可以终止定时器
        let handler = binding.value.handler;
        let time = binding.value.time;

        let timer = setInterval(function(){
          let ifClear = handler(elm,binding.value);
          /*表单会更新数据,不要终止定时器
          if(ifClear===false){
            clearInterval(timer);
            console.log('clearInterval');
          }
          */
        },time);
      }
    }
  },
  created(){
      this.getCountrylist();
      //this.getQualification();
      //this.getProductCategory();
      
  },
  mounted(){

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