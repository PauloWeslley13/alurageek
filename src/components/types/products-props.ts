import { z } from 'zod'

export const schemaProduct = z.object({
  name: z.string().min(1, { message: 'Informe o nome do produto' }),
  description: z
    .string()
    .min(1, { message: 'Informe a descripción do produto' }),
  price: z.string().min(1, { message: 'Informe o precio do produto' }),
  categoria: z.string().min(1, { message: 'Informe o categoria do produto' }),
  url: z.string().url('Informe uma url valida'),
})

export type SchemaProductProps = z.infer<typeof schemaProduct>

export type ProductsProps = SchemaProductProps & {
  id: string
}
