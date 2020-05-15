import VueRouter from "vue-router";
import RouterCreator from '@src/utils/enhanceRouter';
import NewsList from "../views/NewsList.vue";


const routes = [
  {
    path: "/news",
    name: "NewsList",
    component: NewsList,
    meta: {
      title: '最新资讯'
    }
  },
  {
    path: "/news/detail",
    name: "NewsDetail",
    component: () => import('../views/NewsDetail.vue'),
    meta: {
      title: '新闻详情'
    }
  },
 
];


const router = RouterCreator.create(routes);

export default router;
