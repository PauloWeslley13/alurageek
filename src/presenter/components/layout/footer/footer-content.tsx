import { Typography, useTheme } from '@mui/material'
import Button from '@mui/material/Button'
import { InputField, SVGLogoIcon } from '../../ui'
import * as S from './footer-styles'

type FooterBarProps = { footerList: string[] }

export const FooterContent = ({ footerList }: FooterBarProps) => {
  const theme = useTheme()

  return (
    <S.FooterBody>
      <S.FooterContent>
        <div style={{ flex: 1 }}>
          <SVGLogoIcon />
        </div>

        <S.FooterList sx={{ flex: 1 }}>
          <ul>
            {footerList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </S.FooterList>
      </S.FooterContent>

      <S.FooterForm>
        <Typography
          component="h4"
          variant="h3"
          sx={{ color: theme.palette.primary.dark }}
        >
          Fale Conosco
        </Typography>

        <form>
          <InputField label="Nome" placeholder="Informe seu nome" />
          <InputField label="Mensagem" placeholder="Informe sua mensagem" />

          <Button
            variant="primary"
            sx={{
              height: theme.spacing(11),
              textTransform: 'uppercase',
              letterSpacing: 1.2,
            }}
          >
            Enviar mensagem
          </Button>
        </form>
      </S.FooterForm>
    </S.FooterBody>
  )
}
