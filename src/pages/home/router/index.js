import VueRouter from "vue-router";
import RouterCreator from '@src/utils/enhanceRouter';
import Account from "../views/Account.vue";


const routes = [
  {
    path: "/home",
    name: "Account",
    component: Account
  },
  {
    path: "/modify",
    name: "Modify",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Modify.vue")
  }
];


const router = RouterCreator.create(routes);

export default router;
