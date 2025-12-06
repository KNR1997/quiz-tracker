<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import AppProvider from "@/components/common/AppProvider.vue";

const route = useRoute();

const layout = computed(() => {
  const name = route.meta.layout || "Default";
  return name === "Auth" ? AuthLayout : DefaultLayout;
});
</script>

<template>
  <!-- <component :is="layout">
    <router-view />
  </component> -->
  <AppProvider>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </AppProvider>
</template>
