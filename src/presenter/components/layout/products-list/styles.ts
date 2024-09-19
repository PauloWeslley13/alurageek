import { css, styled } from '@mui/material'

export const StyledProductListContainer = styled('div')(
  ({ theme }) => css`
    padding: ${theme.spacing(5.5)};

    > div:nth-of-type(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: ${theme.spacing(2)};
    }

    @media (max-width: ${theme.breakpoints.values.sm}px) {
      padding-inline: ${theme.spacing(1)};
    }

    @media (max-width: ${theme.breakpoints.values.md}px) {
      padding-inline: 0px;
    }
  `,
)
