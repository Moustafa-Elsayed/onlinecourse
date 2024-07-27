import React, { useState } from "react";
import CustomButton from "@/components/shared/CustomButton";
import theme from "@/styles/theme";
import { Box, Typography } from "@mui/material";

const CourseTitle = ({ title, subtitle, handleViewDetails }) => {
 

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ flexGrow: 1, maxWidth: "80%", mb: 1 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2">{subtitle}</Typography>
      </Box>

      <CustomButton
        title={"View Course"}
        backgroundColor={theme.palette.primary.light}
        border="1px solid #e9e3e3"
        onClick={handleViewDetails}
      />
    </Box>
  );
};

export default CourseTitle;
