import Typography from '@mui/material/Typography'
import { CreateCategory } from './components'
import * as S from './panel-adm-styles'

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
