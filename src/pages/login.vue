<script setup lang="ts">
import { object, string } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { PASSWORD_MINIMUM_LENGTH } from '~/utils'

const fields = {
  email: 'email',
  password: 'password',
}

const validationSchema = toTypedSchema(
  object({
    [fields.email]: string().email(),
    [fields.password]: string().min(6),
  }),
)

const { errors, handleSubmit } = useForm({ validationSchema })
const { value: emailValue } = useField<string>(fields.email)
const { value: passwordValue } = useField<string>(fields.password)

const onSubmit = handleSubmit(async (values) => {
  alert(values)
})
</script>

<template>
  <div class="page-scrollable">
    <h1 class="px-3 py-4 text-2xl font-semibold leading-none">
      {{ $t('pages.login.title') }}
    </h1>
    <div class="flex flex-col gap-4 px-3 py-4">
      <FormInput
        v-model="emailValue"
        :name="fields.email"
        :placeholder="$t(`pages.login.form.${fields.email}`)"
        :error="errors[fields.email]"
        autocomplete="off"
        icon="user"
      />
      <FormInput
        v-model="passwordValue"
        type="password"
        :name="fields.password"
        :placeholder="$t(`pages.login.form.${fields.password}`)"
        :error="errors[fields.password]"
        :error-data="{ min: PASSWORD_MINIMUM_LENGTH }"
        autocomplete="off"
        icon="key"
      />
      <button type="button" name="submit" class="btn-base btn-accent mt-4" @click.prevent="onSubmit">
        {{ $t('pages.login.submit') }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.field {
  @apply flex flex-col gap-1.5;
}
.field-input {
  @apply flex px-2 py-1 text-primary-dark bg-secondary border border-secondary-dark rounded-sm outline-none;
}
.field-error {
  @apply text-xs text-danger;
}
</style>
