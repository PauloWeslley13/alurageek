import { css, styled } from "@mui/material/styles";
import { blueGrey, grey } from "@mui/material/colors";

export const CardProduct = styled("div")(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 270px;
    padding: ${theme.spacing(1.5)};
    box-shadow: ${theme.shadows[1]};
    border-radius: ${theme.spacing(2)};
    background: ${theme.palette.mode === "dark" ? blueGrey[800] : grey[100]};
  `,
);

export const CardProductBody = styled("div")(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing(2)};
    margin-top: ${theme.spacing(2)};
  `,
);

export const CardProductImage = styled("div")<{ imageUrl: string }>(
  ({ theme, imageUrl }) => css`
    background: url(${imageUrl});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: ${theme.spacing(2)};
    max-width: 270px;
    height: ${theme.spacing(45)};
    padding: ${theme.spacing(0.75)};
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: flex-end;
    transition: all 0.3s ease-in-out;

    div {
      display: none;
      opacity: 0;
    }

    &:hover {
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: ${theme.spacing(2)};
        background: linear-gradient(
          to bottom,
          ${grey[500]},
          rgba(0, 0, 0, 0.7)
        );
        backdrop-filter: blur(10px);
        opacity: 0.2;
        z-index: -1;
      }

      div {
        display: block;
        opacity: 1;
      }
    }
  `,
);
