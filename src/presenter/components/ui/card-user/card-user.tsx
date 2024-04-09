import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useAppSelector } from '@/main/store/hook/useRedux'
import { FONTS } from '@/presenter/styles'
import { useAuth } from '@/presenter/hooks/useAuth'
import { Avatar, Button } from '../index'

type CardUserProps = { closeModal: () => void }

export const CardUser = ({ closeModal }: CardUserProps) => {
  const { user } = useAppSelector((state) => state.user)
  const { handleLogout } = useAuth()
  const navigate = useNavigate()

  return (
    <Card elevation={0} sx={{ maxWidth: 345, background: 'transparent' }}>
      <Stack alignItems="center" justifyContent="center">
        <Avatar
          user={user.username}
          src={user.photoUrl}
          sx={{ width: 75, height: 75 }}
        />
      </Stack>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2.5,
          textAlign: 'center',
        }}
      >
        <div>
          <Typography
            component="h2"
            variant="h4"
            color={(theme) => theme.palette.primary.main}
            fontSize={FONTS.fontSizes['2xl']}
            textTransform="capitalize"
          >
            {user.username}
          </Typography>
          <Typography
            gutterBottom
            component="span"
            variant="body1"
            color={(theme) => theme.palette.grey.A700}
          >
            {user.email}
          </Typography>
        </div>

        <div>
          <Button
            label="Painel Adm"
            sx={{ border: 'none' }}
            onClick={() => {
              navigate('/panel-adm')
              closeModal()
            }}
          />
        </div>
      </CardContent>
      <CardActions
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Button label="Logout" sx={{ border: 'none' }} onClick={handleLogout} />
      </CardActions>
    </Card>
  )
}
