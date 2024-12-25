import Layout from "@/components/MainLayout.vue";

const Dashboard = () =>
  import(/* webpackChunkName: "DashBoard" */ "../components/DashBoard.vue");

export const adminRoutes = [
  {
    path: "/admin",
    component: Layout,
    children: [
      {
        path: "dashboard",
        component: Dashboard,
      },
    ],
  },
];
