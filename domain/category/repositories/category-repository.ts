export class CategoryRepository {
  public readonly id: string
  public name: string

  constructor(props: CategoryRepository) {
    this.id = props.id
    this.name = props.name
  }
}
