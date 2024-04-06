import { ChangeEvent, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import OutlinedInput from '@mui/material/OutlinedInput'
import SearchIcon from '@mui/icons-material/Search'
import { useAppDispatch, useAppSelector } from '@/main/store/hook/useRedux'
import { resetSearch, searching } from '@/main/store/reducers'
import { InputAdornment } from '@mui/material'

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
    <OutlinedInput
      size="small"
      type="text"
      placeholder="O que você quer procurar?"
      value={search}
      onChange={getSearch}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon color="primary" />
        </InputAdornment>
      }
    />
  )
}
