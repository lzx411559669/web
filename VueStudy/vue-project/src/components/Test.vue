<template>
  <div>
    <input type="text" v-model="user.name" />
    {{ user }}
    <div></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  user: any;
  msg: string;
}>();
</script>

<style scoped></style>
