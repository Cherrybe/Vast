<template>
  <div class="flex gap-4 h-fit mb-10">
    <div class="w-3/5">
      <RevenueTrends />
    </div>
    <div class="w-2/5">
      <TopExpenses />
    </div>
  </div>

  <div>
    <ExpenseCard />
  </div>

  <div class="flex gap-4 h-fit mt-10">
    <div class="w-2/5">
      <FinancialTip />
    </div>
    <div class="w-3/5">
      <MonthlyNetCash />
    </div>
  </div>
</template>

<script setup lang="ts">
import ExpenseCard from "../components/dashboard/ExpenseCard.vue";
import TopExpenses from "../components/dashboard/TopExpenses.vue";
import RevenueTrends from "../components/dashboard/RevenueTrends.vue";
import MonthlyNetCash from "../components/dashboard/MonthlyNetCash.vue";
import FinancialTip from "../components/dashboard/FinancialTip.vue";
</script>
