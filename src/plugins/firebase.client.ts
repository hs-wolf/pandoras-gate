import type { FirebaseOptions } from 'firebase/app'
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import type { MiddlewareKey } from '../../.nuxt/types/middleware'
import { useAlertsStore } from '~/stores'

export default defineNuxtPlugin((_nuxtApp) => {
  const firebaseConfig = useRuntimeConfig().public.firebase as FirebaseOptions
  const firebaseApp = initializeApp(firebaseConfig)
  const firebaseAuth = getAuth(firebaseApp)
  const firestoreDB = getFirestore(firebaseApp)
  const route = useRoute()
  const localeRoute = useLocaleRoute()
  const pinia = usePinia()
  const alertsStore = useAlertsStore(pinia)

  onAuthStateChanged(firebaseAuth, async (user) => {
    try {
      useFirebase().user.value = user
      useFirebase().checked.value = true

      if (user) {
        if (route.query.redirect)
          return navigateTo(localeRoute({ path: route.query.redirect.toString() }))
        if (route.meta.middleware && (route.meta.middleware as MiddlewareKey[]).includes('offline'))
          return navigateTo(localeRoute({ name: 'index' }))
      }
      else {
        if (route.meta.middleware && (route.meta.middleware as string[]).includes('online'))
          return navigateTo(localeRoute({ name: 'login', query: { redirect: route.fullPath } }))
        if (route.query.redirect)
          return navigateTo(localeRoute({ path: route.query.redirect.toString() }))
      }
    }
    catch (error) {
      alertsStore.handleError(error)
    }
  })

  return {
    provide: {
      firebaseApp,
      firebaseAuth,
      firestoreDB,
    },
  }
})
