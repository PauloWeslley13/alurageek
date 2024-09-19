import { css, styled } from '@mui/material'
import { grey } from '@mui/material/colors'

type NavBarContainerProps = {
  scroll: boolean
}

export const NavBarContainer = styled('div')<NavBarContainerProps>(
  ({ theme, scroll }) => ({
    width: '100%',
    padding: theme.spacing(2),
    maxWidth: theme.breakpoints.values.lg,
    margin: '0 auto',
    transition: 'all .2s ease-in',

    ...(scroll && {
      backdropFilter: 'blur(10px)',
      '-webkit-backdrop-filter': 'blur(10px)',
      background: `linearGradient(to bottom, ${grey[900]}, rgba(0, 0, 0, 0.9))`,
      borderRadius: theme.spacing(2),
      boxShadow: theme.shadows[4],
      padding: theme.spacing(0.5),
      marginTop: 10,
      height: 105,
    }),
  }),
)

export const Nav = styled('nav')(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.spacing(5.5)};
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${theme.breakpoints.values.sm}px) {
      justify-content: space-between;
      padding: ${theme.spacing(2)};
    }
  `,
)
