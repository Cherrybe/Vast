import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import Insights from "../components/insights/Insights.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/insights",
    name: "insights",
    meta: { auth: true },
    component: Insights,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
