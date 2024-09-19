import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@/main/store/hook/useRedux'
import { useFormatted } from '@/presenter/hooks/useFormatted'

export function useCardProduct() {
  const { isLoading } = useAppSelector((state) => state.products)
  const { user } = useAppSelector((state) => state.authentication)
  const {
    formatted: { priceMask },
  } = useFormatted()
  const navigate = useNavigate()

  const handlerNavProductDetail = (productId: string) => {
    navigate(`/product-detail/${productId}`)
  }

  return {
    user,
    isLoading,
    priceMask,
    handlerNavProductDetail,
  }
}
