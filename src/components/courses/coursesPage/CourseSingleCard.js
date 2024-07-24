import { Box } from "@mui/material";
import React from "react";
import CourseTitle from "./CourseTitle";
import ImageGrid from "./ImageGrid";
import Curriculum from "./Curriculum";

const CourseSingleCard = ({
  title,
  subtitle,
  courseSlug,
  curriculum,
  duration,
  level,
  instructor,
  courseId,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: 3,
      }}
    >
      <Box sx={{ p: 4 }}>
        <Box>
          <CourseTitle title={title} subtitle={subtitle} courseId={courseId} />
        </Box>
        <Box>
          <ImageGrid
            instructor={instructor}
            duration={duration}
            level={level}
          />
        </Box>
        <Box>
          <Curriculum curriculum={curriculum} />
        </Box>
      </Box>
    </Box>
  );
};

export default CourseSingleCard;
