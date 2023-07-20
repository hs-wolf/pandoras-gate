import type { MiddlewareKey } from '~~/.nuxt/types/middleware'

export default defineNuxtRouteMiddleware((_to, from) => {
  const localeRoute = useLocaleRoute()
  const firebaseUser = useFirebase().user

  if (firebaseUser.value) {
    if (from.meta.middleware && (from.meta.middleware as MiddlewareKey[]).includes('offline'))
      return navigateTo(localeRoute({ name: 'index' }))
    return navigateTo(from)
  }
})
