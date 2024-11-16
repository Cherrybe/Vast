<template>
  <div
    id="revenueChart"
    class="h-96 rounded-md border border-gray-300 bg-white p-4 w-full"
  ></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { GridComponent } from "echarts/components";
import { lineOptions } from "./charts/Linechart";

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  GridComponent,
]);

onMounted(() => {
  const chartRevenue = document.getElementById("revenueChart");
  if (chartRevenue) {
    const chart = echarts.init(chartRevenue);
    const option = lineOptions;
    chart.setOption(option);
  }
});
</script>
