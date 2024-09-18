export interface IProduct {
  id: string
  name: string
  description: string
  categoryId: string
  price: number
  imageUrl: string
}

export class Product implements IProduct {
  public id: string
  public name: string
  public description: string
  public categoryId: string
  public price: number
  public imageUrl: string

  constructor(params: IProduct) {
    this.id = params.id
    this.name = params.name
    this.description = params.description
    this.categoryId = params.categoryId
    this.price = params.price
    this.imageUrl = params.imageUrl
  }
}
