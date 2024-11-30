<template>
  <div class="flex items-center gap-2">
    <button
      v-for="(option, index) in props.options"
      :key="index"
      @click="setActive(option)"
      :class="[
        'px-4 py-1 rounded-full border-2 transition-colors text-sm font-body',
        option === active
          ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold'
          : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-100',
      ]"
    >
      {{ option }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  options: {
    type: Array as () => string[],
    default: () => ["1 Year", "6 Months", "3 Months", "All"],
  },
  defaultValue: {
    type: String,
    default: "1 Year",
  },
});

const active = ref<string>(props.defaultValue);

const setActive = (option: string) => {
  active.value = option;
};
</script>
