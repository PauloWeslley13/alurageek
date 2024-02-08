import { useMemo } from 'react'
import { useAppSelector } from '@/store/hook/useRedux'

export const useProducts = () => {
  const products = useAppSelector((state) => state.products)
  const search = useAppSelector((state) => state.search)

  const productsFilter = useMemo(() => {
    const regexp = new RegExp(search, 'i')
    const productsFiltered = products.filter((product) =>
      product.name.match(regexp),
    )

    return productsFiltered
  }, [search, products])

  return { productsFilter }
}
