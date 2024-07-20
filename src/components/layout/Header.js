import theme from "@/styles/theme";
import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Header = () => {
  return (
    <Box
      sx={{
        bgcolor: theme.palette.secondary.main,
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
      <Typography sx={{ color: "white" }}>
        Free Courses 🌟 Sale Ends Soon, Get It Now
      </Typography>
      <ArrowForwardIcon sx={{ color: "white" }} />
    </Box>
  );
};

export default Header;
