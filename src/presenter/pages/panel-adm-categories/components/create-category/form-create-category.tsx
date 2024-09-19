import React from 'react'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { InputField } from '@/presenter/components/ui'
import { useCreateCategory } from './hook'
import * as S from './styles'

export function FormCreateCategory() {
  const {
    openSnackBar,
    errors,
    register,
    handleSubmit,
    handlerCreateCategory,
    handleCloseSnackbar,
  } = useCreateCategory()

  return (
    <S.FormCategoryContainer>
      <form onSubmit={handleSubmit(handlerCreateCategory)}>
        <InputField
          {...register('name')}
          id="name"
          type="text"
          label="Categoria"
          placeholder="Informe a categoria"
          error={!!errors.name?.message}
          helperText={errors.name?.message}
          sx={{ width: '100%' }}
        />

        <Button
          variant="primary"
          type="submit"
          sx={{
            alignSelf: 'center',
            width: 320,
            height: (theme) => theme.spacing(12),
          }}
        >
          Cadastrar
        </Button>
      </form>

      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Categoria cadastrada!"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseSnackbar}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </S.FormCategoryContainer>
  )
}
