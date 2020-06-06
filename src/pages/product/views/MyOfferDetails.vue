<template>
  <div class="product-details commonweb">
    <div class="crumbs">
      <span>商品详情</span>
      <i class="iconfont iconjiantou1"></i>
      <span>{{detail.product_category_cnname}}</span>
    </div>

    <div class="prodetatils-box clearfix">
      <ProductImages :list="detail.images|toArray" />
      <ProductDetailContent :detail="detail" :list="detail.qualification_icon | toArray" />
    </div>

    <div class="offer-table">
      <h3 class="offer-title"><strong>我的报价</strong></h3>
      <table>
        <thead>
          <tr>
            <td>联系人</td>
            <td>联系电话</td>
            <td>公司名称</td>
            <td>价格</td>
            <td>留言</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in offerList" :key="item.id">
            <td>{{item.contact_name}}</td>
            <td>{{item.phone}}</td>
            <td>{{item.company_name}}</td>
            <td>{{item.quoted_price}}</td>
            <td>{{item.desc}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ProductImages from "../components/ProductImages";
import ProductDetailContent from "../components/ProductDetailContent";
import { getNeedInfo } from "@api/need";
import { getmyofferData } from "@api/user";
export default {
  components: {
    ProductImages,
    ProductDetailContent
  },
  data() {
    return {
      needs_id: "", //需求id
      quotation_id: "", //报价id
      detail: {},
      offerList:[],
      urlParams: {}
    };
  },
  filters: {
    toArray(imgs) {
      return (imgs + "").split(",");
    }
  },
  methods: {
    async getInfo() {
      const res = await getNeedInfo({ data: { needs_id: this.needs_id } });
      if (res.code == 200) {
        this.detail = res.data;
      } else {
        this.$message({
          showClose: true,
          message: res.message,
          type: "error"
        });
      }
    },
    async getoffer(params) {
      params = params || {
        need_id: this.needs_id,
        quotation_id: this.quotation_id
      };
      console.log(params);
      const res = await getmyofferData({ data: params });
      if (res.code == 200) {
        console.log(res);
        this.offerList = res.data;
      } else {
        this.$message({
          showClose: true,
          message: res.message,
          type: "error"
        });
      }
    }
  },
  created() {
    this.urlParams = this.$route.params;
    this.needs_id = this.urlParams.id; //获取需求id
    this.quotation_id = this.urlParams.quotationid; //获取报价id
    this.getInfo();
    this.getoffer();
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
  a,
  span {
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
    min-height: 600px;
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

.offer {
  background: #fff;
  margin-bottom: 2.5px;
  display: flex;
  padding: 15px 19px;
  font-size: 16px;
  align-items: center;
  position: relative;
  .offerinfo {
    margin-right: 200px;
    width: 90px;
  }
}

.offer-table {
  background: #fff;
  padding:30px 40px;
  table {
    width: 100%;
    text-align: center;
    border-left: 1px solid #ccc;
  }
  thead tr {
    background: $ac;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border-right: 1px solid #fff;
  }
  tr td {
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    padding: 5px 10px;
  }
}

.offer-title{
  color:$ac;
  margin-bottom:20px;
}
</style>