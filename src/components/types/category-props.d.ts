import { z } from 'zod'
import { schemaCategory } from '@/pages/panel-adm/modules/create-category/schema-category'

type CreateCategoryProps = z.infer<typeof schemaCategory>

type CategoryProps = CreateCategoryProps & {
  id: string
}

export type { CategoryProps, CreateCategoryProps }
