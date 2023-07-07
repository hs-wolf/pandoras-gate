<script setup lang="ts">
import { useLocalesStore } from '~/stores'

const localesStore = useLocalesStore()
const { direction } = storeToRefs(localesStore)
</script>

<template>
  <div :dir="direction" class="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style scoped>
.app {
  @apply fixed inset-0 flex flex-col bg-secondary-light text-primary;
  @apply dark:bg-primary-dark dark:text-secondary;
}
</style>
