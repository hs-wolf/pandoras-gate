<script setup lang="ts">
defineProps<{ error?: string; errorData?: Record<string, unknown> }>()
</script>

<template>
  <Transition name="fade">
    <span v-if="error" class="relative self-end flex items-center p-1.5 bg-danger rounded-sm text-secondary">
      <p class="text-xs leading-none font-medium">{{ $t(error, { ...errorData }) }}</p>
      <div class="arrow-up" />
    </span>
  </Transition>
</template>

<style scoped>
.arrow-up {
  @apply absolute bottom-full w-0 h-0;
  @apply border-l-4 border-l-transparent;
  @apply border-r-4 border-r-transparent;
  @apply border-b-4 border-b-danger;
}
</style>
