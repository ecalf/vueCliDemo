import VueRouter from "vue-router";
import RouterCreator from '@src/utils/enhanceRouter';
import Index from "../views/Index.vue";
import NotFoundComponent from "@components/NotFoundComponent";


const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
        meta: {
          title: '首页'
        }
    },
    {
        path:"/index*",
        redirect:"/"
    },
    {
        path:"/*",
        name:'notFound',
        component:NotFoundComponent
    }
];


const router = RouterCreator.create(routes);

export default router;
