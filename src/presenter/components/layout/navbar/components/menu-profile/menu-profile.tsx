import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { Avatar, Dialog, CardUser } from '@/presenter/components/ui'
import { useMenuProfile } from './useMenuProfile'

export const MenuProfile = () => {
  const { open, user, theme, handleOpenDialog, handleCloseDialog } =
    useMenuProfile()

  return (
    <div>
      <Avatar
        aria-haspopup="true"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        onClick={handleOpenDialog}
        user={user.username}
        src={user.photoUrl}
        sx={{ cursor: 'pointer' }}
      />
      <Dialog.Root
        open={open}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Dialog.Header id="alert-dialog-title">
          <IconButton onClick={handleCloseDialog}>
            <CloseIcon sx={{ color: theme.palette.grey[600] }} />
          </IconButton>
        </Dialog.Header>

        <Dialog.Content>
          <CardUser closeModal={handleCloseDialog} />
        </Dialog.Content>
      </Dialog.Root>
    </div>
  )
}
