import { Theme } from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useAppSelector } from '@/store/hook/useRedux'
import { Avatar, Button } from '../index'
import { FONTS } from '@/styles'
import { useAuth } from '@/hooks/useAuth'

export const CardUser = () => {
  const { user } = useAppSelector((state) => state.user)
  const { handleLogout } = useAuth()

  return (
    <Card elevation={0} sx={{ maxWidth: 345, background: 'transparent' }}>
      <Stack alignItems="center" justifyContent="center">
        <Avatar
          user={user.username}
          src={user.photoUrl}
          sx={{ width: 75, height: 75 }}
        />
      </Stack>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography
          gutterBottom
          component="h2"
          variant="h4"
          sx={{
            color: (theme: Theme) => theme.palette.primary.main,
            fontSize: FONTS.fontSizes['2xl'],
            textTransform: 'capitalize',
          }}
        >
          {user.username}
        </Typography>
        <Typography
          component="span"
          variant="body1"
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
