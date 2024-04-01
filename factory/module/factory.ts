import { CartRepository } from './../../domain/cart'
import { ProductRepository } from '../../domain/product'
import { CategoryRepository } from '../../domain/category'
import { IFactory } from '../interfaces'

export namespace Factory {
  export class ProductFactory implements IFactory<ProductRepository> {
    add(data: ProductRepository): ProductRepository {
      return new ProductRepository(data)
    }
  }

  export class CategoryFactory implements IFactory<CategoryRepository> {
    add(data: CategoryRepository): CategoryRepository {
      return new CategoryRepository(data)
    }
  }

  export class CartFactory implements IFactory<CartRepository> {
    add(data: CartRepository): CartRepository {
      return new CartRepository(data)
    }
  }
}
