import { useState } from 'react'
import { IconButton, useTheme } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useAppSelector } from '@/store/hook/useRedux'
import { Avatar, Dialog, CardUser } from '../../../../ui/index'

export const MenuProfile = () => {
  const { user } = useAppSelector((state) => state.user)
  const [open, setOpen] = useState<boolean>(false)
  const theme = useTheme()

  const handleOpenDialog = () => {
    setOpen(true)
  }

  const handleCloseDialog = () => {
    setOpen(false)
  }

  return (
    <div>
      <Avatar
        aria-haspopup="true"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        onClick={handleOpenDialog}
        user={user.username}
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
          <CardUser />
        </Dialog.Content>
      </Dialog.Root>
    </div>
  )
}
