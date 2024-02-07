import { ComponentProps } from 'react'
import { Typography } from '@mui/material'
import MuiAlert from '@mui/material/Alert'

type AlertType = ComponentProps<typeof MuiAlert> & {
  errors: {
    email: string | undefined
    username: string | undefined
    password: string | undefined
  }
}

export const Alert = ({ errors, ...rest }: AlertType) => {
  const { email, password, username } = errors

  return (
    <>
      {email && password && username && (
        <MuiAlert {...rest} variant="filled" severity="error">
          <Typography component="span" variant="h5">
            Campos preenchido incorretamente
          </Typography>
        </MuiAlert>
      )}
    </>
  )
}
