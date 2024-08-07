import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CustomButton from "@/components/shared/CustomButton";
import theme from "@/styles/theme";
import Course1 from "../../../../public/Image/course1.png";
import Course2 from "../../../../public/Image/course2.png";
import Course3 from "../../../../public/Image/course3.png";
import { BaseUrl } from "@/lib/api/constants";

const ImageGrid = ({ duration, level, instructor, photo }) => {
  console.log("photo", photo);

  // Ensure photo path uses forward slashes
  const imageUrl = photo ? photo.replace(/\\/g, "/") : null;

  // Construct the full URL
  const fullImageUrl =
    imageUrl && !imageUrl.startsWith("http")
      ? `${BaseUrl}${imageUrl}`
      : imageUrl;

  return (
    <Box sx={{ mt: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {/* Render the API photo if available */}
        {fullImageUrl && (
          <Box sx={{ flex: 1 }}>
            <Image
              src={fullImageUrl}
              width={300}
              height={300}
              layout="responsive"
              alt="Course Photo"
            />
          </Box>
        )}

        {/* Render static course images */}
        <Box sx={{ flex: 1 }}>
          <Image
            src={Course1}
            width={300}
            height={300}
            layout="responsive"
            alt="Course 1"
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Image
            src={Course2}
            width={300}
            height={300}
            layout="responsive"
            alt="Course 2"
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Image
            src={Course3}
            width={300}
            height={300}
            layout="responsive"
            alt="Course 3"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          flexDirection: "row",
          mt: 3,
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 2,
            flexDirection: "row",
          }}
        >
          <CustomButton
            title={duration}
            backgroundColor={theme.palette.primary.light}
            border="1px solid #e9e3e3"
          />
          <CustomButton
            title={level}
            border="1px solid #e9e3e3"
            backgroundColor={theme.palette.primary.light}
          />
        </Box>
        <Box>
          <Typography>By {instructor}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageGrid;
