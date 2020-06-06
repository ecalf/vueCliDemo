<template>
  <div class="purchase-order">
     <ul v-for="(item,index) of list" :key='index'>
      <li class="li1 liorder">
        <div class="newtap">
          <span class="iconannoyed kicon" v-for="(serviceitem,index) in item.service_cnname"  :key='index'>{{serviceitem}}</span>
        </div>
       {{item.product_category_cnname}}
      </li>
      <li class="li2 liorder">
        <span class="medical-use">{{item.use_way|useWay}}</span>
        <router-link :to="'/product/myofferdetail/'+item.need_id+'/'+item.quotation_id" class="ellipsis purtitle">{{item.title}}</router-link>
      </li>
      <li class="li3 fs16">{{item.num}}{{item.unit_category_cnname}}</li>
      <li class="li4 fs16">
        <span class="order-price">{{item|price}}</span>
      </li>
      <li class="li5">{{item.created_at|formatDate}}-{{item.dead_time|formatDate}}</li> 
      <li class="li6">
        <router-link :to="'/product/myofferdetail/'+item.need_id+'/'+item.quotation_id" class="colorgreen">点击查看</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
import filters from "@utils/filters";

export default {
  mixins:[filters],
  props:{
    list:Array
  },
  data(){
    return {};
  },
  computed:{
     country(){
       
      return (code)=>{
          if(!code){ return code; }
          code = code.toUpperCase();
          let country = this.countryList.filter((item)=>{
              return item.code==code;
          });
          return country.length?country[0].name:code
      }
    }
  },
  filters:{
     
  },
  methods:{

  }

};
</script>

<style lang="scss" scoped>
.purchase-order {
  padding-top: 22px;
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 18px 12px;
    background: #f4f4f4;
    border-radius: 5px;
    margin-bottom: 2px;
    line-height: 24px;
    white-space: nowrap;
    li {
      display: inline-block;
      padding-left: 10px;
      text-align: center;
      vertical-align: middle;
      &.li1{
        width:150px;
        text-align:left;
      }
      &.li2{
        flex: 1;
      }
      &.li3{
        width:90px;
      }
      &.li4{
        width:150px;
      }
      &.li5{
        width:155px;
      }
      &.li6{
        width:105px;
      }
    }
  }
}

.colorgreen{
  color:#44a78d;
}

.liorder {
  position: relative;
 .newtap {
    display: inline-block;

  }
}

.purtitle {
  padding-left: 5px;
  display: inline-block;
  width: 120px;
  text-align: left;
  vertical-align: middle;
}

.m-pro-title {
  padding-left: 25px;
  display: inline-block;
  width: 315px;
  text-align: left;
  vertical-align: middle;
}
.order-price {
  color: #44a78d;
}
.order-btn {
  a {
    cursor:default;
    padding-right: 5px;
    &:after {
      content: "|";
      display: inline-block;
      vertical-align: 2px;
      margin-left: 5px;
      color: #3d3938;
    }
    &:last-child {
      &:after {
        display: none;
      }
    }
  }
}
.modify {
  color: $ac;
}
.delete {
  color: #fb0a0a;
}
.quoted-price{
    strong{
        color:$ac;
        font-size:18px;
    }
}
</style>