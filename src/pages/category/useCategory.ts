import { useAppSelector } from '@/store/hook/useRedux'
import { useParams } from 'react-router-dom'

export const useCategory = () => {
  const { categories } = useAppSelector((state) => state.categories)
  const { id } = useParams()
  console.log(categories)

  const cat = categories.find((c) => c.id === id)
  console.log(cat)

  return { categories, cat }
}
