import type { FirebaseOptions } from 'firebase/app'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin((_nuxtApp) => {
  const firebaseConfig = useRuntimeConfig().public.firebase as FirebaseOptions
  const app = initializeApp(firebaseConfig)

  const auth = getAuth(app)
  const firestore = getFirestore(app)

  return {
    provide: {
      auth,
      firestore,
    },
  }
})
