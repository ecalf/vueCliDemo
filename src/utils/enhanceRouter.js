/*
* 路由构建通用配置
*/

import VueRouter from "vue-router";


const RouterCeator = {
    create(routes){
        const router = new VueRouter({
            mode: "history",
            routes
        });

        return this.fixedDocTitle(router);
    },

    fixedDocTitle(router){
        /* 路由发生变化修改页面title */
        router.beforeEach((to, from, next) => {
          if (to.meta.title) {
            document.title = to.meta.title
          }

          next()
        });

        return  router;
    }
}



export default RouterCeator;