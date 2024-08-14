import { blueGrey, grey } from "@mui/material/colors";
import { css, darken, lighten, styled } from "@mui/material";

export const FooterBar = styled("footer")(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacing(1)};
    padding: ${theme.spacing(5)};
    background: ${lighten(theme.palette.primary.contrastText, 0.9)};
  `,
);

export const FooterContainer = styled("footer")(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 460px;
    grid-template-rows: 1fr;
    grid-column-gap: ${theme.spacing(5)};
    margin-top: ${theme.spacing(12)};
    padding: ${theme.spacing(15.4, 90)};
    background: ${theme.palette.mode === "dark"
      ? darken(blueGrey.A200, 0.6)
      : grey.A100};

    @media (max-width: ${theme.breakpoints.values.lg}px) {
      grid-template-columns: 1fr;
      padding: ${theme.spacing(5, 10)};
    }
  `,
);

export const FooterList = styled("div")(
  ({ theme }) => css`
    flex: 1;

    ul {
      list-style-type: none;
      padding: ${theme.spacing(1)};
      display: flex;
      gap: ${theme.spacing(2.4)};
      flex-direction: column;

      > li {
        color: ${theme.palette.primary.light};
        font-weight: ${theme.typography.font.semibold};
      }

      @media (max-width: ${theme.breakpoints.values.md}px) {
        text-align: center;
      }
    }
  `,
);

export const FooterForm = styled("div")(
  ({ theme }) => css`
    > form {
      margin-top: ${theme.spacing(1.9)};
      display: flex;
      flex-direction: column;
      gap: ${theme.spacing(2)};
    }

    @media (max-width: ${theme.breakpoints.values.md}px) {
      text-align: center;
    }
  `,
);

export const FooterContent = styled("div")(
  ({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: ${theme.spacing(2)};

    @media (max-width: ${theme.breakpoints.values.sm}px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: ${theme.spacing(3)};
    }
  `,
);
