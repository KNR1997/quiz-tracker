<template>
  <router-link h-60 f-c-c to="/">
    <!-- <icon-custom-logo text-36 color-primary></icon-custom-logo> -->
    <h2
      ml-2
      mr-8
      max-w-150
      flex-shrink-0
      text-16
      font-bold
      color-primary
    >
      {{ title }}
    </h2>
  </router-link>
</template>

<script setup>
const title = import.meta.env.VITE_TITLE

</script>
