<template>
  <nav class="p-4 bg-white shadow-md">
    <div class="flex justify-end items-center space-x-4">
      <!-- Notification Icon -->
      <div class="relative">
        <BellIcon />
        <span
          class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"
        ></span>
      </div>

      <!-- Message Icon -->
      <div class="relative">
        <MailIcon />
        <span
          class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"
        ></span>
      </div>

      <!-- Settings Icon -->
      <div class="relative">
        <CogIcon />
        <span
          class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"
        ></span>
      </div>

      <!-- Profile Icon -->
      <div class="relative">
        <UserProfile
          initials="CV"
          widthSize="3rem"
          heightSize="3rem"
          textSize="text-lg"
        />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import BellIcon from "../../assets/icons/vue/BellIcon.vue";
import MailIcon from "../../assets/icons/vue/MailIcon.vue";
import CogIcon from "../../assets/icons/vue/SettingIcon.vue";
import UserProfile from "../UserProfile.vue";
</script>
