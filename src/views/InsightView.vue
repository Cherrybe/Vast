<template>
  <div class="flex gap-4 h-fit mb-10">
    <div class="w-4/5">
      <RevenueInsight />
    </div>
    <div class="w-2/5">
      <ExpensesInsight />
    </div>
  </div>

  <div>
    <NetCashInsight />
  </div>
</template>

<script setup lang="ts">
import RevenueInsight from "../components/insights/RevenueInsight.vue";
import ExpensesInsight from "../components/insights/ExpensesInsight.vue";
import NetCashInsight from "../components/insights/NetCashInsight.vue";
</script>
