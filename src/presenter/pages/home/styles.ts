import { css, styled } from '@mui/material'

export const StyledHeading = styled('header')(
  ({ theme }) => css`
    background: url('/banner-hero.png');
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    height: ${theme.spacing(116)};
    padding: ${theme.spacing(8)};
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    > div {
      display: flex;
      flex-direction: column;
      gap: ${theme.spacing(4)};
      padding-left: ${theme.spacing(85)};
      color: ${theme.palette.common.white};

      h3 {
        font-weight: ${theme.typography.font.semibold};
        font-size: ${theme.typography.font['5xl']};

        @media (max-width: ${theme.breakpoints.values.sm}px) {
          text-align: center;
        }
      }

      span {
        font-family: ${theme.typography.font.OPEN_SANS};
        font-size: ${theme.typography.font.lg};
        font-weight: ${theme.typography.font.semibold};
        line-height: 1.57;
      }

      @media (max-width: ${theme.breakpoints.values.sm}px) {
        justify-content: center;
        align-items: center;
        padding-left: 0px;
      }

      @media (max-width: ${theme.breakpoints.values.md}px) {
        padding-left: 0px;
      }
    }

    @media (max-width: ${theme.breakpoints.values.md}px) {
      height: auto;
      justify-content: center;
      align-items: center;
    }
  `,
)
