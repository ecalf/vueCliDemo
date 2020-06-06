<template>
  <div class="product-details commonweb">
    <div class="crumbs">
      <span>商品详情</span>
      <i class="iconfont iconjiantou1"></i>
      <span>{{detail.product_category_cnname}}</span>
    </div>

    <div class="prodetatils-box clearfix">
      <ProductImages v-bind:list="detail.images|toArray" />
      <ProductDetailContent
        v-bind:detail="detail"
        :list="detail.qualification_icon | toArray"
        :isshow="true"
      />
    </div>

    <CompanyInfo
      :info="{
      user_id:detail.user_id,
      is_collect:detail.is_collect,
      company_name:detail.company_name,
      company_introduce:detail.company_introduce,
      company_industry:detail.industry,
      business_scope_cate:detail.business_scope_cate
    }"
    />

    <div class="prodetatils-info clearfix">
      <div class="prodetatils-left">
        <ProductRichDesc :desc="detail.info" />
      </div>
      <div class="prodetatils-right">
        <ProductAdv :list="advList" />
      </div>
    </div>
  </div>
</template>


<script>
import ProductImages from "../components/ProductImages";
import ProductDetailContent from "../components/ProductDetailContent";
import ProductRichDesc from "../components/ProductRichDesc";
import ProductAdv from "../components/ProductAdv";
import CompanyInfo from "../components/CompanyInfo";
import { getNeedInfo, getNeedList } from "@api/need";

export default {
  components: {
    ProductImages,
    ProductDetailContent,
    ProductRichDesc,
    ProductAdv,
    CompanyInfo
  },
  props: {
    id: String //由路由传入
  },
  data() {
    return {
      needs_id: this.id >> 0,
      detail: {},
      advList: []
    };
  },
  computed: {},
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
        console.log(79, this.detail);
        let htmlString = [];
        var detailsData =
          res.data.info != null && res.data.info.length
            ? res.data.info.split(",")
            : "";
        for (var i = 0; i < detailsData.length; i++) {
          //产品详情
          htmlString[i] =
            '<img style="width:100%;display:block;" src="' +
            detailsData[i] +
            '"></img>';
        }
        //this.detail.info=htmlString.join("");
        if (this.detail.info && this.detail.info.indexOf("http") != -1) {
          this.detail.info = htmlString.join("");
        }
      } else {
        this.$message({
          showClose: true,
          message: res.message,
          type: "error"
        });
      }
    },
    async getPurchaseList(params) {
      //采购订单
      params = params || {
        type: "",
        page_size: 5,
        page_index: 1,
        keyword: ""
      };
      const res = await getNeedList({ data: params });
      if (res.code == 200) {
        let lists = res.data.list;
        this.purchaseTotal = res.data.total;
        console.log(lists);
        for (let i = 0; i < lists.length; i++) {
          //数组重组
          let serviceData =
            lists[i].service_cnname != null
              ? lists[i].service_cnname.split(",")
              : "";
          lists[i].service_cnname = serviceData; //得到服务类型数组

          let qualification =
            lists[i].qualification_icon != null
              ? lists[i].qualification_icon.split(",")
              : "";
          lists[i].qualification_icon = qualification; //得到资质类型数组

          let images =
            lists[i].images != null ? lists[i].images.split(",") : "";
          lists[i].images = images; //得到图片数组
        }
        this.advList = lists;
       // console.log(lists);
        //console.log( this.purchaseList)
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
    this.getInfo();
    this.getPurchaseList();
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
</style>