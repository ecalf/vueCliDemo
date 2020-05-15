import RouterCreator from '@src/utils/enhanceRouter';
import Test from "../views/Test.vue";


console.log('INDEX ROUTER,RouterCreator>>>',RouterCreator);

const routes = [
  {
    path: "/test",
    name: "Test",
    component: Test,
    meta: {
      title: '万合首页'
    }
  },
  {
    path: "/test/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),

    meta: {
      title: '万合Account'
    }
  }
];


const router = RouterCreator.create(routes);

export default router;
