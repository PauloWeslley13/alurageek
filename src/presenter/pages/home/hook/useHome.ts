import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@/main/store/hook/useRedux'
import { useCategoryList } from '@/presenter/hooks/useCategoryList'

export function useHome() {
  const { products } = useAppSelector((state) => state.products)
  const { categories, isLoading } = useCategoryList()
  const search = useAppSelector((state) => state.search)
  const navigate = useNavigate()

  const searchingProducts = useMemo(() => {
    const regexp = new RegExp(search, 'i')

    const productsByCategory = categories.map((category) => {
      const productByCategory = products.filter(
        (product) =>
          product.categoryId === category.id && product.name.match(regexp),
      )

      return {
        ...category,
        products: productByCategory,
      }
    })

    return regexp
      ? productsByCategory.filter((category) => category.products.length > 0)
      : []
  }, [search, categories, products])

  return {
    navigate,
    categories,
    isLoading,
    searchingProducts,
  }
}
