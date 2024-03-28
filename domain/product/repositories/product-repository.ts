export class ProductRepository {
  public readonly id: string
  public name: string
  public description: string
  public price: string
  public category: string
  public url: string

  constructor(props: ProductRepository) {
    this.id = props.id
    this.name = props.name
    this.description = props.description
    this.price = props.price
    this.category = props.category
    this.url = props.url
  }
}
