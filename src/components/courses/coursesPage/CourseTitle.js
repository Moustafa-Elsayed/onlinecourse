import React, { useState } from "react";
import CustomButton from "@/components/shared/CustomButton";
import theme from "@/styles/theme";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const CourseTitle = ({ title, subtitle, courseId }) => {
  const router = useRouter();
  const [activeCourseId, setActiveCourseId] = useState(null);

  const handleButtonClick = () => {
    setActiveCourseId(courseId);
    console.log(`Active Course ID: ${courseId}`);
    router.push(`/courses/${courseId}`);
  };

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
        onClick={handleButtonClick}
      />
    </Box>
  );
};

export default CourseTitle;
