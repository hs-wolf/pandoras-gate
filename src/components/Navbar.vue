<script setup lang="ts">
import { useThemesStore } from '~/stores'
import { AppTheme } from '~/utils'

const localeRoute = useLocaleRoute()
const themesStore = useThemesStore()
const { theme } = storeToRefs(themesStore)

const showSideMenu = ref(false)
const sideMenuRef = ref<HTMLElement | null>(null)

onClickOutside(sideMenuRef, () => {
  closeSideMenu()
})

function closeSideMenu() {
  showSideMenu.value = false
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
        <div ref="sideMenuRef" class="side-menu-card">
          <div class="flex justify-between text-2xl">
            <button @click.prevent="closeSideMenu">
              <NuxtIcon name="x-close" />
            </button>
            <button @click.prevent="themesStore.toggleTheme">
              <NuxtIcon :name="theme === AppTheme.DARK ? 'moon' : 'sun'" />
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
.side-menu-card {
  @apply flex flex-col w-4/5 h-full px-3 py-4 bg-secondary dark:bg-primary overflow-y-scroll scrollbar-hide;
}
</style>
