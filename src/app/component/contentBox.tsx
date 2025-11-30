"use client"
import { FC, ReactNode } from "react";
import { SxProps, Theme } from "@mui/material";
import { Box } from "@mui/material";

interface ContentBoxProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

const ContentBox: FC<ContentBoxProps> = ({ children,sx }) => {
  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 6, lg: 10, xl: 14 },...sx }}>
      {children}
    </Box>
  );
};

export default ContentBox;
