import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Admin/Login.vue";
import Member from "../views/Admin/Member.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/member",
    name: "Member",
    component: Member
  },
];

const router = new VueRouter({
  routes
});

export default router;
