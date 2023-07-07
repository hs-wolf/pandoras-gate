import { ALERTS_STORE_ID } from '~/utils'

interface IState {}

export const useAlertsStore = defineStore(ALERTS_STORE_ID, {
  state: (): IState => ({}),
  getters: {},
  actions: {
    handleError(error: unknown) {
      console.error('🛑 ERROR:', error)
    },
    handleWarning(error: unknown) {
      // eslint-disable-next-line no-console
      console.log('⚠️ WARNING:', error)
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAlertsStore, import.meta.hot))
