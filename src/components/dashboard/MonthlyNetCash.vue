<template>
  <div
    id="netChart"
    class="h-[27rem] rounded-md border border-gray-300 bg-white p-4 w-full"
  ></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import * as echarts from "echarts/core";
import { barChartOptions } from "./charts/Barchart";

onMounted(() => {
  const chartNet = document.getElementById("netChart");
  if (chartNet) {
    const chart = echarts.init(chartNet);
    const option = barChartOptions;
    chart.setOption(option);
  }
});
</script>
