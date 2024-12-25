import Layout from "@/components/Layout.vue";

const Dashboard = () =>
  import(/* webpackChunkName: "Dashboard" */ "../components/Dashboard.vue");

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
