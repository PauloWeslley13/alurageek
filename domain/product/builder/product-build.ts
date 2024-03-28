import { IBuilder } from './interfaces'
import { ProductBuilder } from './module'
import { ProdCreate } from './prod-create'

export class ProductBuild implements IBuilder {
  private prod = new ProdCreate()

  getProduct(): ProdCreate {
    const product: ProdCreate = this.prod
    return product
  }

  setId(id: ProductBuilder.ID): void {
    this.prod.id = id
  }

  setName(name: ProductBuilder.Name): void {
    this.prod.name = name
  }

  setDescription(description: ProductBuilder.Description): void {
    this.prod.description = description
  }

  setPrice(price: ProductBuilder.Price): void {
    this.prod.price = price
  }

  setCategory(category: ProductBuilder.Category): void {
    this.prod.category = category
  }

  setUrl(url: ProductBuilder.Url): void {
    this.prod.url = url
  }
}
