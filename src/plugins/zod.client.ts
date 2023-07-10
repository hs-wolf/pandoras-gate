import { z } from 'zod'

export default defineNuxtPlugin((_nuxtApp) => {
  const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
    if (issue.code === z.ZodIssueCode.invalid_type) {
      if (issue.expected === 'string' && issue.received === 'undefined')
        return { message: 'zod-errors.required' }
      if (issue.expected === 'number') {
        if (issue.received === 'undefined')
          return { message: 'zod-errors.required' }
        return { message: 'zod-errors.not-number' }
      }
      if (issue.expected === 'date') {
        if (issue.received === 'undefined')
          return { message: 'zod-errors.required' }
        return { message: 'zod-errors.not-date' }
      }
    }
    if (issue.code === z.ZodIssueCode.invalid_string) {
      if (issue.validation === 'email')
        return { message: 'zod-errors.email' }
    }
    if (issue.code === z.ZodIssueCode.too_small) {
      if (issue.type === 'string') {
        if (issue.minimum > 1)
          return { message: 'zod-errors.min' }
        return { message: 'zod-errors.required' }
      }
    }
    if (issue.code === z.ZodIssueCode.too_big) {
      if (issue.type === 'string')
        return { message: 'zod-errors.max' }
    }
    if (issue.code === z.ZodIssueCode.invalid_date)
      return { message: 'zod-errors.not-date' }
    return { message: ctx.defaultError }
  }
  z.setErrorMap(customErrorMap)
})
