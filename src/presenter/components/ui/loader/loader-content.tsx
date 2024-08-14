import { FC } from "react";
import Stack, { StackProps } from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

type LoaderContentProps = StackProps & {
  message?: string;
};

const LoaderContent: FC<LoaderContentProps> = ({
  message = "",
  sx,
  ...props
}) => (
  <Stack
    {...props}
    sx={{
      ...sx,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 2,
    }}
  >
    <CircularProgress size={35} />
    {message && (
      <Typography component="span" variant="h2">
        {message}
      </Typography>
    )}
  </Stack>
);

export default LoaderContent;
