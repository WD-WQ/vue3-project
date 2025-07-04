//对外暴露配置路由(常量路由)
export const constantRoute = [
  {
    //登录
    path: "/login",
    component: () => import("../views/login/index.vue"),
    name: "login", //命名路由，做权限的时候会用到
  },
  {
    //登陆成功展示数据
    path: "/",
    component: () => import("../layout/index.vue"),
    name: "layout", //命名路由，做权限的时候会用到
  },
  {
    //404
    path: "/404",
    component: () => import("../views/404/index.vue"),
    name: "404", //命名路由，做权限的时候会用到
  },
  {
    //任意路由
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
  },
];
