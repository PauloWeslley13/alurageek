export interface ICategory {
  id: string
  name: string
}

export class Category implements ICategory {
  public id: string
  public name: string

  constructor({ id, name }: ICategory) {
    this.id = id
    this.name = name
  }
}
