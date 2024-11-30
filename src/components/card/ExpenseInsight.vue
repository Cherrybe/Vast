<template>
  <div
    class="flex flex-col p-4 rounded-lg border border-gray-300 shadow-sm bg-white w-full"
  >
    <p class="text-sm font-medium text-gray-500">{{ title }}</p>
    <p class="text-2xl font-bold text-gray-800 mt-2">{{ value }}</p>

    <!-- Percentage Change -->
    <div class="flex justify-between items-center gap-2 mt-4">
      <div class="flex items-center gap-2">
        <span
          class="flex items-center justify-center w-6 h-6 text-white rounded-full"
          :class="isPositive ? 'bg-green-500' : 'bg-red-500'"
        >
          {{ isPositive ? "↑" : "↓" }}
        </span>
        <p
          :class="isPositive ? 'text-green-500' : 'text-red-500'"
          class="text-sm font-medium"
        >
          {{ percentage }}
        </p>
      </div>
      <p class="text-xs text-gray-400 mt-1">Compared to last month</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  percentage: {
    type: String,
    required: true,
  },
  isPositive: {
    type: Boolean,
    required: true,
  },
});
</script>
