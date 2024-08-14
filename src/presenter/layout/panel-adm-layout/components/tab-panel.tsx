import { ComponentProps, FC, ReactNode } from "react";
import { Box } from "@mui/material";

type TabPanelProps = ComponentProps<"div"> & {
  path: string;
  value: number;
  children: ReactNode;
};

const TabPanel: FC<TabPanelProps> = ({ children, value, path, ...other }) => {
  const label = value === 0 ? "products" : "categories";

  return (
    <div
      role="tabpanel"
      hidden={label !== path}
      id={`vertical-tabpanel-${label}`}
      aria-labelledby={`vertical-tab-${label}`}
      {...other}
    >
      {label === path && (
        <Box sx={{ p: 3, height: 770, overflow: "auto" }}>{children}</Box>
      )}
    </div>
  );
};

export { TabPanel };
