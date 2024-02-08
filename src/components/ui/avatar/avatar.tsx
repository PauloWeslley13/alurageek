import { ComponentProps } from 'react'
import MuiAvatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import * as S from './avatar-styles'

type AvatarProps = ComponentProps<typeof MuiAvatar> & {
  user: string
}

export const Avatar = ({ user, ...rest }: AvatarProps) => {
  return (
    <Stack direction="row" spacing={2}>
      <S.Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <S.Avatar {...rest} alt={user} src={user} />
      </S.Badge>
    </Stack>
  )
}
