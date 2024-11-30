<template>
  <div class="flex flex-col items-start">
    <!-- Label with Indicator -->
    <div class="flex items-center gap-2">
      <span
        v-if="indicatorColor"
        class="w-2 h-2 rounded-full"
        :class="indicatorColor"
      ></span>
      <p class="text-sm text-gray-500">{{ label }}</p>
    </div>
    <!-- Value and Percentage -->
    <div class="flex items-center gap-2 mt-2">
      <p class="text-lg font-bold text-[#585858]">{{ value }}</p>
      <p class="text-sm text-gray-500 pl-1" :class="textColor">
        {{ percentage }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
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
  indicatorColor: {
    type: String,
  },
  textColor: {
    type: String,
    default: "text-[#585858]",
  },
});
</script>
