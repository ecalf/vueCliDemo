import RouterCreator from '@src/utils/enhanceRouter';

import PublishBuy from "../views/PublishBuy.vue";
import PublishSell from "../views/PublishSell.vue";
import PublishEntrust from "../views/PublishEntrust.vue";


const routes = [
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
    meta: {
      title: '我要委托'
    }
  }

];

const router = RouterCreator.create(routes);

export default router;
