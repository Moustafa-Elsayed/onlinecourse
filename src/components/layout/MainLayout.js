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
      <Box
        sx={{          
          pr: { xs: 1, sm: 3, md: 15}, 
          pl: { xs: 1, sm: 3, md: 15}, 
          mb:5
        }}
      >

      <NavBar />
      </Box>
      <Box
        sx={{
          flex: 1,
          mt: 5,
          pr: { xs: 1, sm: 3, md: 18}, 
          pl: { xs: 1, sm: 3, md: 18}, 
        }}
      >
        {children}
      </Box>
      
      {/* <Footer /> */}
    </Box>
  );
};

export default MainLayout;
