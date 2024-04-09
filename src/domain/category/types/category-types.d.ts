import { CategoryRepository } from '@/domain/category/repositories'

export namespace CategoryTypes {
  export type Data = CategoryRepository

  export type DataParams = Omit<CategoryRepository, 'id'>

  export type ListDataParams = CategoryRepository[]

  export type ReturnPromiseParams =
    | CategoryRepository
    | 'Categoria já cadastrada'
}
