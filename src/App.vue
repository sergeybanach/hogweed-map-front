<script lang="ts" setup>
import MyHeader from "./components/Header.vue";
</script>

<template>
  <div>
    <MyHeader></MyHeader>

    <div><strong>Current route path:</strong> {{ $route.fullPath }}</div>
    <RouterView />
  </div>
</template>
