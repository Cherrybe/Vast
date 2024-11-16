<template>
  <div :class="['p-4 rounded-lg shadow-md text-white', backgroundColor]">
    <div class="text-sm font-medium font-header opacity-80">{{ title }}</div>

    <div class="flex items-center space-x-14 3xl:space-x-40 mt-6">
      <slot name="icon"></slot>
      <div class="text-md font-semibold">{{ value }}</div>
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
  backgroundColor: {
    type: String,
    default: "bg-gradient-to-r from-pink-500 to-purple-500",
  },
});
</script>
