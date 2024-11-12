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
      <div class="p-6">
        <!-- TODO: configure projust route -->
        <!-- <div>
          <router-link to="/"></router-link>
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" :key="Component" />
            </keep-alive>
          </router-view>
        </div> -->
        Something Something heresss
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import Dashboard from "./components/dashboard/Dashboard.vue";
import SideNavigation from "./components/navigation/SideNavigation.vue";
import TopNavigation from "./components/navigation/TopNavigation.vue";
</script>
