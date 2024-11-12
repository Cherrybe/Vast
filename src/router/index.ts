import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "../components/dashboard/Dashboard.vue";
import Insights from "../components/insights/Insights.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
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
