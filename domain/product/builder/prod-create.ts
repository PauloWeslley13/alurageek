import { ProductBuilder } from './module'

export class ProdCreate {
  private _id: ProductBuilder.ID
  private _name: ProductBuilder.Name
  private _description: ProductBuilder.Description
  private _price: ProductBuilder.Price
  private _category: ProductBuilder.Category
  private _url: ProductBuilder.Url

  get id(): ProductBuilder.ID {
    return this._id
  }

  set id(id: ProductBuilder.ID) {
    this._id = id
  }

  get name(): ProductBuilder.Name {
    return this._name
  }

  set name(name: ProductBuilder.Name) {
    this._name = name
  }

  get description(): ProductBuilder.Description {
    return this._description
  }

  set description(name: ProductBuilder.Description) {
    this._description = name
  }

  get price(): ProductBuilder.Price {
    return this._price
  }

  set price(price: ProductBuilder.Price) {
    this._price = price
  }

  get category(): ProductBuilder.Category {
    return this._category
  }

  set category(category: ProductBuilder.Category) {
    this._category = category
  }

  get url(): ProductBuilder.Url {
    return this._url
  }

  set url(url: ProductBuilder.Url) {
    this._url = url
  }
}
