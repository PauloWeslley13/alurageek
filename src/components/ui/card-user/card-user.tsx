import { Theme } from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useAppDispatch, useAppSelector } from '@/store/hook/useRedux'
import { logout } from '@/store/reducers'
import { Avatar, Button } from '../index'

export function CardUser() {
  const { user } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  console.log(user)

  const handleLogout = () => dispatch(logout())

  return (
    <Card elevation={0} sx={{ maxWidth: 345, background: 'transparent' }}>
      <Stack alignItems="center" justifyContent="center">
        <Avatar user={user.username} sx={{ width: 56, height: 56 }} />
      </Stack>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography
          gutterBottom
          variant="h5"
          component="h4"
          sx={{ color: (theme: Theme) => theme.palette.primary.main }}
        >
          {user.username}
        </Typography>
        <Typography
          component="span"
          variant="body2"
          sx={{ color: (theme: Theme) => theme.palette.grey.A700 }}
        >
          {user.email}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Button label="Logout" sx={{ border: 'none' }} onClick={handleLogout} />
      </CardActions>
    </Card>
  )
}
