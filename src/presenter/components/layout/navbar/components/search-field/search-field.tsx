import OutlinedInput from '@mui/material/OutlinedInput'
import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment } from '@mui/material'
import { useSearchField } from './hook/useSearchField'

export const SearchField = () => {
  const { search, getSearch } = useSearchField()

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
