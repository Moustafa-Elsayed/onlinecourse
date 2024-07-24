import CustomButton from "@/components/shared/CustomButton";
import theme from "@/styles/theme";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const CourseTitle = ({ title, subtitle, courseId }) => {
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

      <Link href={`/courses/${courseId}`}>
        <CustomButton
          title={"View Course"}
          backgroundColor={theme.palette.primary.light}
          border="1px solid #e9e3e3"
          component="a"
        />
      </Link>
    </Box>
  );
};

export default CourseTitle;
