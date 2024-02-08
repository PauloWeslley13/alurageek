import { Typography, useTheme } from '@mui/material'
import { Button, InputField, SVGLogoIcon } from '@/components/ui'
import * as S from './footer-styles'

export const FooterBar = () => {
  const theme = useTheme()

  return (
    <S.FooterBar>
      <div className="MuiFooterBar">
        <div style={{ flex: 1 }}>
          <SVGLogoIcon />
        </div>

        <S.FooterList sx={{ flex: 1 }}>
          <ul>
            <li>Quienes somos</li>
            <li>Política de privacidad</li>
            <li>Programa de fidelidad</li>
            <li>Nuestras Tiendas</li>
            <li>Quiero ser franquiciado</li>
            <li>Anúncie aquí</li>
          </ul>
        </S.FooterList>
      </div>

      <S.FooterForm>
        <Typography
          component="h4"
          variant="h5"
          sx={{ color: theme.palette.primary.dark }}
        >
          Hable con nosotros
        </Typography>

        <form>
          <InputField label="Name" placeholder="Informe seu nome" />
          <InputField label="Message" placeholder="Escribe tu mensaje" />

          <Button
            label="Enviar mensaje"
            sx={{
              background: theme.palette.primary.main,
              color: theme.palette.common.white,
              height: theme.spacing(11),
              textTransform: 'uppercase',
              letterSpacing: 1.2,
            }}
          />
        </form>
      </S.FooterForm>
    </S.FooterBar>
  )
}
