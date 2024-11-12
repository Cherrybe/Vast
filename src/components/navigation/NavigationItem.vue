<template>
  <RouterLink :to="`${item?.route}`" class="">
    <div
      class="flex items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer"
      :class="$route.path === `${item?.route}` ? 'text-pink-500' : ''"
    >
      <component :is="icon" class="w-6 h-6 mr-3" />
      <span
        class="text-lg font-body font-semibold"
        :class="
          $route.pathe === `${route}`
            ? 'bg-gradient-to-r from-[#280594] to-[#F8A39B] bg-clip-text text-transparent'
            : ''
        "
        >{{ item?.label }}</span
      >
    </div>
  </RouterLink>
</template>

<script setup>
import { useRouter } from "vue-router";
import { defineProps } from "vue";

const props = defineProps({
  icon: [Object, String],
  label: String,
  route: String,
  item: {},
});
</script>
