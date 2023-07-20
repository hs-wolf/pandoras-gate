<script setup lang="ts">
definePageMeta({ layout: 'empty' })

const localeRoute = useLocaleRoute()
const route = useRoute()

onBeforeMount(() => {
  if (!route.query.redirect)
    navigateTo(localeRoute({ name: 'index' }))
})
</script>

<template>
  <div class="page">
    <LoadingIcon />
  </div>
</template>
