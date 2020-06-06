import VueRouter from "vue-router";
import RouterCreator from '@src/utils/enhanceRouter';
import Product from "../views/Product";
import ProductDetail from "../views/ProductDetail.vue";
import Company from "../views/Company.vue";
import NotFoundComponent from "@components/NotFoundComponent";
import OfferDetails from "../views/OfferDetails";
import MyOfferDetails from "../views/MyOfferDetails";
const routes = [
  {
    path: "/product",
    name: "Product",
    component: Product,
    meta: {
      title: '产品列表'
    }
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component:ProductDetail,
    props: true,
    meta: {
      title: '产品详情'
    }
  },
  {
    path: "/product/company/:id/:collect",
    name: "Company",
    component:Company,
    props: true,
    meta: {
      title: '企业详情'
    }
  },

  {
    name: "OfferDetail",
    path: "/product/offerdetail/:id/:quotationid",
    component: OfferDetails,
    meta: {
      title: '报价详情'
    }
  },
  {
    name: "MyOfferDetail",
    path: "/product/myofferdetail/:id/:quotationid",
    component: MyOfferDetails,
    meta: {
      title: '我的报价详情'
    }
  },
  {
    path:"/product/*",
    name:'notFound',
    component:NotFoundComponent
  }
 
];


const router = RouterCreator.create(routes);

export default router;
