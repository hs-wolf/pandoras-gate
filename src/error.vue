<script setup lang="ts">
defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <div class="flex flex-col items-center">
    <h1>Error Page</h1>
    <p>{{ error?.message }}</p>
    <button @click="handleError" class="font-bold">Clear Error</button>
  </div>
</template>
