import { Box, Typography } from "@mui/material";
import React from "react";

const PageTitle = ({ title, subTitle }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: { xs: "start", sm: "start", md: "flex-start" },
        flexDirection: { xs: "column", sm: "column", md: "row" },
      }}
    >
      <Typography
        variant="title"
        sx={{
          fontWeight: "bold",
          mb: 2,
          maxWidth: "100%",
         
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          maxWidth: "600px",
          mb: 2,
          maxWidth: { xs: "80%", sm: "80%", md: "50%" },
        }}
      >
        {subTitle}
      </Typography>
    </Box>
  );
};

export default PageTitle;
