import { ProductBuilder } from '../module'
import { ProdCreate } from '../prod-create'

interface IBuilder {
  getProduct(): ProdCreate
  setName(name: ProductBuilder.Name): void
  setDescription(description: ProductBuilder.Description): void
  setPrice(price: ProductBuilder.Price): void
  setCategory(category: ProductBuilder.Category): void
  setUrl(url: ProductBuilder.Url): void
  setId(id: ProductBuilder.ID): void
}

export type { IBuilder }
