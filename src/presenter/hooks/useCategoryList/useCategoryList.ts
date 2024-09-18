import { useEffect } from 'react'
import { loadCategories } from '@/main/store/ducks/category'
import { useAppDispatch, useAppSelector } from '@/main/store/hook/useRedux'

export function useCategoryList() {
  const { categories, isLoading } = useAppSelector((state) => state.categories)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadCategories())
  }, [dispatch])

  return { categories, isLoading }
}
