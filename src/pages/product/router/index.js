import VueRouter from "vue-router";
import RouterCreator from '@src/utils/enhanceRouter';
import ProductList from "../views/ProductList.vue";
import ProductDetail from "../views/ProductDetail.vue";
import NotFoundComponent from "@components/NotFoundComponent";

const routes = [
  {
    path: "/product",
    name: "ProductList",
    component: ProductList,
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
    path:"/product/*",
    name:'notFound',
    component:NotFoundComponent
  }
 
];


const router = RouterCreator.create(routes);

export default router;
