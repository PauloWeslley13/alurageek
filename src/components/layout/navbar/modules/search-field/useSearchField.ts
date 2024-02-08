import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schemaSearch = z.object({
  search: z.string(),
})

type SearchFieldProps = z.infer<typeof schemaSearch>

export const useSearchField = () => {
  const {
    register,
    formState: { errors },
  } = useForm<SearchFieldProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaSearch),
  })

  return {
    register,
    errors,
  }
}
