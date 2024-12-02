<template>
  <aside class="w-64 h-screen bg-white">
    <!-- Logo Section -->
    <div
      class="flex items-center justify-center h-20 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold"
    >
      <img
        src="../../assets/icons/svg/LogoIcon.svg"
        alt="Logo"
        class="w-8 h-8 mr-2"
      />
      <span class="text-3xl font-header font-semibold">Vast</span>
    </div>

    <!-- Menu Items -->
    <nav class="flex flex-col p-4 space-y-2">
      <NavigationItem
        :icon="DashboardIcon"
        :item="{ route: '/', label: 'Dashboard' }"
      />
      <NavigationItem
        :icon="InsightIcon"
        :item="{ route: '/insights', label: 'Insights' }"
      />
      <NavigationItem
        :icon="TipIcon"
        :item="{ route: '/financial-tips', label: 'Financial Tips' }"
      />
    </nav>
  </aside>
</template>

<script setup lang="ts">
import NavigationItem from "./NavigationItem.vue";
import DashboardIcon from "../../assets/icons/vue/DashboardIcon.vue";
import InsightIcon from "../../assets/icons/vue/InsightIcon.vue";
import TipIcon from "../../assets/icons/vue/TipIcon.vue";
</script>
