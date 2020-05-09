import VueRouter from "vue-router";
import RouterCreator from '@src/utils/enhanceRouter';
import Home from "../views/Home.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: '首页'
    }
  },
];


const router = RouterCreator.create(routes);

export default router;
