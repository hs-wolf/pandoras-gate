export default defineNuxtRouteMiddleware((to, _from) => {
  const localeRoute = useLocaleRoute()
  const firebaseUser = useFirebase().user
  const firebaseChecked = useFirebase().checked

  if (!firebaseUser.value) {
    if (!firebaseChecked.value)
      return navigateTo(localeRoute({ name: 'loading', query: { redirect: to.fullPath } }))
    return navigateTo(localeRoute({ name: 'login', query: { redirect: to.fullPath } }))
  }
})
