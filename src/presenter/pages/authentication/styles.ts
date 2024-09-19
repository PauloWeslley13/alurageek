import { alpha, css, lighten, styled } from '@mui/material/styles'
import Link, { LinkProps } from '@mui/material/Link'
import Typography, { TypographyProps } from '@mui/material/Typography'

export const Wrapper = styled('div')(
  ({ theme }) => css`
    width: 100%;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: ${theme.spacing(4)};
    }
  `,
)

export const StyledLink = styled(Link)<LinkProps>(({ theme }) => ({
  textTransform: 'uppercase',
  textDecoration: 'none',
  marginTop: theme.spacing(5),
  color: alpha(theme.palette.primary.light, 0.9),
  ':hover': {
    color: lighten(theme.palette.primary.dark, 0.3),
  },
}))

export const StyledTypography = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    paddingBottom: theme.spacing(5),
    textTransform: 'uppercase',
    color: theme.palette.primary.main,
  }),
)
