import RouterCreator from '@src/utils/enhanceRouter';

import Login from "../views/Admin/Login.vue";
import Register from "../views/Admin/Register.vue";
import Member from "../views/Admin/Member.vue";
import Buyorder from "../views/Buy/Buyorder.vue";
import Release from "../views/Buy/Release.vue";

const routes = [
  {
    path: "/ucenter/login",
    name: "Login",
    component: Login,
    meta: {
      title: '登录'
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
    path: "/ucenter/release",//会员我要采购
    name: "release",
    component: Release,
    meta: {
      title: '我要采购'
    }
  },
  {
    path: "/ucenter/buyorder",//会员我要采购订单
    name: "buyorder",
    component: Buyorder,
    meta: {
      title: '我要采购'
    }
  },
  {
    path: "/ucenter/Register",//注册
    name: "Register",
    component: Register,
    meta: {
      title: '会员注册'
    }
  }
];

const router = RouterCreator.create(routes);

export default router;
