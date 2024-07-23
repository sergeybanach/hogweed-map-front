<template>
  <div>
    <table class="table-auto">
      <thead>
        <tr>
          <td class="font-bold">First</td>
          <td class="font-bold">Last</td>
          <td class="font-bold">Born</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td class="pr-6">{{ user.first }}</td>
          <td class="pr-6">{{ user.last }}</td>
          <td class="pr-6">{{ user.born }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["users"]);
</script>
