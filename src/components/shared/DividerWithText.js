import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "@/styles/theme";

const DividerWithText = ({ text }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
      <Box
        sx={{ flexGrow: 1, borderBottom: "1px solid", borderColor: "#e8e2e2" }}
      />
      {text && (
        <Typography sx={{ mx: 2, color: theme.palette.primary.lightgrey }}>
          {text}
        </Typography>
      )}
      <Box
        sx={{ flexGrow: 1, borderBottom: "1px solid", borderColor: "#e8e2e2" }}
      />
    </Box>
  );
};

export default DividerWithText;
