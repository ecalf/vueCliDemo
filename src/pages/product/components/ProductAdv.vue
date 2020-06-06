<template>
    <ul class="clearfix index-prolist">
      <li v-for="item in list" :key="item.id">
        <a href>
          <p class="thumb" v-if="item.images">
            <img :src="item.images[0]" alt />
          </p>
          <h3 class="inpro-title">
             <span v-if="item.service_cnname[0] !=='' && item.service_cnname.length>0">
            <em class="iconannoyed kicon" v-for="(seritem,index) in item.service_cnname" :key="index">
              {{seritem}}
            </em>
          </span>
            {{item.title}}
          </h3>
          <p class="price">
            <span>
              <i>￥</i> {{item.price}}
            </span>
            <span class="old-price" v-if="item.type=2 && item.supplier_price !=null">
              <i>￥</i>
              <em>{{item.supplier_price}}</em>
            </span>
          </p>
        </a>
      </li>
    </ul>
</template>


<style lang="scss" scoped>
    /*产品列表*/
.index-prolist {

    li {
      padding: 0 0 10px;
      a {
        display: block;
        background: #fff;
        padding: 0 20px 24px;
        @include imgscale();
        transition: all 0.3s;
        &:hover {
          transform: translateY(-3px);
          box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);
        }
        .thumb{
          width: 186px;
          height: 160px; 
          margin:20px 0;
        }
        img {
          max-width: 186px;
          max-height: 160px;
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

</style>

<script>
export default {
    props:{
        list:Array
    },
    data(){
        return {

        }
    },
    methods:{

    }
}

</script>