<template>
  <div class="flex items-center space-x-4 mb-5">
    <div
      :class="[
        'flex items-center justify-center w-8 h-8 rounded-full p-2',
        backgroundColor,
      ]"
    >
      <component :is="icon" :width="20" :height="20" />
    </div>
    <div>
      <h3 class="text-sm font-medium font-header text-gray-900 mb-1">
        {{ title }}
      </h3>
      <p class="text-xs text-gray-500 font-body">{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  backgroundColor: {
    type: String,
    default: "",
  },
  icon: Object,
});
</script>
