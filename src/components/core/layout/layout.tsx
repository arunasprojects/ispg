import { Box } from "@mui/material";
import React from "react";
import MainHeader from "./header/main-header";
import MainFooter from "./footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box>
      <MainHeader />
      <Box sx={{ minHeight: `calc(100vh - 115px)`, p: 2 }}>{children}</Box>
      <MainFooter />
    </Box>
  );
};

export default MainLayout;
