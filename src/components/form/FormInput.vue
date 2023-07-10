<script setup lang="ts">
const props = defineProps<{
  type?: string
  name: string
  modelValue?: string
  placeholder?: string
  maxlength?: number
  autocomplete?: 'on' | 'off'
  disabled?: boolean
  error?: string
  errorData?: Record<string, unknown>
  icon?: string
}>()
defineEmits<{ (e: 'update:modelValue'): void }>()

const showPassword = ref(false)

const finalType = computed(() => {
  return props.type === 'password' ? (showPassword.value ? 'text' : 'password') : props.type
})
</script>

<template>
  <div class="flex flex-col gap-2" :class="{ 'opacity-50 pointer-events-none': disabled }">
    <div class="input-wrapper">
      <div v-if="icon" class="shrink-0 flex justify-center items-center pointer-events-none">
        <NuxtIcon :name="icon" filled />
      </div>
      <input
        :type="finalType"
        :name="name"
        :placeholder="placeholder"
        :value="modelValue"
        :maxlength="maxlength"
        :autocomplete="autocomplete"
        class="flex items-center w-full h-full bg-transparent outline-none placeholder:text-primary-light/50 dark:placeholder:text-secondary-dark/50"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      >
      <button
        v-if="type === 'password'"
        class="shrink-0 flex justify-center items-center text-xl transition-transform active:scale-90"
        @click.prevent="showPassword = !showPassword"
      >
        <NuxtIcon v-if="showPassword" name="eye-open" />
        <NuxtIcon v-else name="eye-closed" />
      </button>
    </div>
    <FormErrorMessage :error="error" :error-data="errorData" />
  </div>
</template>

<style scoped>
.input-wrapper {
  @apply relative flex items-center gap-2 px-2 py-1.5 border border-secondary-dark bg-secondary rounded-sm text-primary;
  @apply dark:bg-primary dark:text-secondary dark:border-primary-light;
}
</style>
