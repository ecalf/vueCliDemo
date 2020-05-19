import RouterCreator from '@src/utils/enhanceRouter';

import Login from "../views/Admin/Login.vue";
import Register from "../views/Admin/Register.vue";
import Member from "../views/Admin/Member.vue";
import Buyorder from "../views/Purchase/Buyorder.vue";
import Sellorder from "../views/Purchase/Sellorder.vue";
import QuotedPrice from "../views/Purchase/QuotedPrice";
import NotFoundComponent from "@components/NotFoundComponent";

const routes = [
  {
    path: "/ucenter",
    name: "Login",
    redirect: "/ucenter/member"
  },
  {
    path: "/ucenter/login",
    name: "Login",
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: "/ucenter/register",//注册
    name: "Register",
    component: Register,
    meta: {
      title: '会员注册'
    }
  },
  {
    path: "/ucenter/member",
    name: "Member",
    component: Member,
    meta: {
      title: '会员中心'
    }
  },
  {
    path: "/ucenter/buyorder",//我要采购-采购订单
    name: "Buyorder",
    component: Buyorder,
    meta: {
      title: '采购订单'
    }
  },
  {
    path: "/ucenter/quotedprice",//我要采购-报价管理
    name: "QuotedPrice",
    component: QuotedPrice,
    meta: {
      title: '报价管理'
    }
  },
  {
    path: "/ucenter/sellorder",//我要销售-销售管理
    name: "Sellorder",
    component: Sellorder,
    meta: {
      title: '销售管理'
    }
  },

  {
    path: "/ucenter/sellorder",//我要销售-销售管理
    name: "Sellorder",
    component: Sellorder,
    meta: {
      title: '我的账户'
    }
  },

  {
    path: "/ucenter/sellorder",//我要销售-销售管理
    name: "Sellorder",
    component: Sellorder,
    meta: {
      title: '认证中心'
    }
  },

  { 
    path: '/ucenter/*', 
    name:'notFound',
    component: NotFoundComponent 
  }
 
];


const router = RouterCreator.create(routes);


export default router;
