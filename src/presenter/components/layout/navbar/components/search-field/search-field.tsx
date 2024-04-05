import { ChangeEvent, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/main/store/hook/useRedux'
import { resetSearch, searching } from '@/main/store/reducers'
import { InputBar } from '@/presenter/components/ui'

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
      placeholder="O que você quer procurar?"
      value={search}
      onChange={getSearch}
    />
  )
}
