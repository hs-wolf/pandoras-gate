import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useAlertsStore } from '~/stores'
import type { UserRegisterParams } from '~/utils'
import { USER_STORE_ID } from '~/utils'

interface IState {
  logging: boolean
  loggingOut: boolean
  registering: boolean
}

export const useUserStore = defineStore(USER_STORE_ID, {
  state: (): IState => ({
    logging: false,
    loggingOut: false,
    registering: false,
  }),
  getters: {},
  actions: {
    async login(email: string, password: string) {
      try {
        if (this.logging)
          return
        this.logging = true

        const auth = useNuxtApp().$auth
        if (!auth)
          return

        await signInWithEmailAndPassword(auth, email, password)
      }
      catch (error) {
        useAlertsStore().handleError(error)
      }
      finally {
        this.logging = false
      }
    },
    async logout() {
      try {
        if (this.loggingOut)
          return
        this.loggingOut = true

        const auth = useNuxtApp().$auth
        if (!auth)
          return

        await signOut(auth)
      }
      catch (error) {
        useAlertsStore().handleError(error)
      }
      finally {
        this.loggingOut = false
      }
    },
    async register(body: UserRegisterParams, password: string) {
      try {
        if (this.registering)
          return
        this.registering = true

        await this.login(body.email, password)
      }
      catch (error) {
        useAlertsStore().handleError(error)
      }
      finally {
        this.registering = false
      }
    },
    async getUser(id: string) {
      try {
        const data = useFetch(`/api/user/${id}`)
        return data
      }
      catch (error) {
        useAlertsStore().handleError(error)
      }
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
