import VueRouter from "vue-router";
import RouterCreator from '@src/utils/enhanceRouter';
import Account from "../views/Home.vue";


const routes = [
  {
    path: "/home",
    name: "Account",
    component: Account,
    meta: {
      title: '首页'
    }
  },
];


const router = RouterCreator.create(routes);

export default router;
