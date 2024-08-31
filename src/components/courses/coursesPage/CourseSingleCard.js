import { Box } from "@mui/material";
import React, { useState } from "react";
import CourseTitle from "./CourseTitle";
import ImageGrid from "./ImageGrid";
import Curriculum from "./Curriculum";

const CourseSingleCard = ({
  title,
  subtitle,
  curriculum,
  duration,
  level,
  instructor,
  _id,
  photos,
}) => {
  
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: 3,
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box>
          <CourseTitle title={title} subtitle={subtitle} _id={_id} />
        </Box>
        <Box>
          <ImageGrid
            instructor={instructor}
            duration={duration}
            level={level}
            photos={photos}
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
