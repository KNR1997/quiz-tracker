<template>
  <div flex items-center>
    <MenuCollapse />
  </div>
  <div ml-auto flex items-center>
    <Languages />
    <ThemeMode />
    <GithubSite />
    <UserAvatar />
  </div>
</template>

<script setup>
import MenuCollapse from "./components/MenuCollapse.vue";
import Languages from "./components/Languages.vue";
import UserAvatar from './components/UserAvatar.vue'
import ThemeMode from './components/ThemeMode.vue'
import GithubSite from './components/GithubSite.vue'

</script>
