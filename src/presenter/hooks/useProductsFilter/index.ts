import { useMemo } from 'react'
import { useAppSelector } from '@/main/store/hook/useRedux'
import { useCategoryList } from '../useCategoryList'

export const useProductsFilter = () => {
  const { products } = useAppSelector((state) => state.products)
  const { categories } = useCategoryList()
  const search = useAppSelector((state) => state.search)

  const productsFilter = useMemo(() => {
    const regexp = new RegExp(search, 'i')
    return regexp
      ? products.filter((product) => product.name.match(regexp))
      : products
  }, [search, products])

  const { categoryByProduct } = useMemo(() => {
    const regexp = new RegExp(search, 'i')
    const categoriesByProducts = categories.map((category) => {
      const prodByCategory = products.filter((product) => {
        return product.categoryId === category.id && product.name.match(regexp)
      })

      return {
        ...category,
        products: regexp ? prodByCategory : [],
      }
    })

    return {
      categoryByProduct: categoriesByProducts,
    }
  }, [categories, products, search])

  return {
    categoryByProduct,
    productsFilter,
  }
}
