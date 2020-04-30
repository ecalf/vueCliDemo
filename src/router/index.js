import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Admin/Login.vue";
import Member from "../views/Admin/Member.vue";
import Release from "../views/Buy/Release.vue";
import Buyorder from "../views/Buy/Buyorder.vue";
import Register from "../views/Admin/Register.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",//首页
    name: "Home",
    component: Home
  },
  {
    path: "/login",//登录
    name: "Login",
    component: Login
  },
  {
    path: "/member",//会员个人中心
    name: "Member",
    component: Member
  },
  {
    path: "/buy/release",//会员我要采购
    name: "release",
    component: Release
  },
  {
    path: "/buy/buyorder",//会员我要采购订单
    name: "buyorder",
    component: Buyorder
  },
  {
    path: "/Register",//注册
    name: "Register",
    component: Register
  },
];

const router = new VueRouter({
  routes
});

export default router;
