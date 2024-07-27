import { Box } from "@mui/material";
import React, { useState } from "react";
import CourseTitle from "./CourseTitle";
import ImageGrid from "./ImageGrid";
import Curriculum from "./Curriculum";
import { useRouter } from "next/router";

const CourseSingleCard = ({
  title,
  subtitle,
  curriculum,
  duration,
  level,
  instructor,
  id,
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
          <CourseTitle title={title} subtitle={subtitle} id={id} />
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
