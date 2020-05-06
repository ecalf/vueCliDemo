import VueRouter from "vue-router";
import RouterCreator from '@src/utils/enhanceRouter';
import ProductList from "../views/ProductList.vue";


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
    path: "/product/detail",
    name: "ProductDetail",
    component: () => import('../views/ProductDetail.vue'),
    meta: {
      title: '产品详情'
    }
  },
 
];


const router = RouterCreator.create(routes);

export default router;
