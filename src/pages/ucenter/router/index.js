import RouterCreator from '@src/utils/enhanceRouter';

import NotFoundComponent from "@components/NotFoundComponent";
import Login from "../views/Admin/Login";
import Register from "../views/Admin/Register";
import Member from "../views/Admin/Member";
import Account from "../views/Admin/Account";
import Authentication from "../views/Admin/Authentication";
import Company from "../views/Admin/Company";
import Myquote from "../views/Admin/Myquote";
import QuotedPrice from "../views/Purchase/QuotedPrice";
import Buyorder from "../views/Purchase/Buyorder";
import Sellorder from "../views/Purchase/Sellorder";
import Suppliers from "../views/Purchase/Suppliers";


const routes = [
  {
    path: "/ucenter",
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
    path: "/ucenter/account",//账户管理-我的账户
    name: "Account",
    component: Account,
    meta: {
      title: '我的账户'
    }
  },

  {
    path: "/ucenter/authentication",//账户管理-认证中心
    name: "Authentication",
    component: Authentication,
    props: (route) => ({ type: route.query.type*1 }),
    meta: {
      title: '认证中心'
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
    path: "/ucenter/suppliers",//我要采购-供应商库
    name: "Suppliers",
    component: Suppliers,
    meta: {
      title: '供应商库'
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
    path: "/ucenter/company",//我要销售-主页管理
    name: "Company",
    component: Company,
    meta: {
      title: '主业管理'
    }
  },
  {
    path: "/ucenter/myquote",
    name: "Myquote",
    component: Myquote,
    meta: {
      title: '我的报价'
    }
  },
 
 
  { 
    path: '/ucenter/*', 
    name:'notFound',
    component: NotFoundComponent,
    meta: {
      title: '404'
    } 
  }
 
];


const router = RouterCreator.create(routes);


export default router;
