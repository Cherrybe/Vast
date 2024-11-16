<template>
  <div
    id="expenseChart"
    class="h-96 rounded-md border border-gray-300 bg-white p-4 w-full"
  ></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { doughnutOptions } from "./charts/Doughnut";
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
]);

onMounted(() => {
  const chartContainer = document.getElementById("expenseChart");
  if (chartContainer) {
    const chart = echarts.init(chartContainer);
    const option = doughnutOptions;
    chart.setOption(option);
  }
});
</script>
