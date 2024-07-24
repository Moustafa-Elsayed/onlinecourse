import CustomButton from "@/components/shared/CustomButton";
import theme from "@/styles/theme";
import { Box, Typography } from "@mui/material";
import React from "react";

const CourseTitle = ({ title, subtitle }) => {
  return (
    <Box sx={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
    }}>
      <Box sx={{flexGrow:1,maxWidth:"80%"}}>
        <Typography variant="h3" sx={{fontWeight:"bold",mb:1}}>{title}</Typography>
        <Typography variant="body2">{subtitle}</Typography>
      </Box>

      <CustomButton
        title={"View Course"}
        backgroundColor={theme.palette.primary.light}
      />
    </Box>
  );
};

export default CourseTitle;
