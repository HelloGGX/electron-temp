import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { loginRoutes } from "@/features/login";
import { adminRoutes } from "@/features/admin";

// 合并所有路由
const routes: RouteRecordRaw[] = [...loginRoutes, ...adminRoutes];

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  scrollBehavior(to) {
    if (to.hash) {
      // 如果目标路由有hash，滚动到对应的元素
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    // 否则滚动到页面顶部
    return {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
});

export default router;
