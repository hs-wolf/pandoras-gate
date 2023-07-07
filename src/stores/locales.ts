import { AppDirection, AppLang, LOCALES_STORE_ID, LOCALE_STORAGE_KEY } from '~/utils'
import { useAlertsStore } from '~/stores'

interface IState {
  direction: AppDirection
  rtlList: AppLang[]
}

export const useLocalesStore = defineStore(LOCALES_STORE_ID, {
  state: (): IState => ({
    direction: AppDirection.LTR,
    rtlList: [],
  }),
  getters: {},
  actions: {
    changeLocale(locale: AppLang) {
      this.saveLocale(locale)
      this.rtlList.includes(locale) ? (this.direction = AppDirection.RTL) : (this.direction = AppDirection.LTR)
      const switchLocalePath = useSwitchLocalePath()
      navigateTo(switchLocalePath(locale))
    },
    saveLocale(locale: AppLang) {
      try {
        localStorage.setItem(LOCALE_STORAGE_KEY, locale)
      }
      catch (error) {
        useAlertsStore().handleError(error)
      }
    },
    loadLocale() {
      let value = localStorage.getItem(LOCALE_STORAGE_KEY)
      if (!value || value === 'null')
        value = AppLang.EN
      this.changeLocale(value as AppLang)
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLocalesStore, import.meta.hot))
