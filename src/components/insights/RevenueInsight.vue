<template>
  <div class="h-[27rem] rounded-md border border-gray-300 bg-white p-4 w-full">
    <div class="flex justify-between items-center gap-4">
      <p class="font-header font-semibold text-lg text-[#585858]">
        Revenue and Expense Over Time
      </p>
      <div>
        <FilterComponent />
      </div>
    </div>

    <div class="flex gap-8 items-center mt-4">
      <div v-for="option in options" :key="option.label" class="flex-shrink-0">
        <StatsDisplay
          :label="option.label"
          :value="option.value"
          :percentage="option.percentage"
          :indicatorColor="option.indicatorColor"
        />
      </div>
    </div>

    <div id="revenueInsight" class="h-[21rem] w-full"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import FilterComponent from "../FilterComponent.vue";
import StatsDisplay from "./StatsDisplay.vue";
import * as echarts from "echarts/core";
import { RevenueExpenseOptions } from "./insightCharts/RevenueChart";

onMounted(() => {
  const revenueInsight = document.getElementById("revenueInsight");
  if (revenueInsight) {
    const chart = echarts.init(revenueInsight);
    const options = RevenueExpenseOptions;
    chart.setOption(options);
  }
});

const options = [
  {
    label: "Total Revenue",
    value: "₵32,839.99",
    percentage: "55%",
    indicatorColor: "bg-green-500",
  },
  {
    label: "Total Expense",
    value: "₵30,932.12",
    percentage: "45%",
    indicatorColor: "bg-orange-500",
  },
];
</script>
