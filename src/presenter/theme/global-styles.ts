import { css, Theme } from "@mui/material/styles";
import { cyan, indigo } from "@mui/material/colors";

export const Global = (theme: Theme) => css`
  * {
    box-sizing: "border-box";
    margin: 0;
    padding: 0;
    font-family: ${theme.typography.font.OPEN_SANS};

    ::-webkit-scrollbar {
      width: 0.5rem;
    }
    ::-webkit-scrollbar-track {
      background: ${theme.palette.background.default};
    }
    ::-webkit-scrollbar-thumb {
      background: ${theme.palette.mode === "dark" ? indigo[500] : cyan[500]};
      border-radius: ${theme.spacing(2)};
    }

    font-display: swap;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  button {
    cursor: pointer;
  }
`;
