<template>
  <n-dropdown :options="options">
    <div flex cursor-pointer items-center>
      <img src="/tauri.svg" class="mr10 h-35 w-35 rounded-full" />
      <span>admin</span>
    </div>
  </n-dropdown>
</template>

<script setup lang="ts">
import { renderIcon } from "@/utils";

const options = [
  {
    label: "Profile",
    key: "profile",
    icon: renderIcon("mdi-account-arrow-right-outline", { size: "14px" }),
  },
  {
    label: "Logout",
    key: "logout",
    icon: renderIcon("mdi:exit-to-app", { size: "14px" }),
  },
];
</script>
