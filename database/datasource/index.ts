import { UserData } from './user-data'

export * from './user-data'
export * from './product-data'
export * from './category-data'
export * from './cart-data'

export namespace DataSource {
  export class UserDataSource {
    userData(): UserData {
      return new UserData()
    }
  }
}
