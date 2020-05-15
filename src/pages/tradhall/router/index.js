import RouterCreator from '@src/utils/enhanceRouter';
import TradHall from "../views/TradHall.vue";
import NotFoundComponent from "@components/NotFoundComponent";


const routes = [
  {
    path: "/tradhall",
    name: "TradHall",
    component: TradHall,
    meta: {
      title: '交易大厅'
    }
  },
  { 
    path: '/tradhall/*', 
    name:'notFound',
    component: NotFoundComponent 
  }
 
];


const router = RouterCreator.create(routes);

export default router;
