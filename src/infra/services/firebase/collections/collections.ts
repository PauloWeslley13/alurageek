export enum COLLECTIONS {
  USERS = 'users',
  CARTS = 'carts',
  PRODUCTS = 'products',
  CATEGORIES = 'categories',
}

export const COLLECTION = {
  users: 'users',
  carts: 'carts',
  products: 'products',
  categories: 'categories',
} as const

export type CollectionsType = keyof typeof COLLECTION
