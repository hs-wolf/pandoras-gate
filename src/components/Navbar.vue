<script setup lang="ts">
import { useLocalesStore, useThemesStore } from '~/stores'
import type { AppLang } from '~/utils'
import { AppTheme } from '~/utils'

const { availableLocales, locale: currentLocale } = useI18n()
const localeRoute = useLocaleRoute()
const localesStore = useLocalesStore()
const themesStore = useThemesStore()
const { theme } = storeToRefs(themesStore)

const showSideMenu = ref(false)
const sideMenuRef = ref<HTMLElement | null>(null)
onClickOutside(sideMenuRef, () => closeSideMenu())

function closeSideMenu() {
  showSideMenu.value = false
}

function rotateLanguage() {
  const languageIndex = availableLocales.findIndex(locale => locale === currentLocale.value)
  let nextIndex = 0

  if (languageIndex >= 0)
    nextIndex = languageIndex + 1
  if (nextIndex >= availableLocales.length)
    nextIndex = 0

  localesStore.changeLocale(availableLocales[nextIndex] as AppLang)
}

function goToPage(name: string) {
  closeSideMenu()
  navigateTo(localeRoute({ name }))
}

const items = [
  {
    name: 'menu',
    icon: 'menu',
    enabled: true,
    action: () => (showSideMenu.value = !showSideMenu.value),
  },
  {
    name: 'home',
    icon: 'home',
    enabled: true,
    action: () => navigateTo(localeRoute({ name: 'index' })),
  },
  {
    name: 'characters',
    icon: 'group',
    enabled: true,
    action: () => navigateTo(localeRoute({ name: 'characters' })),
  },
]
</script>

<template>
  <div class="z-50 fixed inset-x-0 bottom-0 h-12 overflow-visible">
    <div class="buttons-container" style="grid-template-columns: repeat(items.length, minmax(0, 1fr))">
      <button v-for="item in items" :key="item.name" class="item-button" @click.prevent="item.action">
        <NuxtIcon :name="item.icon" />
      </button>
    </div>
    <Transition name="slide-left">
      <div v-if="showSideMenu" class="z-10 fixed inset-0 bg-primary-dark/50">
        <div ref="sideMenuRef" class="side-menu">
          <div class="flex justify-between text-2xl">
            <button @click.prevent="closeSideMenu">
              <NuxtIcon name="x-close" />
            </button>
            <button class="flex items-center gap-2" @click.prevent="rotateLanguage">
              <NuxtIcon name="language" />
              <NuxtIcon :name="`flags/${currentLocale}`" filled />
            </button>
            <button @click.prevent="themesStore.toggleTheme">
              <NuxtIcon :name="theme === AppTheme.DARK ? 'moon' : 'sun'" />
            </button>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button class="btn-base btn-accent" @click.prevent="goToPage('login')">
              {{ $t('components.login') }}
            </button>
            <button class="btn-base" :class="theme === AppTheme.LIGHT ? 'btn-primary' : 'btn-secondary'" @click.prevent="goToPage('register')">
              {{ $t('components.register') }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.buttons-container {
  @apply grid grid-flow-col divide-x-[1px] divide-secondary-light h-full bg-secondary shadow-inner;
  @apply dark:divide-primary-dark dark:bg-primary;
}
.item-button {
  @apply flex justify-center items-center text-2xl text-accent;
  @apply transition-colors active:bg-accent-dark active:text-secondary;
}
.side-menu {
  @apply flex flex-col gap-8 w-4/6 h-full px-3 py-4 bg-secondary dark:bg-primary overflow-y-scroll scrollbar-hide;
}
.language-menu {
  @apply absolute top-[calc(100%+1rem)] flex flex-col items-center gap-3 p-3 bg-secondary-light border border-secondary-dark rounded-sm;
  @apply dark:bg-primary-dark dark:border-primary-light;
}
</style>
