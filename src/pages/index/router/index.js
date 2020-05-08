import VueRouter from "vue-router";
import RouterCreator from '@src/utils/enhanceRouter';
import Index from "../views/Index.vue";


const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    meta: {
      title: '首页'
    }
  },
];


const router = RouterCreator.create(routes);

export default router;
