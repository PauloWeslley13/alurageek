import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@/main/store/hook/useRedux'
import { Format } from '@/domain/format'

const makeFormat = (): Format => new Format()

const useCardProduct = () => {
  const { isLogged } = useAppSelector((state) => state.user)
  const navigate = useNavigate()
  const format = makeFormat()

  return { navigate, format, isLogged }
}

export { useCardProduct }
