import { ProductRepository } from './../repositories'
import { IBuilder } from './interfaces'
import { ProductBuilder } from './module'

export class AddProduct {
  constructor(private builder: IBuilder) {}

  product(data: ProductRepository) {
    this.builder.setId(new ProductBuilder.ID(data.id))
    this.builder.setName(new ProductBuilder.Name(data.name))
    this.builder.setDescription(
      new ProductBuilder.Description(data.description),
    )
    this.builder.setPrice(new ProductBuilder.Price(data.price))
    this.builder.setCategory(new ProductBuilder.Category(data.category))
    this.builder.setUrl(new ProductBuilder.Url(data.url))
  }
}
