export namespace ProductBuilder {
  export class ID {
    constructor(private _id: string) {}

    get id(): string {
      return this._id
    }

    set id(id: string) {
      this._id = id
    }
  }

  export class Name {
    constructor(private _name: string) {}

    get name(): string {
      return this._name
    }

    set name(name: string) {
      this._name = name
    }
  }

  export class Description {
    constructor(private _description: string) {}

    get description(): string {
      return this._description
    }

    set description(description: string) {
      this._description = description
    }
  }

  export class Price {
    constructor(private _price: string) {}

    get price(): string {
      return this._price
    }

    set price(price: string) {
      this._price = price
    }
  }

  export class Category {
    constructor(private _category: string) {}

    get category(): string {
      return this._category
    }

    set category(category: string) {
      this._category = category
    }
  }

  export class Url {
    constructor(private _url: string) {}

    get url(): string {
      return this._url
    }

    set url(url: string) {
      this._url = url
    }
  }
}
