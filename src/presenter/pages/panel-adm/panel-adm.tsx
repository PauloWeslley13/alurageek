import { CreateCategory } from './modules'
import * as S from './panel-adm-styles'
import Typography from '@mui/material/Typography'

export const PanelAdm = () => {
  return (
    <S.PanelAdmContainer>
      <Typography component="h3" variant="h2" color="primary.dark">
        Criar Categoria
      </Typography>

      <CreateCategory />
    </S.PanelAdmContainer>
  )
}
