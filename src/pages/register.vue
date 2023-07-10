<script setup lang="ts">
import { object, string } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { PASSWORD_MINIMUM_LENGTH } from '~/utils'

const fields = {
  username: 'username',
  email: 'email',
  password: 'password',
  confirm: 'confirm',
}

const validationSchema = toTypedSchema(
  object({
    [fields.username]: string().min(1),
    [fields.email]: string().email(),
    [fields.password]: string().min(6),
    [fields.confirm]: string(),
  }).refine(data => data.password === data.confirm, {
    message: 'zod-errors.password-match',
    path: ['confirm'],
  }),
)

const { errors, handleSubmit } = useForm({ validationSchema })
const { value: usernameValue } = useField<string>(fields.username)
const { value: emailValue } = useField<string>(fields.email)
const { value: passwordValue } = useField<string>(fields.password)
const { value: confirmValue } = useField<string>(fields.confirm)

const onSubmit = handleSubmit(async (values) => {
  alert(values)
})
</script>

<template>
  <div class="page-scrollable">
    <h1 class="px-3 py-4 text-2xl font-semibold leading-none">
      {{ $t('pages.register.title') }}
    </h1>
    <div class="flex flex-col gap-4 px-3 py-4">
      <FormInput
        v-model="usernameValue"
        :name="fields.username"
        :placeholder="$t(`pages.register.form.${fields.username}`)"
        :error="errors[fields.username]"
        autocomplete="off"
        icon="user"
      />
      <FormInput
        v-model="emailValue"
        type="email"
        :name="fields.email"
        :placeholder="$t(`pages.register.form.${fields.email}`)"
        :error="errors[fields.email]"
        autocomplete="off"
        icon="email"
      />
      <FormInput
        v-model="passwordValue"
        type="password"
        :name="fields.password"
        :placeholder="$t(`pages.register.form.${fields.password}`)"
        :error="errors[fields.password]"
        :error-data="{ min: PASSWORD_MINIMUM_LENGTH }"
        autocomplete="off"
        icon="key"
      />
      <FormInput
        v-model="confirmValue"
        type="password"
        :name="fields.confirm"
        :placeholder="$t(`pages.register.form.${fields.confirm}`)"
        :error="errors[fields.confirm]"
        autocomplete="off"
        icon="key"
      />
      <button type="button" name="submit" class="btn-base btn-accent mt-4" @click.prevent="onSubmit">
        {{ $t('pages.register.submit') }}
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
