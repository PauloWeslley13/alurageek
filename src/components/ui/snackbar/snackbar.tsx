import { ComponentProps } from 'react'
import { ClickAwayListener } from '@mui/base/ClickAwayListener'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import useSnackBar from './useSnackbar'
import * as S from './snackbar-styles'

type UseSnackbarProps = ComponentProps<typeof S.TriggerButton> & {
  label: string
}

export function UseSnackbar({ label, ...rest }: UseSnackbarProps) {
  const { open, onClickAway, getRootProps } = useSnackBar()

  return (
    <>
      <S.TriggerButton {...rest} type="button">
        {label} <AddShoppingCartIcon />
      </S.TriggerButton>
      {open ? (
        <ClickAwayListener onClickAway={onClickAway}>
          <S.CustomSnackbar {...getRootProps()}>Hello World</S.CustomSnackbar>
        </ClickAwayListener>
      ) : null}
    </>
  )
}
