<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <div class="w-64">
      <SideNavigation />
    </div>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col">
      <TopNavigation />

      <!-- Content -->
      <div
        class="w-[95%] mx-auto pb-4 box-border mt-[23px] h-screen overflow-hidden"
      >
        <div>
          <router-link to="/"></router-link>
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" :key="Component" />
            </keep-alive>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideNavigation from "./components/navigation/SideNavigation.vue";
import TopNavigation from "./components/navigation/TopNavigation.vue";
import Dashboard from "./components/dashboard/Dashboard.vue";
</script>

<style lang="scss">
body {
  overflow-y: hidden;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
