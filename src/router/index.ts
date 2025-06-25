//通过vue-router实现路由配置
import { createRouter, createWebHashHistory } from "vue-router";
import { constantRoute } from "./routers";

//创建路由器
const router = createRouter({
  //路由模式
  history: createWebHashHistory(),
  routes: constantRoute,
  //滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});

export default router;
