import { z } from 'zod'

export const schemaCategory = z.object({
  name: z.string().min(1, { message: 'Informe o nome da categoria' }),
})
