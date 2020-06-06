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
            //console.log('from ',from);
            //console.log('to ',to);

            try{
                if(from.name=='Index'){
                    //首页模块只有一个页面,全部使用刷新方式跳转
                    location.href=to.path+this.queryString(to.query);

                }else if(from.matched.length!=0&&to.matched.length==0){
                    /************************************************
                    使用 router-link 或 this.$router.push(pathname) 进行跳转时，
                    遇到本模块跳出非本模块页面的情况使用 location.href 跳转 
                    
                    如果 pathname 不是本页面路由配置的路劲则无法匹配模块,
                    to.matched 不匹配:不属于本模块
                    from.matched 不匹配:本模块页面按了刷新按钮或模块外跳入本模块

                    为了让本设置生效，不要用 * 号对路由进行模糊匹配,
                    可以使用 /moduleName/* 进行 404 匹配，或者让 nginx 处理 404
                    最好对 /moduleName 设置模块默认页

                    模块外页面跳进来无法匹配的情况不要使用 location.href=to.path 否则引起死循环
                    因此确保 to.matched 能匹配，支处理模块跳出的情况
                    **************************************************/

                    location.href=to.path+this.queryString(to.query);
                }else {
                    this.fixedDocTitle(to);
                    next();
                }
            }catch(err){
                console.log(err);
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
    queryString(query){
        //查询参数对象转 location.search
        let str = '';
        for(let k in query){
            if(!str){
                str = '?'
            }else{
                str+='&'
            }

            str+=k+'='+query[k];
        }
        return str;

    },
    fixedDocTitle(to){//路由发生变化修改页面title
        if (to.meta.title) {
            try{
                document.title = to.meta.title
            }catch(err){
                console.log(err);
            }
        }
    }
}



export default RouterCeator;