const Login = () =>
  import(/* webpackChunkName: "Login" */ "../components/Login.vue");

// 展示扩展屏幕等硬件设备信息
export const loginRoutes = [
  {
    path: "/login",
    component: Login,
  },
];
