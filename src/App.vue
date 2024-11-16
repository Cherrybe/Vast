<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <div class="w-64">
      <SideNavigation />
    </div>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col">
      <TopNavigation />

      <div
        class="w-[95%] mx-auto pb-4 mt-[23px] h-screen overflow-y-auto hide-scrollbar"
      >
        <router-link to="/"></router-link>
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" :key="Component" />
          </keep-alive>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideNavigation from "./components/navigation/SideNavigation.vue";
import TopNavigation from "./components/navigation/TopNavigation.vue";
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
