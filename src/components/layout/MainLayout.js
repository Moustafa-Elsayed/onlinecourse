import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Box } from "@mui/material";

const MainLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <NavBar />
      <Box
        sx={{
          flex: 1,
          mt: 5,
          pr: { xs: 2, sm: 3, md: 5 }, 
          pl: { xs: 2, sm: 3, md: 5}, 
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
