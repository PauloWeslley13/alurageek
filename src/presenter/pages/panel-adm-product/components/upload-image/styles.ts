import { styled } from "@mui/material";

export const VisuallyHidden = styled("div")`
  visibility: hidden;
`;

export const Label = styled("label")<{ prevFile: string }>`
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.font.sm};
  color: ${(props) => props.theme.palette.secondary.main};
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed
    ${(props) =>
      props.theme.palette.mode === "light"
        ? props.theme.palette.secondary.light
        : props.theme.palette.secondary.dark};
  border-radius: ${(props) => props.theme.spacing(1)};
  padding-top: ${(props) => props.theme.spacing(1)};
  height: ${(props) =>
    props.prevFile !== "" ? props.theme.spacing(75) : "200px"};

  span {
    font-size: ${(props) => props.theme.typography.pxToRem(17)};
    font-weight: ${(props) => props.theme.typography.font.semibold};
  }

  &:hover {
    color: ${(props) => props.theme.palette.secondary.dark};
  }
`;
