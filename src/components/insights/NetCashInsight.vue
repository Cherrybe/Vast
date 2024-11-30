<template>
  <div class="h-[27rem] rounded-md border border-gray-300 bg-white p-4 w-full">
    <div class="flex justify-between items-center gap-4">
      <p class="font-header font-semibold text-lg text-[#585858]">
        Monthly Net Cash Flow Over Time
      </p>
      <div>
        <FilterComponent />
      </div>
    </div>
    <div>
      <StatsDisplay
        label="Avg per month"
        value="1,250,00"
        percentage="12.45%"
        text-color="text-[#fd8720]"
      />
    </div>
    <div id="netInsight" class="h-[21rem] w-full"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import FilterComponent from "../FilterComponent.vue";
import StatsDisplay from "./StatsDisplay.vue";
import * as echarts from "echarts/core";
import { NetOptions } from "./insightCharts/NetCash";

onMounted(() => {
  const chartDom = document.getElementById("netInsight");
  if (chartDom) {
    const chart = echarts.init(chartDom);
    const option = NetOptions;
    chart.setOption(option);
  }
});
</script>
