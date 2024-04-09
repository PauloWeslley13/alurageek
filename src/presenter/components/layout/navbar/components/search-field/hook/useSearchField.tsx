import { ChangeEvent, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/main/store/hook/useRedux'
import { resetSearch, searching } from '@/main/store/reducers'

const useSearchField = () => {
  const search = useAppSelector((state) => state.search)
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()

  useEffect(() => {
    dispatch(resetSearch())
  }, [dispatch, pathname])

  const getSearch = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(searching(event.target.value))
  }

  return { search, getSearch }
}

export { useSearchField }
