<template>
  <div class="flex flex-col gap-4 w-full">
    <div v-for="option in options" :key="option.title">
      <ExpenseInsight
        :title="option.title"
        :value="option.value"
        :percentage="option.percentage"
        :isPositive="option.isPositive"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ExpenseInsight from "../card/ExpenseInsight.vue";

const options = [
  {
    title: "Total Income",
    value: "$32,499.93",
    percentage: "12.95%",
    isPositive: true,
  },
  {
    title: "Profit",
    value: "$10,499.93",
    percentage: "0.33%",
    isPositive: false,
  },
  {
    title: "Current Cash Balance",
    value: "$5,211,832",
    percentage: "12.95%",
    isPositive: true,
  },
];
</script>
