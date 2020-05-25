<template>
  <div class="product-details commonweb">
    <div class="crumbs">
      <span>商品详情</span>
      <i class="iconfont iconjiantou1"></i>
      <span>{{detail.product_category_cnname}}</span>
    </div>

    <div class="prodetatils-box clearfix">
        <ProductImages v-bind:list="[].concat(detail.images)"  />
        <ProductDetailContent v-bind:detail="detail" />
    
    </div>

    <CompanyInfo v-bind:info="detail.info||{}" />


    <div class="prodetatils-info clearfix">
      <div class="prodetatils-left">
            <ProductRichDesc v-bind:desc="detail.info||{}" />
      </div>
      <div class="prodetatils-right">
            <ProductAdv v-bind:list="advList" />
      </div>
    </div>




   
  </div>
</template>


<script>
import ProductImages from "@components/ProductImages";
import ProductDetailContent from "../components/ProductDetailContent";
import ProductRichDesc from "../components/ProductRichDesc";
import ProductAdv from "../components/ProductAdv";
import CompanyInfo from "../components/CompanyInfo";

import { getNeedInfo } from "@api/need";



export default {
    components:{
        ProductImages,
        ProductDetailContent,
        ProductRichDesc,
        ProductAdv,
        CompanyInfo
       
    },
    props:{
        id:String //由路由传入
    },
    data() {
        return {
            needs_id:this.id>>0,
            detail:{},
            advList:[]
            
        };
    },
    computed:{

    },

    methods:{
        async getInfo(){
            const res = await getNeedInfo({data:{needs_id:this.needs_id}});
            if(res.code==200){
                this.detail = res.data;

                console.log('=======test detail.images===========');
                this.detail.images = [
                    '/img/productimg7.ebd76f2c.png?a=1',
                    '/img/productimg7.ebd76f2c.png?a=2',
                    '/img/productimg7.ebd76f2c.png?a=3',
                    '/img/productimg7.ebd76f2c.png?a=4',
                    '/img/productimg7.ebd76f2c.png?a=5',
                    '/img/productimg7.ebd76f2c.png?a=6',
                    '/img/productimg7.ebd76f2c.png?a=7',
                    '/img/productimg7.ebd76f2c.png?a=8'
                ];

            }else{
                 this.$message({
                      showClose: true,
                      message: res.message,
                      type: "error"
                });
            }
        }
    },
    created(){
        this.getInfo();
        
    }
};
</script>

<style lang="scss" scoped>
/*产品详情*/
.product-details {
  padding: 40px 0 50px;
}
.crumbs {
  margin-bottom: 3px;
  a ,span{
    color: #3d3938;
    padding: 0 5px;
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    &:last-child {
      color: #3d3938;
    }
  }
  i {
    display: inline-block;
    vertical-align: middle;
    font-size: 20px;
  }
}

.prodetatils-box {
  padding: 25px;
  margin-bottom: 10px;
  border-radius: 3px;
  background: #fff;
}



/*商品详情介绍*/
.prodetatils-info {
    .prodetatils-left {
      width: 930px;
      float: left;
      padding: 25px;
      background: #fff;
      margin-right: 14px;
    }

    .prodetatils-right {
      padding-top: 0;
      overflow: hidden;
    }
}




</style>