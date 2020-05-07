import VueRouter from "vue-router";
import RouterCreator from '@src/utils/enhanceRouter';
import Supplier from "../views/Supplier.vue";


const routes = [
  {
    path: "/supplier",
    name: "Supplier",
    component: Supplier,
    meta: {
      title: '供应商中心'
    }
  },
];


const router = RouterCreator.create(routes);

export default router;
