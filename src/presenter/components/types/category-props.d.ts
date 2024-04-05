import { z } from 'zod'
import { schemaCategory } from '@/presenter/pages/panel-adm/modules/create-category'

type CreateCategoryProps = z.infer<typeof schemaCategory>

type CategoryProps = CreateCategoryProps & {
  id: string
}

export { CategoryProps, CreateCategoryProps }
