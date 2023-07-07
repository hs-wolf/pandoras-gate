import { AppTheme, THEMES_STORE_ID, THEME_STORAGE_KEY } from '~/utils'
import { useAlertsStore } from '~/stores'

interface IState {
  theme: AppTheme
}

export const useThemesStore = defineStore(THEMES_STORE_ID, {
  state: (): IState => ({
    theme: AppTheme.LIGHT,
  }),
  getters: {},
  actions: {
    toggleTheme() {
      if (this.theme === AppTheme.DARK)
        this.changeTheme(AppTheme.LIGHT)
      else
        this.changeTheme(AppTheme.DARK)
    },
    changeTheme(theme: AppTheme) {
      this.theme = theme
      if (theme === AppTheme.DARK)
        document.documentElement.classList.add('dark')
      else
        document.documentElement.classList.remove('dark')
      this.saveTheme(theme)
    },
    saveTheme(theme: AppTheme) {
      try {
        localStorage.setItem(THEME_STORAGE_KEY, theme)
      }
      catch (error) {
        useAlertsStore().handleError(error)
      }
    },
    loadTheme() {
      let storageTheme = localStorage.getItem(THEME_STORAGE_KEY)
      if (!storageTheme || storageTheme === 'null') {
        if (window.matchMedia(`(prefers-color-scheme: ${AppTheme.DARK})`).matches)
          storageTheme = AppTheme.DARK
        else
          storageTheme = AppTheme.LIGHT
      }
      this.changeTheme(storageTheme as AppTheme)
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useThemesStore, import.meta.hot))
