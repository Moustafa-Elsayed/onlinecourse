import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CustomButton from "@/components/shared/CustomButton";
import theme from "@/styles/theme";
import { MainUrl } from "@/lib/api/constants";

const ImageGrid = ({ duration, level, instructor, photos,price }) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          overflowX: "auto", 
          gap: 1,
          flexWrap: "wrap", 
        }}
      >
        {photos.map((photo, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 0 300px", 
              position: "relative",
              height: 300,
            }}
          >
            <Image
              src={`${MainUrl}${photo}`}
              layout="fill" 
              objectFit="cover"
              alt={`Course Image ${index + 1}`}
              style={{
                borderRadius: "10px",
              }}
            />
          </Box>
        ))}
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
