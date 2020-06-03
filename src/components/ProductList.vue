<template>
  <!--产品列表-->
  <div class="index-prolist">
    <ul class="clearfix">
      <li v-for="item in productList" :key="item.id">
        <router-link :to="'/product/'+item.id">
          <p class="thumb">
            <img :src="item.images[0]" alt />
          </p>
          <h3 class="inpro-title">
            <span v-if="item.service_cnname[0] !=='' && item.service_cnname.length>0">
            <em class="kicon iconannoyed" v-for="(service,num) in item.service_cnname" :key="num">{{service}}</em>
            </span>
           {{item.title}}
          </h3>
          <p class="price">
            <span>
              <i>￥</i> {{item.price}}
            </span>
            <!-- <span class="old-price">
              <i>￥</i>
              <em>200,000</em>
            </span> -->
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    productList:{
      type:Array
    }
  },
  data(){
    return{

    }
  }

};
</script>

<style lang="scss" scoped>
/*产品列表*/
.index-prolist {
  padding: 20px 0 25px;
  ul {
    margin: 0 -9px;
    li {
      float: left;
      width: 20%;
      padding: 0 9px 10px;
      a {
        display: block;
        background: #fff;
        padding: 0 18px 24px;
        @include imgscale();
        transition: all 0.3s;
        &:hover {
          transform: translateY(-3px);
          box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);
        }
        .thumb{
          overflow: hidden;
         margin:10px 0;
        }
        img {
          width: 186px;
          height: 160px;
        }
      }
      .inpro-title {
        color: #4e5a65;
        font-size: 14px;
        @include ml(20px, 2);
        margin-bottom: 5px;
        span {
          vertical-align: middle;
        }
      }
      .price {
        font-size: 22px;
        color: $ac;
        height:33px;
        overflow: hidden;
        i {
          font-style: normal;
          font-size: 21px;
        }
        .old-price {
          font-size: 16px;
          color: #4e5a65;
          padding-left: 10px;
          i {
            font-size: 12px;
          }
          em {
            font-style: normal;
            text-decoration: line-through;
          }
        }
      }
    }
  }
}
</style>