import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Course1 from "../../../../public/Image/course1.png";
import Course2 from "../../../../public/Image/course2.png";
import Course3 from "../../../../public/Image/course3.png";
import CustomButton from "@/components/shared/CustomButton";
import theme from "@/styles/theme";

const ImageGrid = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
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
            title={"4 Weeks"}
            backgroundColor={theme.palette.primary.light}
            border="1px solid #e9e3e3"
          />
          <CustomButton
            title={"Beginner"}
            border="1px solid #e9e3e3"
            backgroundColor={theme.palette.primary.light}
          />
        </Box>
        <Box>
          <Typography>By John Smith</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageGrid;
