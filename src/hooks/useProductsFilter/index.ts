import { useMemo } from 'react'
import { useAppSelector } from '@/store/hook/useRedux'

export const useProductsFilter = () => {
  const { products, isLoading } = useAppSelector((state) => state.products)
  const { categories } = useAppSelector((state) => state.categories)
  const search = useAppSelector((state) => state.search)

  const productsFilter = useMemo(() => {
    const regexp = new RegExp(search, 'i')
    const productsFiltered = products.filter((product) =>
      product.name.match(regexp),
    )

    return productsFiltered
  }, [search, products])

  const { categoryByProduct } = useMemo(() => {
    const regexp = new RegExp(search, 'i')
    const categoriesByProducts = categories.map((category) => {
      const productList = products.filter(
        (product) =>
          product.category === category.name && product.name.match(regexp),
      )

      return {
        id: category.id,
        name: category.name,
        products: productList,
      }
    })

    return {
      categoryByProduct: categoriesByProducts,
    }
  }, [categories, products, search])

  return { categoryByProduct, productsFilter, isLoading }
}
