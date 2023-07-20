import { collection } from 'firebase/firestore'
import { useNuxtApp } from 'nuxt/app'

export default defineEventHandler((event) => {
  const id = event.context.params?.id

  const db = useNuxtApp().
  const citiesRef = collection(db, 'cities')

  return {
    id, name: 'test',
  }
})
