import { Box } from "@mui/material";
import React from "react";
import CourseTitle from "./CourseTitle";
import ImageGrid from "./ImageGrid";

const CourseSingleCard = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: 3,
      }}
    >
      <Box sx={{ p: 4 }}>
        <Box>
          <CourseTitle
            title={"Web Design Fundamentals"}
            subtitle={
              "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites."
            }
          />
        </Box>
        <Box>
            <ImageGrid />
        </Box>
        <Box>last</Box>
      </Box>
    </Box>
  );
};

export default CourseSingleCard;
