import { useLocalesStore, useThemesStore } from '~/stores'

export default defineNuxtPlugin(({ hook }) => {
  hook('app:created', () => {
    const pinia = usePinia()
    const localesStore = useLocalesStore(pinia)
    const themesStore = useThemesStore(pinia)

    localesStore.loadLocale()
    themesStore.loadTheme()
  })
})
