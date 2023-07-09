<script setup lang="ts">
const { t } = useI18n()

useHead({ title: t('pages.characters.title') })
</script>

<template>
  <div class="page gap-4">
    <div class="flex flex-col gap-4 px-3 py-4">
      <h1 class="text-2xl font-semibold leading-none">
        {{ $t('pages.characters.your-characters') }}
      </h1>
      <div class="flex flex-col">
        <button class="flex items-center gap-2 bg-secondary dark:bg-primary shadow-sm rounded-sm transition-all active:scale-95">
          <NuxtImg
            src="https://i.pinimg.com/originals/9c/d1/e5/9cd1e53efc6eb863ee2480758c6bd124.jpg"
            width="80"
            height="80"
            class="rounded-sm shadow"
          />
          <div class="flex flex-col items-start gap-2">
            <p class="font-semibold leading-none">
              Tai Lung
            </p>
            <p class="text-sm leading-none">
              Nv 1, Grau 2
            </p>
            <p class="text-sm leading-none">
              Taoísta, Miku, Linker
            </p>
          </div>
        </button>
      </div>
      <button class="btn-base btn-accent self-end">
        {{ $t('pages.characters.new-character') }}
      </button>
    </div>
    <div class="flex flex-col gap-4 px-3 py-4">
      <h2 class="text-xl leading-none">
        {{ $t('pages.characters.other-characters') }}
      </h2>
      <div class="flex flex-col">
        <button class="flex items-center gap-2 bg-secondary dark:bg-primary shadow-sm rounded-sm transition-all active:scale-95">
          <NuxtImg
            src="https://i.pinimg.com/originals/9c/d1/e5/9cd1e53efc6eb863ee2480758c6bd124.jpg"
            width="64"
            height="64"
            class="rounded-sm shadow"
          />
          <div class="flex flex-col items-start gap-2">
            <p class="text-sm font-semibold leading-none">
              Tai Lung
            </p>
            <p class="text-xs leading-none">
              Nv 1, Grau 2
            </p>
            <p class="text-xs leading-none">
              Taoísta, Miku, Linker
            </p>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
