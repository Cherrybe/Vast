import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import InsightView from "../views/InsightView.vue";
import FinanceTipsView from "../views/FinanceTipsView.vue";

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
    component: InsightView,
  },
  {
    path: "/financial-tips",
    name: "financial-tips",
    meta: { auth: true },
    component: FinanceTipsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
