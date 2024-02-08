import { useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/hook/useRedux'
import { InputBar } from '@/components/ui'
import { ChangeEvent, useEffect } from 'react'
import { resetSearch, searching } from '@/store/reducers'

export const SearchField = () => {
  const search = useAppSelector((state) => state.search)
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()

  useEffect(() => {
    dispatch(resetSearch())
  }, [dispatch, pathname])

  const getSearch = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(searching(event.target.value))
  }

  return (
    <InputBar
      type="text"
      placeholder="¿Qué deseas buscar?"
      value={search}
      onChange={getSearch}
    />
  )
}
