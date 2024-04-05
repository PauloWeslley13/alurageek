import { useParams } from 'react-router-dom'
import { useAppSelector } from '@/main/store/hook/useRedux'

export const useCategory = () => {
  const { categories } = useAppSelector((state) => state.categories)
  const { id } = useParams()
  console.log(categories)

  const cat = categories.find((c) => c.id === id)
  console.log(cat)

  return { categories, cat }
}
