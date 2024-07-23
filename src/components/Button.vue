<template>
  <div
    @click="onClick"
    class="items-center justify-center py-2 px-4 bg-blue-800 text-white font-bold inline-flex rounded-md cursor-pointer active:bg-blue-700"
    :class="`${customClasses}`"
  >
    <slot>Button component</slot>
    <span class="material-symbols-outlined ml-2" v-if="materialIcon">
      {{ materialIcon }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["onClick", "customClasses", "materialIcon"]);
</script>
