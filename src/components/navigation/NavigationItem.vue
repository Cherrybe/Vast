<template>
  <div
    class="flex items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer"
    :class="{ 'text-pink-500': active }"
  >
    <component :is="icon" class="w-6 h-6 mr-3" />
    <span
      class="text-lg font-body font-semibold"
      :class="{
        'bg-gradient-to-r from-[#280594] to-[#F8A39B] bg-clip-text text-transparent':
          active,
      }"
      >{{ label }}</span
    >
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  icon: [Object, String],
  label: String,
  active: { type: Boolean, default: false },
});
</script>
