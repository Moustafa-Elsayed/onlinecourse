import React from "react";
import CustomButton from "@/components/shared/CustomButton";
import theme from "@/styles/theme";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
const CourseTitle = ({ title, subtitle, _id }) => {
  const router = useRouter();
  const handleViewDetails = () => {
    router.push(`/courses/${_id}`);
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
        <Typography variant="body2" color="textSecondary">
          {subtitle}
        </Typography>
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
