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

        //全局前置守卫
        router.beforeEach((to, from, next) => {
            let inside = this.isInsideModule(to,from);
            if(!inside){
                /************************************************
                使用 this.$router.push(pathname) 进行跳转时，
                如果pathname不是本页面路由配置的路劲则无法更新页面,
                直接设置 location.href 进行跳转
                **************************************************/
                location.href=to.path;
            }else{
                this.fixedDocTitle(to);
                next();
            }
        });

        return router;
    },
    getModuleNames(pathname){
        //通过 path 判断页面所属模块,pathname="/aa/bb"
        let moduleNames = pathname.split('/').slice(1);
        return moduleNames;
    },
    isInsideModule(to,from){//处理跨模块跳转
        if(!from.matched.length){//强制刷新不处理
            return true;
        }

        let toModules = this.getModuleNames(to.path);
        let fromModules = this.getModuleNames(from.path);
        return toModules[0]==fromModules[0];
    },

    fixedDocTitle(to){//路由发生变化修改页面title
        if (to.meta.title) {
            document.title = to.meta.title
        }
    }
}



export default RouterCeator;