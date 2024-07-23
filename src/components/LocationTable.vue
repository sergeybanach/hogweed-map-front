<template>
  <div>
    <table class="table-auto">
      <thead>
        <tr>
          <td class="font-bold">Lng</td>
          <td class="font-bold">Lat</td>
          <td class="font-bold">Description</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="location in locations">
          <td class="pr-6">{{ location.lng }}</td>
          <td class="pr-6">{{ location.lat }}</td>
          <td class="pr-6">{{ location.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["locations"]);
</script>
