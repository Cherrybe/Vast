<template>
  <div class="h-[27rem] rounded-md border border-gray-300 bg-white p-4 w-full">
    <h3 class="font-header font-semibold text-lg mb-3 text-[#3a3a3a]">
      Finanical Tip
    </h3>

    <div v-for="tip in TipData" :key="tip.title">
      <FinanceCard
        :title="tip.title"
        :text="tip.text"
        :backgroundColor="tip.backgroundColor"
        :icon="tip.icon"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import FinanceCard from "../card/FinanceCard.vue";
import { TipData } from "../card/cardDummydata/FinanceData";
</script>
