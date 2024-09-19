import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAppSelector } from '@/main/store/hook/useRedux'
import { useCategoryList } from '@/presenter/hooks/useCategoryList'
import { useSelectorProducts } from '@/main/store/ducks/products'

export function useHome() {
  const [categoryParams, setCategoryParams] = useSearchParams()
  const [menuCategory, setMenuCategory] = useState('')
  const { products, isLoading: productIsLoading } =
    useAppSelector(useSelectorProducts)
  const { categories, isLoading } = useCategoryList()
  const search = useAppSelector((state) => state.search)
  const navigate = useNavigate()

  useEffect(() => {
    setMenuCategory('Caneca')
  }, [])

  const productsByCategory = useMemo(() => {
    const categoryId = categoryParams.get('categoryId')
    const regexp = new RegExp(search, 'i')

    const productByCategory = products.filter(
      (product) =>
        product.categoryId === categoryId && product.name.match(regexp),
    )

    return regexp ? productByCategory : []
  }, [search, products, categoryParams])

  function handleMenuNavigate(value: string, categoryId: string) {
    setMenuCategory(value)
    setCategoryParams((state) => {
      if (categoryId) {
        state.set('categoryId', categoryId)
      } else {
        state.delete('categoryId')
      }

      return state
    })
  }

  return {
    categories,
    isLoading,
    productsByCategory,
    productIsLoading,
    menuCategory,
    navigate,
    handleMenuNavigate,
  }
}
