import RouterCreator from '@src/utils/enhanceRouter';

import PublishBuy from "../views/PublishBuy.vue";
import PublishSell from "../views/PublishSell.vue";
import PublishEntrust from "../views/PublishEntrust.vue";
import NotFoundComponent from "@components/NotFoundComponent";

const routes = [
  {
    path:"/publish",
    redirect:"/tradhall"
  },
  {
    path: "/publish/buy",
    name: "publishBuy",
    component: PublishBuy,
    meta: {
      title: '我要采购'
    }
  },
  {
    path: "/publish/sell",
    name: "publishSell",
    component: PublishSell,
    meta: {
      title: '我要销售'
    }
  },
  {
    path: "/publish/entrust",
    name: "publishEntrust",
    component: PublishEntrust,
    props: (route) => ({ type: route.query.type }),
    meta: {
      title: '我要委托'
    }
  },
  {
    path:"/publish/*",
    name:'notFound',
    component:NotFoundComponent
  }

];

const router = RouterCreator.create(routes);

export default router;
