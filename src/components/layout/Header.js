import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Header = () => {
  return (
    <Box
      sx={{
        bgcolor: "#00274d", 
        px: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        p: 1,
        m: 2,
        borderRadius: 2,
      }}
    >
      <Typography sx={{ color: "#ffffff", fontSize: { xs: "10px", md: "16px" } }}>
        Free Courses 🌟 Sale Ends Soon, Get It Now
      </Typography>
      <ArrowForwardIcon sx={{ color: "#ffffff" }} />
    </Box>
  );
};

export default Header;
