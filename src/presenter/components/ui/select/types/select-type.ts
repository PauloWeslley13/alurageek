import { ComponentProps } from "react";
import { SelectProps as MuiSelectProps } from "@mui/material/Select";
import { SxProps } from "@mui/material";

type SelectType = ComponentProps<"select"> &
  MuiSelectProps & {
    id: string;
    label: string;
    helperText?: string | undefined;
    error?: boolean;
    sx?: SxProps;
    options: {
      id: string;
      name: string;
    }[];
  };

export type { SelectType };
