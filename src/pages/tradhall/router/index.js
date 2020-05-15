import RouterCreator from '@src/utils/enhanceRouter';
import TradHall from "../views/TradHall.vue";


const routes = [
  {
    path: "/tradhall",
    name: "TradHall",
    component: TradHall,
    meta: {
      title: '交易大厅'
    }
  },
 
];


const router = RouterCreator.create(routes);

export default router;
